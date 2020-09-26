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
      userDataLoaded: false,
      userPostExpenses: null,    
      userPostExpensesLoaded: false,  
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
        userPostExpenses: res.post_expenses.map((expense) => { return expense }),
        userPostExpensesLoaded: true,
      })
    })
  }

  handleLoginSubmit(e, data) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        password: data.password,
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

  handleRegisterSubmit(e, data) {
    e.preventDefault();
    fetch('/users', {
      method: 'POST',
      body: JSON.stringify({
        user: {
          name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          username: data.username,
          password: data.password,
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

  updateStateFunction = (param) => {
    this.setState({
      updateState: param,
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Header auth={this.state.auth} /> 
            <div className="container">
                <Route exact path='/' 
                    render={() => ( <Home /> 
                )} />

                <Route exact path='/login' render={() => (
                  this.state.auth
                  ? <Redirect to='/dashboard' />
                  : <LoginForm handleLoginSubmit = {this.handleLoginSubmit} />
                )} /> 

                <Route exact path="/logout" render={() => {
                  this.state.auth
                  ? this.logout()
                  : <Redirect to='/' />
                }}/>

                <Route exact path='/register' render={() => (
                  this.state.auth
                  ? <Redirect to='/dashboard' />
                  : <RegisterForm handleRegisterSubmit = {this.handleRegisterSubmit} />
                )} />

                

                <Route exact path='/dashboard' render={() => (
                  !this.state.auth
                  ? <Redirect to='/login' />
                  : this.state.userPostExpensesLoaded ? <Dashboard  user={this.state.userData} postExpenses={this.state.userPostExpenses} /> 
                  : ''
                )} />
                
            </div>
        </div>        
      </Router>
    );
  }
}

export default App;