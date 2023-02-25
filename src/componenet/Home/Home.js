import React from 'react';
import "./home.css";

function Home() {
  return (
    <div className='home'>
        <div className='home-head'>
            <h4>Get the <span>right images</span> you want</h4>
            <p>loremipsun awua ahvdhaahwv awhvaw dajhdv dajhvdah daj djav dad JG Dd Dddhv hvdhj Dhd HD</p>
        </div>
        <div className='home-button'>
            <input type="search" placeholder='Search your image'></input>
            <button type='submit'>Search</button>
        </div>
    </div>
  )
}

export default Home