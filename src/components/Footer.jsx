import React from 'react';
import { Link } from 'react-router-dom';
import { useFirebaseContext } from '../context/FirebaseContext';

function Footer() {

   const { loggedInData, setFormSubmitted } = useFirebaseContext();
  return (
    <div className=" container-fluid fixed-bottom  "  >
      <div className="container py-1 text-center  ">
        <h5 className=' bg-info d-inline px-5 py-2 rounded-2 '>
          want to share a news? 
          <Link 
          onClick={()=>   setFormSubmitted(false)}
          to={loggedInData ? "/newsForm" : "/login"}
          className='text-white text-decoration-none ' > Click Here </Link>
        </h5>
      </div>
    </div>
  );
}

export default Footer;
