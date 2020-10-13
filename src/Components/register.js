import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'; 
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state= {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
     }

    this.inputHandler = this.inputHandler.bind(this);
    this.register =  this.register.bind(this); 
  } 

  inputHandler(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  async register(e) {
    e.preventDefault();
    const {firstName, lastName, email, password, phoneNumber, address, dob, role} = this.state;
    let name = `${firstName} ${lastName}`; 
    let newUserDetails = {
      name, email, password, phoneNumber, address, dob, role
    }
    await axios.post('https://book-a-doc.herokuapp.com/api/v1/auth/register/', newUserDetails)
    .then(response => {
      let userData = response;
      sessionStorage.setItem('userData', userData);
      alert('Registration Successful');
      window.location = '/dashboard';
    } )
    
  }  

  render() {
    return(
        <div className="parent">
          <h1>Register</h1>
          <div className="main-container">
            <p className="login-text">Let's get you started!</p>
            <p>Already have an account? <span><Link to='/login'>Login</Link></span></p>
            <div className="container">
              <form id="register">
                <div className="group">
                  <label htmlFor="fname">First Name:</label> 
                  <input id="fname" type="text" name="firstName" onChange={this.inputHandler}/>
                </div>
                <div className="group">
                  <label htmlFor="lname">Last Name:</label> 
                  <input id="lname" type="text" name="lastName" onChange={this.inputHandler}/>
                </div>
                <div className="group">
                  <label htmlFor="haddress">Home Address:</label> 
                  <input id="haddres" name="address" type="text" onChange={this.inputHandler}/>
                </div>
                <div className="group">
                  <label htmlFor="pnumber">Phone Number</label> 
                  <input id="pnumber" name="phoneNumber" type="text" onChange={this.inputHandler} />
                </div>
                <div className="group">
                  <label htmlFor="dob">Date of Birth</label> 
                  <input id="dob" type="date" name="dob" onChange={this.inputHandler}/>
                </div>
                <div className="group">
                  <label htmlFor="email">Email:</label> 
                  <input type="email" name="email" onChange={this.inputHandler}/>
                </div>
                <div className="group">
                  <label htmlFor="password">Password:</label> 
                  <input type="password" name="password" onChange={this.inputHandler}/>
                </div>
                <div>
                Specify Role: <br/>
                <input type="radio" id="Doctor" name="role" value="male" onChange={this.inputHandler}/>
                <label htmlFor="Doctor">Doctor</label><br/>
                <input type="radio" id="Patient" name="role" value="female" onChange={this.inputHandler}/>
                <label htmlFor="Patient">Patient</label><br/>
                </div>
              </form> 
              <button type="submit" form="register" value="submit" onClick={this.register}>Register</button>
            </div>
          </div>
        </div>
    )
  }      
}


export default Register;