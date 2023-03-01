import React from 'react';
import "./image.css";
// import spider from "../../spiderman.jpg";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { useGlobalContext } from './../../context/context';
import { data } from '../data';

function Image() {
    const { data } = useGlobalContext();


    // console.log('data at image', data)

    // const data2 = [];
    // data2.push(data);
    // console.log('data2',data2)

    const sx = {
        fontSize: "40px",
        width: "25%",
        color: "black",
        border: "solid thin grey",
        padding: "4px",
        borderRadius: "5px",
        opacity: "unset",
        position: "absolute",
        bottom: "0.5rem",
        right: "1rem"
    }
    return (
         <div className='image-container'>

             {
                 data.map((item, index) => (
                    // console.log('e',item)
                    
                //         item.map((e, i) => (
                            <div className='image-div' key={index}>
                                <div className='face face1'>
                                    <img className='image' alt='' src={item.url} />
                                </div>
                                <div className='image-icon face face2'>
                                    <a href={item.url} download content="download"><DownloadForOfflineIcon className='icononimage' sx={sx} /></a>
                                </div>
                            </div>

                        //  ))
                    

                 )) }

        </div>
        // <h1>hello</h1>
    )
}

export default Image