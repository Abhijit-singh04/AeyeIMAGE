import React from 'react';
import svg from "../../cont.svg";
import "./contact.css"

function Contact() {
  return (
    <div className='contact'>
        <div className='contact-image'>
            <img src={svg} />
        </div>
        <div className='contact-form'>
            <h4>Contact Us</h4>
            <div className='input-name input'>
                <span>Name :</span>
                <input type="text" required />
            </div>
            <div className='input-email input'>
                <span>Email :</span>
                <input type="email" required />
            </div>
            <div className='input-textarea input'>
                <span>Message :</span>
                <textarea type="text" rows="5" cols="5" required />
            </div>
        </div>
    </div>
  )
}

export default Contact