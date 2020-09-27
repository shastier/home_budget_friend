import React, { Component } from 'react';

const PostExpense = (props) => {
    return (
        <div>
            <h2>Expense id: {props.expense.id}</h2>
            <h4>Cost: ${props.expense.cost}</h4>
            <h4>Description: {props.expense.description}</h4>
            <h4>Date: {props.expense.date}</h4>
            <h4>Paid: {props.expense.paid ? "yes" : "no"}</h4>

            <button className="btn" onClick={() => props.deletePostExpense(props.expense.id)}> Delete </button>
        </div>
    );            
};
export default PostExpense;