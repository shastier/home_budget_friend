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
                    <h4 key={expense.id}>Cost: {expense.cost}</h4>
                );
            })} 
        </>
    }
};
export default Dashboard;