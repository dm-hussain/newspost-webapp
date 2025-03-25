import React  from 'react';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useFirebaseContext } from '../context/FirebaseContext';
import WelcomeUser from './WelcomeUser';

import { useOutletContext } from 'react-router-dom';
function SignUp() {

  const {toggleNav, setToggleNav}= useOutletContext()

  const {
    userData,
    setUserData,
    signupUser,
    putData,
    signupWithGoogle, 
    loggedInData,
  } = useFirebaseContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser();
  
    putData('users/' + crypto.randomUUID(), userData);
    setUserData({});
  };
 
  return (
    <>
      {loggedInData ? (
        <WelcomeUser />
      ) : (
        <div
        onClick={()=> setToggleNav(!toggleNav)}

          className="container d-flex justify-content-center align-items-center px-4 "
          style={{ marginTop: '5rem' }}
        >
          <form onSubmit={handleSubmit} className={`${styles.form}`}>
            <p className={`${styles.title}`}>Register </p>
            <p className={`${styles.message}`}>
              Signup now and get full access to our app.{' '}
            </p>
            {/* <div className= {`${styles.flex}`} >
            <label>
                <input className= {`${styles.input}`} type="text" placeholder="" required />
                <span>Firstname</span>
            </label>

        </div>   */}
            <label>
              <input
                className={`${styles.input}`}
                type="text"
                placeholder=""
                required
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
                value={userData.name || ''}
              />
              <span>Name</span>
            </label>

            <label>
              <input
                className={`${styles.input}`}
                type="email"
                placeholder=""
                required
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
                value={userData.email || ''}
              />
              <span>Email</span>
            </label>

            <label>
              <input
                className={`${styles.input}`}
                type="password"
                placeholder=""
                required
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, password: e.target.value }))
                }
                value={userData.password || ''}
              />
              <span>Password</span>
            </label>
            {/* <label>
          <input
            className={`${styles.input}`}
            type="telephone"
            placeholder=""
            required
          />
          <span>Mobile</span>
        </label> */}

            <button type="submit" className={`${styles.submit}`}>
              Submit
            </button>
            <p className={`${styles.p} ${styles.line} `}>Or Sign Up With</p>
            <div className={`${styles['flex-row']} `}>
              <button
                onClick={() => {
                  signupWithGoogle();
                }}
                type="button"
                className={`${styles.btn} `}
              >
                <FcGoogle />
                Google
              </button>
              <button type="button" className={`${styles.btn} `}>
                <FaFacebook />
                Facebook
              </button>
            </div>
            <p className={`${styles.signin}`}>
              Already have an account ? <Link to="/login"> Sign in </Link>
            </p>
          </form>
        </div>
      )}
    </>
  );
}

export default SignUp;

// import React from 'react';
// import styled from 'styled-components';
// import styles from './SignUp.module.css';

// import { Link } from 'react-router-dom';
// import { FaFacebook } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';

// const Form = () => {
//   return (
//     <StyledWrapper>
//       <div
//         className="container d-flex justify-content-center align-items-center px-4 "
//         style={{ marginTop: '6rem' }}
//       >

//         <form className="form">
//         <p className={`${styles.title}`}>Register </p>

//           <div className="flex-column">
//             <label>Name </label>
//           </div>
//           <div className="inputForm">
//             <input
//               type="text"
//               className="input"
//               placeholder="Enter your Name"
//             />
//           </div>

//           <div className="flex-column">
//             <label>Email </label>
//           </div>
//           <div className="inputForm">
//             <input
//               type="text"
//               className="input"
//               placeholder="Enter your Email"
//             />
//           </div>

//           <div className="flex-column">
//             <label>Mobile </label>
//           </div>
//           <div className="inputForm">
//             <input
//               type="text"
//               className="input"
//               placeholder="Enter your Mobile"
//             />
//           </div>

//           <div className="flex-column">
//             <label>Password </label>
//           </div>
//           <div className="inputForm">
//             <input
//               type="password"
//               className="input"
//               placeholder="Enter Password"
//             />
//           </div>

//           <button className="button-submit">Sign Up</button>

//           <p className="p line">Or Sign Up With</p>
//           <div className="flex-row">
//             <button className="btn">
//               <FcGoogle />
//               Google
//             </button>
//             <button className="btn ">
//               <FaFacebook />
//               Facebook
//             </button>
//           </div>

//           <p className= { ` ${styles.signin}  `} >Already have an account ?         <Link  to='/login' > SignIn </Link>  </p>
//         </form>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .form {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//     background-color: #1f1f1f;
//     padding: 8px 30px;
//     width: 450px;
//     max-height: 80vh;
//     border-radius: 20px;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
//       Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//   }

//   ::placeholder {
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
//       Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//     color: #aaa;
//   }

//   .form button {
//     align-self: flex-end;
//   }

//   .flex-column > label {
//     color: #f1f1f1;
//     font-weight: 600;
//   }

//   .inputForm {
//     border: 1.5px solid #333;
//     border-radius: 10px;
//     height: 42px;
//     display: flex;
//     align-items: center;
//     padding-left: 10px;
//     transition: 0.2s ease-in-out;
//     background-color: #2b2b2b;
//   }

//   .input {
//     margin-left: 10px;
//     border-radius: 10px;
//     border: none;
//     width: 100%;
//     height: 100%;
//     background-color: #2b2b2b;
//     color: #f1f1f1;
//   }

//   .input:focus {
//     outline: none;
//   }

//   .inputForm:focus-within {
//     border: 1.5px solid #2d79f3;
//   }

//   .flex-row {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     gap: 10px;
//     justify-content: space-between;
//   }

//   .flex-row > div > label {
//     font-size: 14px;
//     color: #f1f1f1;
//     font-weight: 400;
//   }

//   .span {
//     font-size: 14px;
//     margin-left: 5px;
//     color: #2d79f3;
//     font-weight: 500;
//     cursor: pointer;
//   }

//   .button-submit {
//     margin: 20px 0 8px 0;
//     background-color: #2d79f3;
//     border: none;
//     color: white;
//     font-size: 15px;
//     font-weight: 500;
//     border-radius: 10px;
//     height: 42px;
//     width: 100%;
//     cursor: pointer;
//   }

//   .p {
//     text-align: center;
//     color: #f1f1f1;
//     font-size: 14px;
//     /* margin: 5px 0; */
//   }

//   .btn {
//     /* margin-top: 10px; */
//     width: 80%;
//     height: 42px;
//     border-radius: 10px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-weight: 500;
//     gap: 10px;
//     border: 1px solid #333;
//     background-color: #2b2b2b;
//     color: #f1f1f1;
//     cursor: pointer;
//     transition: 0.2s ease-in-out;
//   }

//   .btn:hover {
//     border: 1px solid #2d79f3;
//   }
// `;

// export default Form;
