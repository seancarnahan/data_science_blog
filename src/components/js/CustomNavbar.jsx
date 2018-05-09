import React, {Component} from 'react';
import { Navbar, Nav, NavItem  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './css/CustomNavbar.css';

export default class CustomNavbar extends Component{
  render(){
    return(
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Data Science Resources </Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/" >
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/" to="/about" >
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/" to="/signup" >
              Sign Up
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/" to="/createblog" >
              Create
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }

}
