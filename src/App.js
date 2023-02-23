import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componenet/header/Header';

function App() {
  return (
    <Router>
       <Header/>
     <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </Router> 
  );
}

export default App;
