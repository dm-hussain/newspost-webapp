import React from 'react'
import { useOutletContext } from 'react-router-dom';
function Contact() {
  const {toggleNav, setToggleNav}= useOutletContext()

  return (
    <div
    onClick={()=> setToggleNav(!toggleNav)}

    className='container mgTop'>Contact Us</div>
  )
}

export default Contact