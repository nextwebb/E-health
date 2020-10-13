import React from 'react';

const Doctor = ({name, avatar, occupation, state, grabDate}) => {

  const bookAppointment = () => {
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