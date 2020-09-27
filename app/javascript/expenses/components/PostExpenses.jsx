import React, { Component } from 'react';
import Auth from '../Auth';

class PostExpenses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            expenses: this.props.postExpenses,
            page: this.props.page,
            userDataLoaded: false,
            userPostExpensesLoaded: false,
        }
    } 

    componentDidMount(){
        alert('component edit expense')
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
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
            user: res.user,
            userDataLoaded: true,
            expenses: res.post_expenses.map((expense) => { return expense }),
            userPostExpensesLoaded: true,
          })
        })
    }

    renderPostExpenses() {      
        if (this.state.userDataLoaded && this.state.userPostExpensesLoaded) {
            <h1>Hello, {this.state.user.name} </h1>
            {this.state.expenses.map((expense) => {  
                return (
                    <span key={expense.id}>
                        <form className="expenseForm" onSubmit={(this.state.page === "edit"
                            ? (e) => this.props.handleExpenseSubmit('PUT', e, this.state, expense.id)
                            : (e) => this.props.handleExpenseSubmit('DELETE', e, this.state, expense.id))}>

                            <h4>Cost: ${expense.cost}</h4>
                            <h4>Description: {expense.description}</h4>
                            <h4>Date: {expense.date}</h4>
                            <h4>Paid: {expense.paid ? "yes" : "no"}</h4>

                            <input type="submit" value={(this.state.page === 'edit' ? 'Edit Expense' : 'Delete Expense')} />
                        </form>
                    </span>
                );
            })} 
        } else return <p>Loading...</p>;
    }

    render() {
        return <div>
            {this.getUserProfile()}
            {this.renderPostExpenses()}
        </div>
    }
};
export default PostExpenses;