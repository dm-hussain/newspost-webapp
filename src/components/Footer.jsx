import React from 'react';
import { Link } from 'react-router-dom';
import { useFirebaseContext } from '../context/FirebaseContext';

function Footer() {

   const { loggedInData, setFormSubmitted } = useFirebaseContext();
  return (
    <div className=" container-fluid fixed-bottom footer "  >
      <div className="container py-1 text-center  ">
        <p className=' bg-warning d-inline rounded-2 '>
          want to share a news? 
          <Link 
          onClick={()=>   setFormSubmitted(false)}
          to={loggedInData ? "/newsForm" : "/login"}
          className='text-white text-decoration-none ' > Click Here </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
