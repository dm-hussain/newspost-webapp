import React from 'react';
import styled from 'styled-components';
import { useFirebaseContext } from '../context/FirebaseContext';
import { FaShare } from "react-icons/fa";

const ShareBtn = ({headline}) => {
   const {uniqueLink} = useFirebaseContext()
 
    const handleShareClick=()=>{

        if (navigator.share) {
            navigator
              .share({
                title: headline,
                text: "Check out this news article!",
                url: uniqueLink,
              })
              .catch((error) => console.error("Error sharing:", error));

              // .then(() => console.log("Shared successfully"))
          } else {
            alert("Sharing not supported on this browser.");
          }
    }
    
      

  return (
    <StyledWrapper>
      <button
      onClick={handleShareClick}
      className="button mb-3">
        <FaShare />

        Share News
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    padding: 1em;
    font-size: 1em;
    width: 10em;
    aspect-ratio: 1/0.25;
    color: white;
    background: #212121;
    background-size: cover;
    background-blend-mode: overlay;
    border-radius: 0.5em;
    outline: 0.1em solid #353535;
    border: 0;
    box-shadow: 0 0 1em 1em rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    position: relative;
  }

  .button:hover {
    transform: scale(1.1);
    box-shadow: 0 0 1em 0.45em rgba(0, 0, 0, 0.1);
    background: linear-gradient(45deg, #212121, #252525);
    background: radial-gradient(
      circle at bottom,
      rgba(50, 100, 180, 0.5) 10%,
      #212121 70%
    );
    outline: 0;
  }

 `;

export default ShareBtn;
