import React from 'react';

const Nav = (props) => {
  return (
    <div>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="/">Home Budget</a>
                </div>
                <ul className="nav navbar-nav">
                <li className="active"><a href="/">Home</a></li>
                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">My Account <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                    <li><a href="/dashboard">All Expenses</a></li>
                    <li><a href="/new">Add Expense</a></li>      
                    </ul>
                </li>          
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <li><a href="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>                
                <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                <li><a href="/logout"><span className="glyphicon glyphicon-log-out"></span> Log out</a></li>
                </ul>
            </div>
            </nav>
    </div>
  );
};

export default Nav;