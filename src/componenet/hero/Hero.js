import React, { useState } from 'react'
import './hero.css'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useGlobalContext } from './../../context/context';
import {ColorRing} from "react-loader-spinner"

function Hero() {

  const [loading , setLoading] = useState(false);
  const rotate = () =>{
    setLoading(true);
  }

  const icon ={
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  }


  const {data,Changing} = useGlobalContext();

  const [query, setQuery] = useState("");
  // const [loading, setloading] = useState(false);
  const [result, setResult] = useState();


  async function onSubmit(e) {
    e.preventDefault();
    // setloading(true);
    console.log(query)
    console.log(result)
    const URL = 'http://localhost:5000/getdata';
    try {
      
        const resp = await axios.post(URL, { query });
        console.log('without-changing',resp.data.result);
        setResult(resp.data.result);
        
        console.log(typeof(resp.data.result))
        const ullu= resp.data.result ;
        Changing(ullu);
        console.log("data right now ",data)
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
        {
          loading ? 
          <div style={icon}>
            <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#2e53da','#2e53da','#2e53da','#2e53da','#2e53da']}
          />
          </div> :
          <div  className='hero-button'>
          <div className='hero-input'>
            <input 
           
            >
            </input>
            <div className='search-icon'><SearchIcon className='icon' /></div>
          </div>
          <button onClick={(event)=>{onSubmit(event);rotate()}}>Search</button>
          
        </div>
        }
        
    </div>
  )
}

export default Hero