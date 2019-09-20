import React from 'react';
import { Routes } from './Routes';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const NavigationTabs = (props) => {
  return (
    <>
      {Routes.map(route => {
        return (
          <NavWrapper>
            <ul>
              <Link
                to={route.path}
              >
                <li>{route.link}</li>
              </Link>
            </ul>
          </NavWrapper>
        )
      })}
    </>
  )
}

export default NavigationTabs;

const NavWrapper = Styled.nav`
  background-color: orange;
  float: left;
  padding: 0.5rem 0;  
  ul {
    display: inline-block;
    list-style-type: none;
    margin: 0;
    padding: 0 1rem;
    li {
      display: inline-block;
      color: white;  
      font-weight: bold; 
      margin: 0
      padding: 0 1.5em;      
    }    
  } 
  ul li:hover {
    color: red;    
  }

`