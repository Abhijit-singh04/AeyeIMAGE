import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

function Header() {
  return (
    <div className='header'>
      <div className='header-logo'>
        <h5>XYZ</h5>
      </div>
      <div className='header-link'>
        <div className='icon-link'>
          <Link className='link' to="/">
            <div className='hovering-box'>
              <div className='hovering'>
                <HomeOutlinedIcon className='icon' />
                <HomeIcon className='icon-2' />
              </div>
            </div>
            home
          </Link>
        </div>
        <div className='icon-link'>
          <Link className='link' to="/">
            <div className='hovering-box'>
              <div className='hovering'>
                <HomeOutlinedIcon className='icon' />
                <HomeIcon className='icon-2' />
              </div>
            </div>
            home
          </Link>
        </div>
        <div className='icon-link'>
          <Link className='link' to="/">
            <div className='hovering-box'>
              <div className='hovering'>
                <HomeOutlinedIcon className='icon' />
                <HomeIcon className='icon-2' />
              </div>
            </div>
            home
          </Link>
        </div>
        <div className='icon-link'>
          <Link className='link' to="/">
            <div className='hovering-box'>
              <div className='hovering'>
                <HomeOutlinedIcon className='icon' />
                <HomeIcon className='icon-2' />
              </div>
            </div>
            home
          </Link>
        </div>
      </div>
      <div className='header-btn'>
        <button>Dark theme</button>
      </div>
    </div>
  )
}

export default Header