import React from 'react';
import NPVCalculator from '../components/NPVCalculator'; // Ensure the path matches your folder structure
import { Link } from 'react-router-dom';

const NPVCalculatorPage = () => {
  return (
    <div>
      <h2>LTV Calculator</h2>
      <NPVCalculator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NPVCalculatorPage;
