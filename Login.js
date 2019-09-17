import React, { useEffect, useState, useRef,useContext } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import ReactToPrint from 'react-to-print';
import {LoginContext} from './index';

const Login = ({handleLogin, history}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUSerName] = useState('');
  const [password, setPassword] = useState('');
  const loginRef = useRef();
  const userContext = useContext(LoginContext);
  handleLogin = () => {
    // if(userName === userContext.userName) {
    //   setIsAuthenticated = true;
    // }
    history.push("./home")
  }
  useEffect( () =>{   
    loginRef.current.focus(); 
    //isAuthenticated ? history.push("/home") : history.push("/")    
  });

  return (
    <div>
      <LoginSection>        
        <Input
          type="text"
          placeholder='User Name'        
          onChange={ (e) => setUSerName(e.target.value)}
          ref={loginRef}
        />
        <Input
          type="password"
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </LoginSection>      
    </div>
    
  )
}
export default Login;

const LoginSection = styled.section`
  background: grey;
  width: 100%
  padding: 0.5em;
  margin: 0.5em; 
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



