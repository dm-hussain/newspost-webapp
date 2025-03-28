import React from 'react';
import { Link } from 'react-router-dom';
import { useFirebaseContext } from '../context/FirebaseContext';

function Footer() {

   const { loggedInData, setFormSubmitted } = useFirebaseContext();
  return (
    <div className=" container-fluid fixed-bottom footer "  >
      <div className="container py-1 text-center  ">
        
        <p className=' bg-warning d-inline rounded-2 position-relative'>
        <img 
        className='pen position-absolute'
        src="https://cdn.pixabay.com/animation/2024/08/13/23/53/23-53-15-304_512.gif" alt="pen" />
          want to share a news? 
          <Link 
          onClick={()=>   setFormSubmitted(false)}
          to={loggedInData ? "/newsForm" : "/login"}
          className=' text-black text-decoration-none fw-bold  ' >  Click Here </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
