import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Auth from '../Auth';

import Header from './Header';
import Home from './Home';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Dashboard from './Dashboard';

import AllExpenses from './AllExpenses';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
      userData: null,
      expenses: null,      
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {    
    fetch('/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: `${Auth.getToken()}`,
      }
    }).then(res => res.json())
    .then(res => {
      this.setState({
        userData: res.user,
        userDataLoaded: true,
        userPostExpenses: res.post_expenses,
        userPostExpensesLoaded: true,
      })
    })
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.loginUserName,
        password: this.state.loginPassword,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      console.log(res);
      if (res.token) {
        Auth.authenticateToken(res.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
          loginUserName: '',
          loginUserPassword: '',
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }

  handleRegisterSubmit(e) {
    e.preventDefault();
    fetch('/users', {
      method: 'POST',
      body: JSON.stringify({
        user: {
          username: this.state.registerUserName,
          password: this.state.registerPassword,
          email: this.state.registerEmail,
          name: this.state.registerName,
        }
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      if (res.token) {
        Auth.authenticateToken(res.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }

  logout() {
    fetch('/logout', {
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: Auth.getToken(),
      }
    }).then(res => {
      Auth.deauthenticateUser();
      this.setState({
        auth: Auth.isUserAuthenticated(),
        loginUserName: '',
        loginUserPassword: '',
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Header /> 
            <div className="container">
                <Route exact path='/' 
                    render={() => ( <Home /> )} />
                <Route exact path='/login' 
                    render={() => ( <LoginForm /> )} /> 
                <Route exact path='/register' 
                    render={() => ( <RegisterForm /> )} />
            </div>
        </div>        
      </Router>
    );
  }
}

export default App;