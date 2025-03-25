import React from 'react';
import styled from 'styled-components';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import { useFirebaseContext } from '../context/FirebaseContext';
import WelcomeUser from './WelcomeUser';

import { useOutletContext } from 'react-router-dom';
import MyProfile from './MyProfile';
const Form = () => {

  const {toggleNav, setToggleNav}= useOutletContext()

  const {
    loginData,
    setLoginData,
    signinUser,
    signupWithGoogle,
    loggedInData,
    
  } = useFirebaseContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    signinUser();
    setLoginData({});
  };

  return (
    <>
      {loggedInData ? (
        <MyProfile />
      ) : (
        <StyledWrapper>
          <div
          onClick={()=> setToggleNav(!toggleNav)}

            className="container d-flex justify-content-center align-items-center px-4 "
            style={{ marginTop: '8rem' }}
          >
            <div className="form-container ">
              <p className={`${styles.title}`}>Login </p>

              <form onSubmit={handleSubmit} className="form">
                <div className="input-group">
                  <label htmlFor="username">Email</label>
                  <input
                    onChange={(e) =>
                      setLoginData((prev) => ({
                        ...prev,
                        emailId: e.target.value,
                      }))
                    }
                    value={loginData.emailId || ''}
                    type="email"
                    name="username"
                    id="username"
                    placeholder=""
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={(e) =>
                      setLoginData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    value={loginData.password || ''}
                    type="password"
                    name="password"
                    id="password"
                    placeholder=""
                    required
                  />
                  <div className="forgot">
                    <a rel="noopener noreferrer" href="#">
                      Forgot Password ?
                    </a>
                  </div>
                </div>
                <button className="sign">Sign in</button>
              </form>
              <div className="social-message">
                <div className="line" />
                <p className="message">Login with google account</p>
                <div className="line" />
              </div>
              <div className="social-icons">
                <button
                  onClick={() => {
                    signupWithGoogle();
                  }}
                  aria-label="Log in with Google"
                  className="icon cursor-pointer"
                >
                  <FcGoogle size={35} />
                </button>
              </div>
              <p className="signup">
                Don't have an account?
                {/* <a rel="noopener noreferrer" href="#"  >Sign up</a> */}
                <Link to="/signup"> Sign up </Link>
              </p>
            </div>
          </div>
        </StyledWrapper>
      )}
    </>
  );
};

const StyledWrapper = styled.div`
  .form-container {
    width: 420px;
    border: 1px solid #333;
    border-radius: 0.75rem;
    background-color: var(--primary-color);
    padding: 2rem;
    color: rgba(243, 244, 246, 1);
  }

  .title {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }

  .form {
    margin-top: 1.5rem;
  }

  .input-group {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .input-group label {
    display: block;
    color: rgba(156, 163, 175, 1);
    margin-bottom: 4px;
  }

  .input-group input {
    width: 100%;
    border-radius: 0.5rem !important;
    border: 1px solid rgba(55, 65, 81, 1);
    outline: 0;
    background-color: var(--placeholder-color);
    padding: 0.75rem 1rem;
    color: rgba(243, 244, 246, 1);
  }

  .input-group input:focus {
    border-color: var(--secondary-color);
  }

  .forgot {
    display: flex;
    justify-content: flex-end;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175, 1);
    margin: 8px 0 14px 0;
  }

  .forgot a,
  .signup a {
    color: rgba(243, 244, 246, 1);
    text-decoration: none;
    font-size: 14px;
  }

  .forgot a:hover,
  .signup a:hover {
    text-decoration: underline rgba(167, 139, 250, 1);
  }

  .sign {
    display: block;
    width: 100%;
    background-color: var(--secondary-color);
    padding: 0.75rem;
    text-align: center;
    color: rgba(17, 24, 39, 1);
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
  }

  .social-message {
    display: flex;
    align-items: center;
    padding-top: 1rem;
  }

  .line {
    height: 1px;
    flex: 1 1 0%;
    background-color: rgba(55, 65, 81, 1);
  }

  .social-message .message {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgba(156, 163, 175, 1);
  }

  .social-icons {
    display: flex;
    justify-content: center;
  }

  .social-icons .icon {
    border-radius: 0.125rem;
    padding: 0.75rem;
    border: none;
    background-color: transparent;
    margin-left: 8px;
  }

  .signup {
    text-align: center;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175, 1);
  }
`;

export default Form;
