import React from "react";
import API from "../utils/API";
import "../components/LoginForms/style.css";
import { Redirect } from 'react-router-dom';


class Login extends React.Component {

  state = {
    email: "",
    password: "",
    isSuperUser: false,
    name: "",
    needRedirect: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    API.getUsersByEmailPassword({
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        if (res.data === []) {
          // handle invalid user login
        } else {
          // process login
          console.log(res.data);
          
          const userData = { name: res.data[0].name, isSuperUser: res.data[0].isSuperUser };
          this.props.callbackFromParent(userData);
          
          this.setState({
            name: res.data[0].name,
            isSuperUser: res.data[0].isSuperUser,
            needRedirect: true
          });          
        }
      })
      .catch(err => console.log(err));
    // this.props.history.push('/dashboard');
  };

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
    <div className='container'>
      {this.state.needRedirect ? <Redirect to="/dashboard" /> :
      <form>
        <div className='form-group'>
        <label className='inputLabel' htmlFor='userEmail'>Email Address</label>
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
          className='form-control' 
          type='email' 
          placeholder='Enter your email address' 
          id='userEmail'  
        />
        </div>
        <div className='form-group'>
          <label className='inputLabel' htmlFor='userPass'>Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            className='form-control' 
            type='password' 
            placeholder='Enter your password' 
            id='userPass' />
        </div>
        <button type='submit' className='btn btn-primary' onClick={this.handleSubmit}>Login</button>
      </form>
      }
    </div>
    );
  };
};

export default Login;