import React, { Component } from 'react';

const PostExpense = (props) => {
    return (
        <div>            
            <h4>Cost: ${props.expense.cost}</h4>
            <h4>Description: {props.expense.description}</h4>
            <h4>Date: {props.expense.date}</h4>
            <h4>Paid: {props.expense.paid ? "Yes" : "No"}</h4>

            <button className="btn" onClick={() => props.deletePostExpense(props.expense.id)}> Delete </button>
            <button className="btn" onClick={() => props.getPostExpense(props.expense.id)}> Edit </button>
        </div>
    );            
};
export default PostExpense;