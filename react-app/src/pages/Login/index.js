import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Header from '../../components/Header';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, AnimationContainer } from './styles';

import logoImg from '../../../assets/img/logo.svg';

function Login() {
  const formRef = useRef(null);
  const history = useHistory();

  const handleSubmit = useCallback(() => {
    console.log('Submit form');
  }, [history]);

  return (
    <Container>
      <AnimationContainer>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Login</Button>
        </Form>
      </AnimationContainer>
    </Container>
  );
}

export default Login;
