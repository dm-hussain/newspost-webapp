import React, { useEffect, useState } from 'react';
// import { FaPenNib } from 'react-icons/fa';
import styles from './Header.module.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useFirebaseContext } from '../context/FirebaseContext';
function Header({ toggleNav, setToggleNav }) {
  const { loggedInData, handleSignOut } = useFirebaseContext();

  const navigate = useNavigate();

  const handleLoginClick = () => {
    loggedInData ? handleSignOut() : navigate('/login');
  };
  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const {getUserNews} =  useFirebaseContext()
useEffect(()=>{
  getUserNews()
   
  
}, [loggedInData])

  return (
    <>
      <nav
        className={` ${styles.bgColor} navbar navbar-expand-lg bg-body-tertiary container-fluid fixed-top bgColor`}
        onClick={() => setToggleNav(!toggleNav)}
      >
        <div className="container  ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` nav-link ${isActive ? 'text-black' : 'text-white'}`
            }
            aria-disabled="true"
            onClick={(e)=>{
              e.stopPropagation()
               
            }}
          >
            Home
          </NavLink>
          <button
            id="collapseBtn"
            className={`${toggleNav && 'collapsed'} navbar-toggler`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${toggleNav && 'show'} collapse navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item cursor-pointer">
                <NavLink
                  to="local"
                  className={({ isActive }) =>
                    ` nav-link ${isActive ? 'text-black' : 'text-white'}`
                  }
                  aria-disabled="true"
                >
                  Local
                </NavLink>
              </li>
              <li className="nav-item cursor-pointer">
                <NavLink
                  to="politics"
                  className={({ isActive }) =>
                    ` nav-link ${isActive ? 'text-black' : 'text-white'}`
                  }
                  aria-disabled="true"
                >
                  Politics
                </NavLink>
              </li>

              <li className="nav-item cursor-pointer">
                <NavLink
                  to="sports"
                  className={({ isActive }) =>
                    ` nav-link ${isActive ? 'text-black' : 'text-white'}`
                  }
                  aria-disabled="true"
                >
                  Sports
                </NavLink>
              </li>
              <li className="nav-item cursor-pointer">
                <NavLink
                  to="tech"
                  className={({ isActive }) =>
                    ` nav-link ${isActive ? 'text-black' : 'text-white'}`
                  }
                  aria-disabled="true"
                >
                  Tech
                </NavLink>
              </li>
              <li className="nav-item cursor-pointer">
                <NavLink
                  to="business"
                  className={({ isActive }) =>
                    ` nav-link ${isActive ? 'text-black' : 'text-white'}`
                  }
                  aria-disabled="true"
                >
                  Business
                </NavLink>
              </li>

              <li className="nav-item cursor-pointer">
                <NavLink
                  to="entertainment"
                  className={({ isActive }) =>
                    ` nav-link ${isActive ? 'text-black' : 'text-white'}`
                  }
                  aria-disabled="true"
                >
                  Entertainment
                </NavLink>
              </li>

              <li className="nav-item cursor-pointer">
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    ` nav-link ${isActive ? 'text-black' : 'text-white'}`
                  }
                  aria-disabled="true"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item cursor-pointer">
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    ` nav-link ${isActive ? 'text-black' : 'text-white'}`
                  }
                  aria-disabled="true"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="col-md-3  d-flex justify-content-center gap-2 text-center text-lg-end">
              {loggedInData && 
              <NavLink 
              to="profile"
              className={({ isActive }) =>
                `  ${isActive ? 'text-black' : 'text-white'} m-2 text-decoration-none`
              }
              onClick={()=>getUserNews()}

              
              > My Profile</NavLink>}
              <button
                onClick={handleLoginClick}
                type="button"
                className="btn btn-outline-primary me-2"
              >
                {loggedInData ? 'Logout' : 'Login'}
              </button>
              {!loggedInData && (
                <button
                  onClick={handleSignUpClick}
                  type="button"
                  className="btn btn-primary"
                >
                  Sign-up
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
