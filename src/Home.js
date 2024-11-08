import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Real Estate Calculators</h1>
      <ul>
        <li><Link to="/ltv-calculator">LTV Calculator</Link></li>
        <li><Link to="/Mortgage-Calculator">Mortgage Calculator</Link></li>
        <li><Link to="/OER-calculator">OER Calculator</Link></li>
        <li><Link to="/GRM-calculator">GRM Calculator</Link></li>
        <li><Link to="/IRR-calculator">IRR Calculator</Link></li>
        <li><Link to="/MIRR-calculator">MIRR Calculator</Link></li>
        <li><Link to="/NPV-calculator">NPV Calculator</Link></li>
        <li><Link to="/EM-calculator">EM Calculator</Link></li>
        <li><Link to="/PI-calculator">PI Calculator</Link></li>
        <li><Link to="/ROI-calculator">ROI Calculator</Link></li>
        <li><Link to="/AS-calculator">AS Calculator</Link></li>
        <li><Link to="/DCF-calculator">DCF Calculator</Link></li>
        <li><Link to="/BER-calculator">BER Calculator</Link></li>
        <li><Link to="/CapRate-calculator">CapRate Calculator</Link></li>
        <li><Link to="/DSCR-calculator">DSCR Calculator</Link></li>
        <li><Link to="/CashOnCash-calculator">CashOnCash Calculator</Link></li>
      </ul>
    </div>
  );
};

export default Home;
