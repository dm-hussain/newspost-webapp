import React from 'react';
import { useOutletContext } from 'react-router-dom';
function Contact() {
  const { toggleNav, setToggleNav } = useOutletContext();

  return (
    <div onClick={() => setToggleNav(!toggleNav)} className="container topMg  text-white">
 
      <h1 className=' text-center my-4 bg-primary py-1 rounded-2'>Contact Us</h1>
      <h3 className='mt-4 text-primary'>Get in Touch</h3>
      We'd love to hear from you! If you have any questions, feedback, or
      inquiries, feel free to reach out.
      <h4 className='mt-4 text-primary'>Ways to Contact Us</h4>
      {/* <p>
        Email: <span className="text-info">message2hussain@gmail.com</span>{' '}
      </p> */}
      {/* <p>
        Phone: <span className="text-info">+91 7209868108</span>{' '}
      </p> */}
    </div>
  );
}

export default Contact;
