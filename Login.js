import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import ReactToPrint from 'react-to-print';

const Login = () => {
  const [userName, setUSerName] = useState('');
  const [password, setPassword] = useState('');
  const loginRef = useRef();
handleLogin = () => {
  
}

  return (
    <div>
      <LoginSection ref={loginRef}>
        <Title>User Login</Title>
        <Input
          type="text"
          placeholder='User Name'        
          onChange={this.userNameInput}
        />
        <Input
          type="password"
          placeholder='Password'
          onChange={this.passwordInput}
        />
        <Button onClick={this.handleLogin}>Login</Button>
      </LoginSection>      
    </div>
    
  )
}
export default Login;

const LoginSuccess = styled.section`
  background: lightgrey;
  boder: 1px solid black;
  margin: 1.0em
`;
const LoginSection = styled.section`
  background: grey;
`;
const Title = styled.h3`
  color: orange;
  font-size: 1.5em;
  padding: 1px;
  margin: 10px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em; 
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border-radius: 3px;
  border: 1px solid black;
  display: block;
  :focus {
    background: white;
    color: blue;
  }
  ::placeholder {
    color: grey;
  }  
`;
const Button = styled.button`
  background: lightgreen;
  padding: 0.5em;
  margin: 0.5em
  font-weight: bold;
  border-radius: 5px;
  :hover {
    background: green;
    opacity: 0.9;
  }
`;



