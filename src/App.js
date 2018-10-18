import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import LoginPage from './containers/LoginPage';

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  state = {
    isLoading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch('/api/people');
    const body = await response.json();
    this.setState({ people: body, isLoading: false });
  }

  render() {
    // const {people, isLoading} = this.state;

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };



   
    return (
      <Router>
        <div className="App">
          
          
          
          <Route path="/" component={LoginPage} />

        </div>
      </Router>
      
    );
  }
}

export default App;
