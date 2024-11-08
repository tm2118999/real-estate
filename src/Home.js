import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Real Estate Calculators</h1>
      <ul>
        <li><Link to="/ltv-calculator">LTV Calculator</Link></li>
        <li><Link to="/mortgage-calculator">Mortgage Calculator</Link></li>
        {/* Add more calculators here as needed */}
      </ul>
    </div>
  );
};

export default Home;
