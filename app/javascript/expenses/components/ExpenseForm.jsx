import React, { Component } from 'react';

class ExpenseCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expense_id: props.edit ? props.expense.value.expense_id : '',
            paid: props.edit ? props.expense.value.paid : '',
            cost: props.edit ? props.expense.value.cost : '',
            date: props.edit ? props.expense.value.date : '',
            page: this.props.page,
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div className="expensecontainer">
                <h1>Form page: {this.state.page} </h1>
                <form className="expenseForm"
                onSubmit={(
                    this.state.page === "edit"
                    ? (e) => this.props.handleExpenseSubmit('PUT', e, this.state, this.props.expense.value.id)
                    : (e) => this.props.handleExpenseSubmit('POST', e, this.state))}>
                
                    <input 
                    type="text" 
                    name="expense_id" 
                    value={this.state.expense_id || ''}  
                    placeholder={this.props.edit ? this.props.expense.value.expense_id : "Select expense" }
                    onChange={this.handleChange} />

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

                    <input
                    type="text"
                    name="paid"
                    value={this.state.paid || ''}
                    placeholder={this.props.edit ? this.props.expense.value.paid : "Paid"}
                    onChange={this.handleChange} />

                    <input type="submit" value={(this.state.page==='edit' ? 'Edit' : 'Add')}/>
                </form>
            </div>  
        );
    }   
}

export default ExpenseCreateForm;