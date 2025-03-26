import React from 'react'
import { useOutletContext } from 'react-router-dom';

function About() {

  const {toggleNav, setToggleNav}= useOutletContext ()
  return (
    <div 
    onClick={()=> setToggleNav(!toggleNav)}
    className='container topMg'>About</div>
  )
}

export default About