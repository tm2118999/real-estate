import React from 'react';
import OERCalculator from '../components/OERCalculator'; // Ensure the path matches your folder structure
import { Link } from 'react-router-dom';

const OERCalculatorPage = () => {
  return (
    <div>
      <h2>LTV Calculator</h2>
      <OERCalculator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default OERCalculatorPage;
