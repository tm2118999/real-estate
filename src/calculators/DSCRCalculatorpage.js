import React from 'react';
import DSCRCalculator from '../components/DSCRCalculator'; // Ensure the path matches your folder structure
import { Link } from 'react-router-dom';

const DSCRCalculatorPage = () => {
  return (
    <div>
      <h2>LTV Calculator</h2>
      <DSCRCalculator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default DSCRCalculatorPage;
