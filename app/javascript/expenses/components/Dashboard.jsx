import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../Auth';

import ExpenseForm from './ExpenseForm';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            expenses: this.props.postExpenses,
        }
        this.handleExpenseSubmit = this.handleExpenseSubmit(this);          
    } 

    componentDidMount() {

    }

    handleExpenseSubmit(method, e, data, id) {
        // e.preventDefault();
        // fetch(`/api/v1/post_expenses/${id || ''}`, {
        //   method: method,
        //   body: JSON.stringify({
        //     post_expense: {
        //       expense_id: data.expense_id,
        //       cost: data.cost,
        //       paid: data.paid,
        //       date: data.date,
        //     }
        //   }),
        //   headers: {
        //     'Authorization': `Token ${Auth.getToken()}`,
        //     token: Auth.getToken(),
        //     'Content-Type': 'application/json',
        //   }
        // }).then(res => res.json())
        // .then(res => {
        //   this.getUserProfile()
        // }).catch(err => {
        //   console.log(err);
        // })
    }

    render() {
        return <>
            <h1>Hello, {this.state.user.name} </h1>
            {this.state.expenses.map((expense) => {  
                return (
                    <span key={expense.id}>
                        <h4>Cost: ${expense.cost}</h4>
                        <h4>Description: {expense.description}</h4>
                        <h4>Date: {expense.date}</h4>
                        <h4>Paid: {expense.paid ? "yes" : "no"}</h4>
                    </span>
                );
            })} 
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