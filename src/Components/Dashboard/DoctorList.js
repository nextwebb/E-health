import React from 'react';
import Doctor from './Doctor';

const DoctorList = ({state, grabDate}) => {
  return(
    <>
    {
      state.Doctors.map((user, i) => {
        console.log(state.Doctors);
        return (
          <Doctor 
            key={i}
            id={state.Doctors[i]._id}
            name={state.Doctors[i].name}
            avatar={state.Doctors[i].avatar}
            state = {state}
            grabDate={grabDate}
            token={state.token}
          />
        )
      })
    }
    </>
  )
}

export default DoctorList;