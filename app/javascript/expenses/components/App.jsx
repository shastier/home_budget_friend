import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import AllExpenses from './AllExpenses';

class App extends Component {
  constructor() {
    super();
    this.state = {
        expenses: null,
        updateState: null,
    }
  }

  componentDidMount() {
    fetch('/api/v1/expenses')
      .then(res => res.json())
      .then(res => {
        this.setState({
          expenses: res,          
        })
      }).catch(err => console.log(err));
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
            <Header /> 
            <div className="container">
                <Route exact path='/' 
                    render={() => ( <AllExpenses expenses={this.state.expenses} /> )} />    
            </div>
        </div>        
      </Router>
    );
  }
}

export default App;