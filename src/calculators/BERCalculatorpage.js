import React from 'react';
import BERCalculator from '../components/BERCalculator'; // Ensure the path matches your folder structure
import { Link } from 'react-router-dom';

const BERCalculatorpage = () => {
  return (
    <div>
      <h2>LTV Calculator</h2>
      <BERCalculator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default BERCalculatorpage;
