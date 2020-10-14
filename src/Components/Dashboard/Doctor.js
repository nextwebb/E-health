import axios from 'axios';
import React from 'react';

const Doctor = ({name, avatar, occupation,grabDate, state, id}) => {

  const bookAppointment = () => {
    let data = {
      userId: state.userId,
      date: state.date
    }
    
    axios.post(`https://book-a-doc.herokuapp.com/api/v1/patient/book/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : state.token
      }
    })
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
    alert(`You have booked an appoinment with Dr. ${name} on ${state.date}`)
  }
  return(
    <>
      <div className="doc-cont">
        <div>
          <div><img src={avatar} alt={name}/></div>
          <div>
            <p>{name}</p>
            <p>{occupation}</p>
          </div>
        <form>
          <label htmlFor="date">Schedule date:  </label>
          <input type="date" id="date" onChange={grabDate}/>
        </form>
        </div>
        <div className="book-apt" onClick={bookAppointment}>
          Book Appointment
        </div>
      </div>
    </>
  )
}

export default Doctor;