import React , {useRef , useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import useLocalStorage from 'use-local-storage';

function Header() {

  const [theme , setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () =>{
    const newTheme = theme === "light"? "dark" : "light";
    setTheme(newTheme) ;
  }
 
  const ref = useRef(null);
  const bar = useRef(null);
  // useEffect(() => {
  //   const handleClick = event => {
  //     console.log('Button clicked');
  //   };

    const element = ref.current;
    const bart = bar.current;

  //   element.addEventListener('click', handleClick);

  //   return () => {
  //     element.removeEventListener('click', handleClick);
  //   };
  // }, []);


  return (
    <div className='header' data-theme={theme}>
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
      <div class="toogle-button" onClick={switchTheme}>
        <input type="checkbox" class="checkbox" id="checkbox" />
        <label for="checkbox" class="label">
          <Brightness7Icon className='bright' />
          <Brightness3Icon className='dark' />
          <div class="ball"></div>
        </label>
      </div>
      {/* <div className='responsive' ref={ref}>
        <div className='bar bar1' ref={bar}></div>
        <div className='bar bar2'></div>
        <div className='bar bar3'></div>
      </div> */}
    </div>
  )
}

export default Header