
import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Word from './components/Word';


function App() {
  
 
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Word" element={<Word />}/>
    </Routes>
    
  </BrowserRouter>

  


  );
}

export default App;
