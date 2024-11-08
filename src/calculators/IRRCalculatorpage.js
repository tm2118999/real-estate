import React from 'react';
import IRRCalculator from '../components/IRRCalculator'; // Ensure the path matches your folder structure
import { Link } from 'react-router-dom';

const IRRCalculatorPage = () => {
  return (
    <div>
      <h2>LTV Calculator</h2>
      <IRRCalculator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default IRRCalculatorPage;
