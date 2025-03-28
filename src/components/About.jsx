import React from 'react'
import { useOutletContext } from 'react-router-dom';

function About() {

  const {toggleNav, setToggleNav}= useOutletContext ()
  return (
    <div 
    onClick={()=> setToggleNav(!toggleNav)}
    className='container topMg text-white text-justify '>
 <h2>About Us</h2>

<p>Welcome to Postcard News! We are a platform dedicated to bringing user-generated news to the forefront. Our goal is to provide a space where individuals can share news stories, images, and videos that matter to them.
</p>

<h2>Our Mission
</h2>
<p>We believe in the power of information and the importance of free speech. Our platform allows users to post news articles, share media, and engage with current events in a meaningful way.
</p>
 
 <h2>Disclaimer</h2>
<p className=' text-warning'>The news content published on our platform is entirely the responsibility of the content creator. Any misinformation, false news, or incorrect details shared by users will be solely their liability. We do not take responsibility for any misleading or inaccurate content published by users. We strongly encourage everyone to share only
   verified and truthful news to maintain the integrity of our platform.

Thank you for being a part of our community!</p>



    </div>
  )
}

export default About