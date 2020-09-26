import React, { Component } from 'react';

class ExpenseCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.edit ? props.expense.value.description : '',
            paid: props.edit ? props.expense.value.paid : '',
            cost: props.edit ? props.expense.value.cost : '',
            date: props.edit ? props.expense.value.date : '',
            page: this.props.page,
        }
    }

    componentDidMount(){
        if(this.props.edit){
            console.log(this.props.expense)
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
            {/* <div className="expenseform">
            <form className="addExpenseForm"
            onSubmit={(
                this.props.edit
                ? (e) => this.props.handleExpenseSubmit('PUT', e, this.state, this.props.expense.value.id)
                : (e) => this.props.handleExpenseSubmit('POST', e, this.state))}>
              
                <input 
                type="text" 
                name="description" 
                value={this.state.description || ''}  
                placeholder={this.props.edit ? this.props.expense.value.description : "Select expense" }
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
                value={this.state.price || ''}
                placeholder={this.props.edit ? this.props.expense.value.cost : "$ Cost"}

                
                onChange={this.handleChange} />

                <input
                type="text"
                name="paid"
                value={this.state.paid || ''}
                placeholder={this.props.edit ? this.props.expense.value.paid : "paid"}

                
                onChange={this.handleChange} />

                <input type="submit" value={(this.props.edit ? 'Edit expense' : 'Add expense')}/>
            </form>
            </div>   */}
            </div>  
        );
        
        
    }   

}

export default ExpenseCreateForm;