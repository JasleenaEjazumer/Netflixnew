import React from 'react';
import "./App.css";
import NavBar from './Components/navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/rowpost/RowPost';
import {Action,Originals, romance } from './url'

//import './App.css';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost  url={Originals} title=' Netflix Originals'/>
        <RowPost  url={Action} title='Action' isSmall/>
        <RowPost  url={romance} title='RomanticMovies' isSmall/>
        
    
    </div>
  );
}

export default App;
