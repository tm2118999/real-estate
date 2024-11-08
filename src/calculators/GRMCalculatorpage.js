import React from 'react';
import GRMCalculator from '../components/GRMCalculator'; // Ensure the path matches your folder structure
import { Link } from 'react-router-dom';

const GRMCalculatorPage = () => {
  return (
    <div>
      <h2>LTV Calculator</h2>
      <GRMCalculator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default GRMCalculatorPage;
