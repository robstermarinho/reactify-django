## Django + React + Babel + Webpack

Basic setup application for:

- Django
- React
- Babel
- Webpack
- JWT Authentication
- REST API

<br>

## Django

1. Install requirements

```
pip install -r requirements.txt
```

2. Make migrations

```
python manage.py makemigrations
```

3. Migrate

```
python manage.py migrate
```

4. Create super user

```
python manage.py createsuperuser
```

## Run server

```
python manage.py runserver
```

### Tests

```
coverage run --omit='*/venv/*' manage.py test
```

### Django REST API

Obtain Token

```
POST 127.0.0.1:8000/api/token/obtain/
```

Refresh Token

```
POST 127.0.0.1:8000/api/token/refresh/
```

## REACT

1. Install dependencies

```
yarn install
```

2. Start dev server

```
yarn dev
```
