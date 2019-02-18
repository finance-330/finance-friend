import React, { Component } from 'react';
import logo from './ff-logo-white.png';
import './App.css';
import'./style.css';

// const divStyle = {
//   color: 'blue',
//   backgroundColor: 'black'
// };

class App extends Component {
  render() {
    return (
    <div>
      <div class="header">
      <img src={logo} className="logo" />
      </div>
    <div className="main" style={{height:'92vh'}}>
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
            <input type="submit" value="Submit" class="submit-button"/>
          </div>
        </form>
      </div>
    </div>
    </div>
    );
  }
}

export default App;
