import React, { useState } from 'react'
import './hero.css'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useGlobalContext } from './../../context/context';
import { ColorRing } from "react-loader-spinner"
import Typewriter from 'typewriter-effect';

function Hero() {

  const { data, Changing, loading, loading_func, loading_func_opp } = useGlobalContext();

  const [query, setQuery] = useState("");
  const [str, setStr] = useState(false);
  const [result, setResult] = useState();


  async function onSubmit(e) {
    e.preventDefault();
    // setloading(true);
    loading_func();
    Changing([]);
    setStr(true)
    console.log(query)
    console.log(result)
    const URL = 'http://localhost:5000/getdata';
    try {

      const resp = await axios.post(URL, { query });
      console.log('without-changing', resp.data.result);
      setResult(resp.data.result);

      console.log(typeof (resp.data.result))
      const ullu = resp.data.result;

      Changing(ullu);

      loading_func_opp()
      setStr(false)
      console.log("data right now ", data)
    } catch (error) {
      console.log(error)
      setResult(error);
    }

  }

  return (
    <div className='hero'>
      <div className='hero-head'>
        <h4>Get the <span>right images</span> you want</h4>
        <p>loremipsun awua ahvdhaahwv awhvaw dajhdv dajhvdah daj djav dad JG Dd Dddhv hvdhj Dhd HD</p>
      </div>

      <div className='hero-button'>
        <div className='hero-input'>
          <input
            type="search"
            placeholder='Search your Image'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          >
          </input>
          <div className='search-icon'><SearchIcon className='icon' /></div>
        </div>
        {
          loading ?
            <div className='icon'>
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#2e53da', '#2e53da', '#2e53da', '#2e53da', '#2e53da']}
              />
            </div> :
            <button onClick={(event) => { onSubmit(event); }}>Search</button>
        }


      </div>

      {str ? <div className="btn yellow flex  " >
        <Typewriter
          options={{
            strings: ['Great! we are searching for you', 'Hold on !',' Loading more result'],
            autoStart: true,
            loop: true,
          }}
        />
      </div> : <div></div>}


    </div>
  )
}

export default Hero