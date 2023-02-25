import React from 'react';
import "./home.css";
import SearchIcon from '@mui/icons-material/Search';

function Home() {
  return (
    <div className='home'>
        <div className='home-head'>
            <h4>Get the <span>right images</span> you want</h4>
            <p>loremipsun awua ahvdhaahwv awhvaw dajhdv dajhvdah daj djav dad JG Dd Dddhv hvdhj Dhd HD</p>
        </div>
        <div className='home-button'>
          <div className='home-input'>
            <input type="search" placeholder='Search your image'></input>
            <div className='search-icon'>
              <SearchIcon className='icon' />
            </div>
          </div>
            <button type='submit'>Search</button>
        </div>
    </div>
  )
}

export default Home