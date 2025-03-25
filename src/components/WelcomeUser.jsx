import React from 'react';
import { useFirebaseContext } from '../context/FirebaseContext';
import MiniLoader from './MiniLoader'
function WelcomeUser() {
  const { loggedInData } = useFirebaseContext();

  return (
    <div className="mgTop container text-center text-white">

      {/* {
        loggedInData && <MiniLoader />
      } */}
      {loggedInData?.displayName ? (
        <h1>Hello {loggedInData?.displayName} </h1>
      ) : (
        <h1>Hello User </h1>
      )}

    
    </div>
  );
}

export default WelcomeUser;
