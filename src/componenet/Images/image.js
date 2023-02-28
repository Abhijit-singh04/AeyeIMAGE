import React from 'react';
import "./image.css";
// import spider from "../../spiderman.jpg";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { data } from '../data';

function image() {
    const sx = {
        fontSize: "40px",
        width: "25%",
        color:"black",
        border: "solid thin grey",
        padding: "4px",
        borderRadius: "5px",
        opacity: "unset",
        position:"absolute",
        bottom:"0.5rem",
        right:"1rem"
    }
  return (
    <div className='image-container'>
        
            {
                data.map((item , key)=>(
                    <div className='image-div'>
                        <div className='face face1'>
                            <img className='image' key={item.id} src={item.image} />
                        </div>
                        <div className='image-icon face face2'>
                            <a href={item.image} download content="download"><DownloadForOfflineIcon className='icononimage' sx={sx} /></a>
                        </div>
                    </div>
                ))
            }
       
    </div>
  )
}

export default image