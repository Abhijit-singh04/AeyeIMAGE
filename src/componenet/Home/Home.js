import React from 'react';
import "./home.css";
import Hero from '../hero/Hero'
import background from '../../background.jpg'
import Image from '../images/Image'
import Makecontact from './../Contact/Makecontact';



function Home() {
  return (<>

    <div className='home'>

      <img className='home__image' src={background} alt="" />
      <div className='home__container'>
        <Hero />
      </div>
      <Image/>
      <Makecontact />
    </div>

  </>
  )
}

export default Home