import React from 'react';
import PICalculator from '../components/PICalculator'; // Ensure the path matches your folder structure
import { Link } from 'react-router-dom';

const PICalculatorPage = () => {
  return (
    <div>
      <h2>LTV Calculator</h2>
      <PICalculator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default PICalculatorPage;
