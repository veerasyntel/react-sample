import React from 'react';
import { Routes } from './Routes';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const NavigationTabs = (props) => {
  return (
    <>
      {Routes.map((route, index) => {
        return (
          <NavWrapper>
            <ul>
              <Link
                index={index}
                to={route.path}
                className="navigationTabs_item"
                activeClassName="navigationTabs_item--active"
              >
                <li className="navigationTabs_link">{route.link}</li>
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
    .navigationTabs_item {

      &--active {
        .navigationTabs_link {
          color: green;
        }
      }
    }
    .navigationTabs_link {
      display: inline-block;
      color: white;  
      font-weight: bold; 
      margin: 0
      padding: 0 1.5em;  
      text-decoration: none;    
    }    
  } 
  .navigationTabs_link:hover {
    color: red;    
  }

`