import React from 'react';
import LTVCalculator from '../components/MortgageCalculator'; // Ensure the path matches your folder structure
import { Link } from 'react-router-dom';

const MortgageCalculatorPage = () => {
  return (
    <div>
      <h2>LTV Calculator</h2>
      <LTVCalculator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MortgageCalculatorPage;
