import React from 'react';
import "./image.css";
// import spider from "../../spiderman.jpg";
import { data } from '../data';

function image() {
  return (
    <div className='image-container'>
        
            {
                data.map((item , key)=>(
                    <div className='image-div'>
                        <img className='image' key={item.id} src={item.image} />
                    </div>
                ))
            }
       
    </div>
  )
}

export default image