import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./LoginPage.css";

class LoginPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }
    
    handleSubmit = event => {
      event.preventDefault();

      var emailstr =  document.getElementById('email').value;
      var passstr = document.getElementById('password').value;
    
      const url = "http://192.168.1.11:8090/api/login"
      
      var user = JSON.stringify({
          "email":emailstr,
          "password":passstr
      });
      
      console.log(user);
      
      
        
      
      try {

        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", url);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader('Access-Control-Allow-Origin','*');
        xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
        xhttp.responseType = 'text';
        xhttp.send(user);
        xhttp.onload = ()=>{
          console.log(xhttp.responseText);
        }
        
        alert("Logged in");
      } catch (e) {
        alert(e.message);
      }
       
    }

    render() { 
        return ( 
          <div className="MainPage">

          <div class="p-3 mb-2 bg-dark text-white" className="NavBarMain">
            <Router>
                <Navbar light color="blue-grey lighten-5" expand="lg" scrolling>
                    <NavbarBrand href="/">
                        <strong>CV Wonder</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="/Dashboard">Dashboard</NavLink>
                          </NavItem>
                          
                          
                          {/* <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>Dropdown</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#">Action</DropdownItem>
                                    <DropdownItem href="#">Another Action</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem> */}
                        </NavbarNav>
                        <NavbarNav right>
                          {/* <NavItem>
                            <form className="form-inline md-form mt-0">
                              <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                          </NavItem> */}

                          <NavItem>
                              <NavLink to="/Contact">Contact</NavLink>
                          </NavItem>

                          <NavItem>
                            <NavLink to="/Profile"> Profile </NavLink>
                          </NavItem>

                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
          </div>
          

            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                 <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                         type="email"
                         value={this.state.email}
                         onChange={this.handleChange}
                     />
                </FormGroup>
                     <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                 <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
          </div>
         );
    }
}
 
export default LoginPage;