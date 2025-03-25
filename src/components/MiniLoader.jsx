import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader ">
        <div className="dot dot-1" />
        <div className="dot dot-2" />
        <div className="dot dot-3" />
        <div className="dot dot-4" />
        <div className="dot dot-5" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
  }

  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 6px;
    border-radius: 50%;
    -webkit-animation: dot-pulse2 1.5s ease-in-out infinite;
    animation: dot-pulse2 1.5s ease-in-out infinite;
  }

  .dot-1 {
    background-color: #4285f4;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }

  .dot-2 {
    background-color: #34a853;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }

  .dot-3 {
    background-color: #fbbc05;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  .dot-4 {
    background-color: #ea4335;
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }

  .dot-5 {
    background-color: #4285f4;
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s;
  }

  @keyframes dot-pulse2 {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0.5;
    }

    50% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }

    100% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0.5;
    }
  }`;

export default Loader;
