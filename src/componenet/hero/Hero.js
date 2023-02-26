import React from 'react'
import './hero.css'
import SearchIcon from '@mui/icons-material/Search';

function hero() {
  return (
    <div className='hero'>
        <div className='hero-head'>
            <h4>Get the <span>right images</span> you want</h4>
            <p>loremipsun awua ahvdhaahwv awhvaw dajhdv dajhvdah daj djav dad JG Dd Dddhv hvdhj Dhd HD</p>
        </div>
        <div className='hero-button'>
          <div className='hero-input'>
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

export default hero