
import React from 'react';
import DCFCalculator from '../components/DCFCalculator'; // Ensure the path matches your folder structure
import { Link } from 'react-router-dom';

const DCFCalculatorPage = () => {
  return (
    <div>
      <h2>LTV Calculator</h2>
      <DCFCalculator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default DCFCalculatorPage;