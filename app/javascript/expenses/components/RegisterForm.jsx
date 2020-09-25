import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {
    constructor(){
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            password: '',
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    render(){
        return(
            <div className="loginform">
                <form className="loginform" onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>
                    <input 
                        type="text" 
                        name="first_name" 
                        value={this.state.first_name} 
                        placeholder="First Name" 
                        onChange={this.handleChange} 
                    />

                    <input 
                        type="text" 
                        name="last_name" 
                        value={this.state.last_name} 
                        placeholder="Last Name" 
                        onChange={this.handleChange} 
                    />

                    <input 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        placeholder="email" 
                        onChange={this.handleChange} 
                    />

                    <input 
                        type='text'
                        name='username'
                        value={this.state.username}
                        placeholder='Username'
                        onChange={this.handleChange} 
                    />

                    <input 
                        type='password'
                        name='password'
                        value={this.state.password}
                        placeholder='Password'
                        onChange={this.handleChange} 
                    />

                    <input type='submit' value='Sign Up!'/>
                </form>
            </div>
        )
    }
}

export default RegisterForm;