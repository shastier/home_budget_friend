import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            expenses: this.props.postExpenses,
        }          
    } 

    componentDidMount() {

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