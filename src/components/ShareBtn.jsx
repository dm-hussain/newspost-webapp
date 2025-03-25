import React from 'react';
import styled from 'styled-components';
import { useFirebaseContext } from '../context/FirebaseContext';

const ShareBtn = ({newsUrl, headline}) => {
   const {uniqueLink} = useFirebaseContext()

    const handleShareClick=()=>{

        if (navigator.share) {
            navigator
              .share({
                title: headline,
                text: "Check out this news article!",
                url: uniqueLink,
              })
              .then(() => console.log("Shared successfully"))
              .catch((error) => console.error("Error sharing:", error));
          } else {
            alert("Sharing not supported on this browser.");
          }
    }
    
      

  return (
    <StyledWrapper>
      <button
      onClick={handleShareClick}
      className="button">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="icon">
          <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
        </svg>
        Share
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    padding: 1em;
    font-size: 1em;
    width: 7em;
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

  .icon {
    fill: white;
    width: 1em;
    aspect-ratio: 1;
    top: 0;
    left: 0;
    margin: auto;
    transform: translate(-35%, 10%);
  }`;

export default ShareBtn;
