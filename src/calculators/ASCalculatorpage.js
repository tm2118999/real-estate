import React from 'react';
import ASCalculator from '../components/ASCalculator'; // Ensure the path matches your folder structure
import { Link } from 'react-router-dom';

const ASCalculatorPage = () => {
  return (
    <div>
      <h2>LTV Calculator</h2>
      <ASCalculator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ASCalculatorPage;
