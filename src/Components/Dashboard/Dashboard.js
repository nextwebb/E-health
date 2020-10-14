import React, { Component } from 'react';
import DoctorList from './DoctorList';
import Profile from './profile';
import avatar from './avatar.svg';
import { Redirect } from 'react-router';
import axios from 'axios';


class Dashboard extends Component{
  constructor(props) {
    super(props);

    this.state={
      date:'',
      Doctors: []
    }
    this.grabDate = this.grabDate.bind(this);
    
  }

  grabDate(e) {
    console.log(this.state);
    this.setState({
      date: e.target.value
    })
  } 

  componentDidMount() {
    let data = sessionStorage.getItem('userData');
    let token = JSON.parse(data).token;
    let userId = JSON.parse(data).data._id;
    console.log(JSON.parse(data));
    this.setState({token, userId})
    
    axios.get('https://book-a-doc.herokuapp.com/api/v1/doctor/list', {
      headers: {
        'Authorization' : token 
      }
    })
    .then(response => {
      this.setState({Doctors : response.data.message})
      console.log(this.state.Doctors)
    })
    .catch(error=> console.log(error));

    let postData = {
      userId
    }
try {
  axios.post('https://book-a-doc.herokuapp.com/api/v1/doctor/list',
  postData,
 {
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : token
  }
})
.then(response=>console.log(response))
.catch(error=>console.log(error))
} catch (error) {
  console.log(error)
}
   
  }

  render() {
    if (!sessionStorage.length) {
      return <Redirect to='/'/>
    } else {
      return( 
        <>
          <div className="dashboard-cont">
            <Profile />
            <h2>Find A Doctor</h2>
            <div className="doctors-cont">
              <DoctorList state={this.state} grabDate={this.grabDate}/> 
            </div>
          </div>
        </>
      )
    }
  }
}

export default Dashboard;