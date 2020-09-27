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
            total: 0.00,
        }
        this.deletePostExpense = this.deletePostExpense.bind(this);
        this.changePage = this.changePage.bind(this);
        this.getPostExpense = this.getPostExpense.bind(this);
        // this.handleExpenseSubmit = this.handleExpenseSubmit(this);          
    } 

    componentDidMount() {

    }

    changePage(page) {
      this.setState({
        page: page,
      });
    }

    deletePostExpense(id) {
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
        fetch(`/api/v1/post_expenses/${id ? id : ''}`, {
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
        .then(expense => {
          this.setState({
            expenseToEdit: expense,
          })
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

    getPostExpense(id) {
      console.log(`Expense id: ${id}`)
      fetch(`/api/v1/post_expenses/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${Auth.getToken()}`,
          token: `${Auth.getToken()}`,
        }
      })
        .then((res) => res.json())
        .then((expense) => {
          console.log(`Here is the expense to edit: ${expense.post_expense}`);
          this.setState({
            expenseToEdit: expense.post_expense,
            page: 'edit',
          });
        })
        .catch((err) => {
          console.log(err);
        })        
    }
    
    decideWhichToRender = () => {
        if(this.state.page === 'default'){
            return <div>
                <h1>Hello, {this.state.user.name} </h1>
                {this.state.expenses.map((expense) => { 
                  this.state.total+= expense.cost 
                    return <PostExpense expense={expense} key={expense.id} changePage={this.changePage} deletePostExpense={this.deletePostExpense} getPostExpense={this.getPostExpense} />
                })} 
                <h3>Total: ${this.state.total}</h3>
            </div>
        }
        else if(this.state.page === 'new'){
          return <ExpenseForm handleExpenseSubmit={this.handleExpenseSubmit} page={this.state.page}/>
        }
        else if(this.state.page === 'edit'){
          return <ExpenseForm handleExpenseSubmit={this.handleExpenseSubmit} page={this.state.page} expense={this.state.expenseToEdit} />
        }
    }

    render() {
        return <>
            {this.decideWhichToRender()}
        </>
    }
};
export default Dashboard;