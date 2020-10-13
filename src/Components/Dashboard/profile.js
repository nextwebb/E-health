import React from 'react';
import avatar from './avatar.svg';

const Profile = () => {
  return(
    <>
      <div className="profile-cont"> 
        <div className="avatar"><img src={avatar} alt="Job Oaikhenah"/></div>
        <div className="details">
          <ul>
            <li> 
              <p>First Name: </p>
              <p>Job</p>
            </li>
            <li>
              <p>Last Name: </p>
              <p>Oaikhenah</p>
            </li>
            <li>
              <p>Email: </p>
              <p>oaikhenahjob@gmail.com</p>
            </li>
            <li>
              <p>Date of Birth</p>
              <p>oaikhenahjob@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Profile;