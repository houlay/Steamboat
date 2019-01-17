import React from "react";
import "./style.css";

function LoginForm() {
  return (
    <div className='container'>
      <form>
        <div className='form-group'>
        <label className='inputLabel' for='userEmail'>Email Address</label>
        <input className='form-control' type='email' placeholder='Enter your email address' id='userEmail'  />
        <small className='form-text text-muted'>We'll never share your email with anyone else.</small>
        </div>
        <div className='form-group'>
          <label className='inputLabel' for='userPass'>Password</label>
          <input className='form-control' type='password' placeholder='Enter your password' id='userPass' />
        </div>
        <button type='submit' className='btn btn-primary'>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;