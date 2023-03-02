import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componenet/header/Header.js';
import Home from './componenet/Home/Home.js';
import Footer from "./componenet/footer/Footer.js"
import useLocalStorage from "use-local-storage";
import { ColorRing } from "react-loader-spinner"
import { useEffect, useState } from 'react';
import Contact from './componenet/Contact/Contact';

function App() {


  // const icon ={
  //   display:"flex",
  //   alignItems:"center",
  //   justifyContent:"center",
  //   width:"100%",
  //   height:"100vh"
  // }

  // const [theme , setTheme] = useLocalStorage("theme" ? "dark" : "light");
  // const switchTheme = () =>{
  //   const newTheme = theme === "light"? "dark" : "light";
  //   setTheme(newTheme) ;
  // }


  return (
    // <div data-theme={theme}>
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </>



    // </div>

  );
}

export default App;
