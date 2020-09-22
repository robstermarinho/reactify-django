import datetime

from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework.authtoken.models import Token
from authentication.models import CustomUser


class TestCustomUser(TestCase):
    def setUp(self):
        self.current_year = datetime.datetime.now().year
        self.user = CustomUser.objects.create_user(
            email="robert@marinho.com",
            password="robertpassword",
            is_superuser=True,
            date_of_birth=datetime.date(self.current_year - 20, 1, 1)
        )

    def test_user_creation(self):
        user = CustomUser.objects.get(email=self.user.email)
        self.assertTrue(isinstance(user, CustomUser))
        self.assertEqual(self.user.is_active, True)

    def test_user_age_method(self):
        self.assertEqual(self.user.age, 20)


class TestUserCreateAPI(TestCase):
    def setUp(self):
        self.current_year = datetime.datetime.now().year
        self.user = CustomUser.objects.create_user(
            email="robert@marinho.com",
            password="robertpassword",
            is_superuser=True
        )

    def test_user_create_api_no_data(self):
        data = {}
        response = self.client.post("/api/user/create/", data=data)
        self.assertEqual(response.status_code, 400)
        self.assertEqual(CustomUser.objects.count(), 1)

    def test_user_create_api_with_email_only(self):
        data = {
            "email": "vic@test.com",
        }
        response = self.client.post("/api/user/create/", data=data)
        self.assertEqual(response.status_code, 400)
        self.assertEqual(CustomUser.objects.count(), 1)

    def test_user_create_api_with_password_only(self):
        data = {
            "password": "12345678",
        }
        response = self.client.post("/api/user/create/", data=data)
        self.assertEqual(response.status_code, 400)
        self.assertEqual(CustomUser.objects.count(), 1)

    def test_user_create_api_with_valid_user_and_password(self):
        data = {
            "email": "vic@test.com",
            "password": "12345678",
        }
        response = self.client.post("/api/user/create/", data=data)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(CustomUser.objects.count(), 2)

    def test_user_create_twice(self):
        data = {
            "email": "vic@test.com",
            "password": "12345678",
        }
        self.client.post("/api/user/create/", data=data)

        response = self.client.post("/api/user/create/", data=data)
        self.assertEqual(response.status_code, 400)
        self.assertEqual(CustomUser.objects.count(), 2)

    def test_user_create_pre_existing_email(self):
        data = {
            "email": self.user.email,
            "password": "12345678",
        }
        response = self.client.post("/api/user/create/", data=data)
        self.assertEqual(response.status_code, 400)
        self.assertEqual(CustomUser.objects.count(), 1)


class TestObtainTokenAPI(TestCase):
    def setUp(self):
        self.user = CustomUser.objects.create_user(
            email="robert@marinho.com",
            password="robertpassword",
            is_superuser=True
        )

    def test_obtain_token_api_right_password(self):
        data = {
            "email": self.user.email,
            "password": "robertpassword",
        }
        response = self.client.post("/api/token/obtain/", data=data)
        self.assertEqual(response.status_code, 200)
        self.assertIn('refresh', response.data)
        self.assertIn('access', response.data)
        self.assertIn('email', response.data)

    def test_obtain_token_api_wrong_password(self):
        data = {
            "email": self.user.email,
            "password": "robertpassword!",
        }
        response = self.client.post("/api/token/obtain/", data=data)
        self.assertEqual(response.status_code, 401)


class TestAuthHelloAPI(TestCase):
    def setUp(self):
        self.user = CustomUser.objects.create_user(
            email="robert@marinho.com",
            password="robertpassword",
            is_superuser=True
        )

    def test_api_hello_world_without_token(self):
        response = self.client.post("/api/hello/")
        self.assertEqual(response.status_code, 401)

    def test_api_hello_world_with_token(self):
        data = {
            "email": self.user.email,
            "password": "robertpassword",
        }
        response = self.client.post("/api/token/obtain/", data=data)
        access_token = response.data['access']

        client = APIClient()
        client.credentials(HTTP_AUTHORIZATION='JWT ' + access_token)

        response = client.get("/api/hello/")
        self.assertEqual(response.status_code, 200)
        self.assertIn('hello', response.data)
        self.assertEqual(response.data['hello'], 'world')

