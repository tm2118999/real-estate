import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import './App.css';
import LTVCalculatorPage from './calculators/LTVCalculatorPage';
import MortgageCalculatorPage from './calculators/MortgageCalculatorpage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LTV-Calculator" element={<LTVCalculatorPage />} />
      <Route path="/Mortgage-Calculator" element={<MortgageCalculatorPage />} />
    </Routes>
  </Router>
  );
}

export default App;

