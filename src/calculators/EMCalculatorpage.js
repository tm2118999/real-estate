import React from 'react';
import EMCalculator from '../components/EMCalculator'; // Ensure the path matches your folder structure
import { Link } from 'react-router-dom';

const EMCalculatorPage = () => {
  return (
    <div>
      <h2>LTV Calculator</h2>
      <EMCalculator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default EMCalculatorPage;
