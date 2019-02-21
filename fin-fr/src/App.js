import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import logo from './ff-logo-white.png';
import './App.css';
import'./style.css';

class Login extends React.Component {
  render() {
    return (
    <div>
      <div class="header">
        {/* <img src={logo} className="logo" /> */}
        <ul>
          <li><a href="/Landing">Back</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </div>
    <div className="main" style={{height:'90vh'}}>
      <div class="form-div">
        <p className="create-acc-text">Create Account</p>
        <form>
            <div>
            <label>
              <div class="create-acc-info">Name:</div>
              <input type="text" name="name"/>
            </label>
          </div>
          <div>
            <label>
              <div class="create-acc-info">Email:</div>
              <input type="text" email="email"/>
            </label>
          </div>
          <div>
            <label>
              <div class="create-acc-info">Password:</div>
              <input type="text" password="password"/>
            </label>
          </div>
          <div class="button-div">
            <input type="submit" value="Sign Up" class="submit-button"/>
          </div>
        </form>
      </div>
    </div>
    </div>
    );
  }
}

class Landing extends React.Component {
  render() {
    return (
        <p>Yes hello</p>
    );
  }
}

export default Login;
