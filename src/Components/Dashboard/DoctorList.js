import React from 'react';
import Doctor from './Doctor';

const DoctorList = ({Doctors, state, grabDate}) => {
  console.log(grabDate)
  return(
    <>
    {
      Doctors.map((user, i) => {
        return (
          <Doctor 
            key={i}
            id={Doctors[i].id}
            name={Doctors[i].name}
            occupation={Doctors[i].occupation}
            avatar={Doctors[i].avatar}
            state = {state}
            grabDate={grabDate}
          />
        )
      })
    }
    </>
  )
}

export default DoctorList;