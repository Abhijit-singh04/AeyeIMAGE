import React from 'react';
import { Link } from 'react-router-dom';
import "./contact.css"

function Makecontact() {
  return (
    <div>
      <div className='contactinfooter'>
        <h4>Have any Question to ask?</h4>
        <Link to="/contact/" className='linkbutton'><button>Contact</button></Link>
      </div>
    </div>
  )
}

export default Makecontact