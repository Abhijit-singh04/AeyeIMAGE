import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componenet/header/Header.js';
import Home from './componenet/Home/Home.js';
import Footer from "./componenet/footer/Footer.js"
import useLocalStorage from "use-local-storage";
import {ColorRing} from "react-loader-spinner"
import { useEffect , useState } from 'react';

function App() {

  const [loading , setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    } , 3000);
  } , [])

  const icon ={
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    height:"100vh"
  }
  
  const [theme , setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () =>{
    const newTheme = theme === "light"? "dark" : "light";
    setTheme(newTheme) ;
  }


  return ( 
    // <div data-theme={theme}>
    <div style={loading ? icon : null}>
      {
        loading ? 
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#2e53da','#2e53da','#2e53da','#2e53da','#2e53da']}
          /> :
          <>
          <Router>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>} />
            </Routes>
            {/* <Footer/> */}
          </Router> 
          </>
      }
    </div>
      
    // </div>
 
  );
}

export default App;
