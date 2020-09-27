import React, { Component } from 'react';
import Auth from '../Auth';

class ExpenseCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expense_id: props.expense ? props.expense.expense_id : '',
            paid: props.expense ? props.expense.paid : '',
            cost: props.expense ? props.expense.cost : '',
            date: props.expense ? props.expense.date : '',
            page: this.props.page,
            expenses: [],
            expensesDataLoaded: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('/api/v1/expenses', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${Auth.getToken()}`,
                token: `${Auth.getToken()}`,
            }
            }).then(res => res.json())
            .then(res => {
                this.setState({                    
                    expenses: res.expenses.map((expense) => { return expense }),
                    expensesDataLoaded: true,                    
                })
            })
    }

    handleChange (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div className="expensecontainer">
                <h1>Form page: {this.state.page} id: {this.state.expense_id} </h1>
                <form className="expenseForm"
                onSubmit={(
                    this.state.page === "edit"
                    ? (e) => this.props.handleExpenseSubmit('PUT', e, this.state, this.props.expense.id)
                    : (e) => this.props.handleExpenseSubmit('POST', e, this.state))}>
                
                    <select name="expense_id" onChange={this.handleChange}>
                        {this.state.expenses.map((expense) => {
                            return <option value={expense.id}>{expense.description}</option>
                        })}
                    </select>

                    <input 
                    type="date" 
                    name="date" 
                    value={this.state.date || ''} 
                    placeholder={this.props.edit ? this.props.expense.value.date : "Date"}
                    onChange={this.handleChange} />

                    <input
                    type="numeric"
                    name="cost"
                    value={this.state.cost || ''}
                    placeholder={this.props.edit ? this.props.expense.value.cost : "$ Cost"}
                    onChange={this.handleChange} />

                    <select name="paid" onChange={this.handleChange}>
                        <option value="false">"No"</option>
                        <option value="true">"Yes"</option>                        
                    </select>

                    <input type="submit" value={(this.state.page==='edit' ? 'Edit' : 'Add')}/>
                </form>
            </div>  
        );
    }   
}

export default ExpenseCreateForm;