import React from 'react';
import { useRouteError } from 'react-router-dom';
import { FcVlc } from 'react-icons/fc';
import { useOutletContext } from 'react-router-dom';
function ErrorPage() {
  const error = useRouteError();

  const errorMessage = error.statusText;

  const errorStatus = error.status;
    

  return (
    <div
       className=" errorPage d-flex flex-column justify-content-center align-items-center   "
    >
      <FcVlc size={200} />
      <h1>{errorStatus}</h1>
      <h2 className=" fs-3 text-center mb-4"> {errorMessage} </h2>
    </div>
  );
}

export default ErrorPage;
