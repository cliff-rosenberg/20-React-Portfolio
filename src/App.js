import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import MyNav from './components/Navigation/MyNav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
    <Router>
      <MyNav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/portfolio" element={<Portfolio />}></Route>
        <Route exact path="/resume" element={<Resume />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
