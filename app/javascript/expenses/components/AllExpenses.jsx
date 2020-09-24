import React, { Component } from 'react';

class AllExpenses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: [],
            dataLoaded: false,            
        }        
    }
        

    componentDidMount() {
       this.getAllExpenses();          
    }

    getAllExpenses = () => {
        fetch('/api/v1/expenses')
            .then(res => res.json())
            .then(res => {
                console.log(res.expenses)
                this.setState({
                    expenses : res.expenses,
                    dataLoaded: true,
                });
            }).catch(err => console.log(err));
    }

    render() {
        return (            
            <div className="row">
                    {this.state.expenses.map((expense) => {                        
                        return (
                          <h4>Description: {expense.description}</h4>
                        );
                    })}               
                </div>            
        )
    }    
};

export default AllExpenses;