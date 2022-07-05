import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function LogIn() {
  return (
    <Wrapper>
      <Container>
        <TextField
          label="Email Address"
          required
          fullWidth
          name="email"
          autoComplete="email"
        />
        <TextField
          label="Password"
          type="password"
          required
          fullWidth
          name="password"
        />
        <Checkbox value="remember" color="primary" />
        <Button type="submit">Sign in</Button>
      </Container>
    </Wrapper>
  );
}

export default LogIn;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 300px;
  height: 300px;
  padding: 30px;
  border: 4px solid #4da2a2;
`;
