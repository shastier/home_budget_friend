import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../Auth';

import ExpenseForm from './ExpenseForm';
import PostExpense from './PostExpense';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            expenses: this.props.postExpenses,
            page: this.props.page,
            expenseToEdit: null,
        }
        this.deletePostExpense = this.deletePostExpense.bind(this);
        // this.handleExpenseSubmit = this.handleExpenseSubmit(this);          
    } 

    componentDidMount() {

    }

    deletePostExpense(id) {
      console.log(`Expense id: ${id}`)
      fetch(`/api/v1/post_expenses/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Token ${Auth.getToken()}`,
          token: Auth.getToken(),
          'Content-Type': 'application/json',
        }
      })
      .then((res) => res.json())
      .then((res) => {
        this.getUserProfile();
      })
      .catch((err) => {
        console.log(err);
      });
    }

    handleExpenseSubmit(method, e, data, id) {
        e.preventDefault();
        fetch(`/api/v1/post_expenses/${id || ''}`, {
          method: method,
          body: JSON.stringify({
            post_expense: {
              expense_id: data.expense_id,
              cost: data.cost,
              paid: data.paid,
              date: data.date,
            }
          }),
          headers: {
            'Authorization': `Token ${Auth.getToken()}`,
            token: Auth.getToken(),
            'Content-Type': 'application/json',
          }
        }).then(res => res.json())
        .then(res => {
            this.getUserProfile()
        }).catch(err => {
          console.log(err);
        })
    }

    getUserProfile = () => {
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
    
    decideWhichToRender = () => {
        if(this.state.page === 'default'){
            return <div>
                <h1>Hello, {this.state.user.name} </h1>
                {this.state.expenses.map((expense) => {  
                    return <PostExpense expense={expense} key={expense.id} deletePostExpense={this.deletePostExpense} />
                })} 
            </div>
        }
        else if(this.state.page === 'new'){
          return <ExpenseForm handleExpenseSubmit={this.handleExpenseSubmit} page={this.state.page}/>
        }
        else if(this.state.page === 'edit'){
          return <ExpenseForm handleExpenseSubmit={this.handleExpenseSubmit} page={this.state.page} />
        }
    }

    render() {
        return <>
            {this.decideWhichToRender()}
        </>
    }
};
export default Dashboard;

// <Route exact path='/new' render={() => (
//     !this.state.auth
//     ? <Redirect to='/login' />
//     : <ExpenseForm  user={this.state.userData} handleExpenseSubmit={this.handleExpenseSubmit} edit={false} /> 
//   )} />

//   <Route exact path='/edit' render={() => (
//     !this.state.auth
//     ? <Redirect to='/login' />
//     : <ExpenseForm  user={this.state.userData} handleExpenseSubmit={this.handleExpenseSubmit} edit={true} /> 
//   )} />

// if(this.state.page === 'default'){
//     return <div>
//       <button onClick={() => this.setPage('add')}>Add an outfit!</button>
//       {((this.state.dataLoaded === false) ? <h1>You have no outfits yet</h1> : <UserPage user={this.props.user} outfits={this.state.outfits} yourPage={true} edit={this.edit}/>)}
//     </div>
// }