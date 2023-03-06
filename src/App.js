import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componenet/header/Header.js';
import Home from './componenet/Home/Home.js';
import Footer from "./componenet/footer/Footer.js"
import useLocalStorage from "use-local-storage";
import { ColorRing } from "react-loader-spinner"
import { useEffect, useState } from 'react';
import Contact from './componenet/Contact/Contact';
import About from './componenet/About/About';
import { themes } from './context/ThemeContext';
import { useGlobalContext } from './context/context';

function App() {

  const {theme} = useGlobalContext();
  console.log("app theme=>",theme)


  return (
    <div className={`App ${theme}`}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
