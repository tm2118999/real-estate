import React from 'react';
import CapRateCalculator from '../components/CapRateCalculator'; // Ensure the path matches your folder structure
import { Link } from 'react-router-dom';

const CapRateCalculatorPage = () => {
  return (
    <div>
      <h2>CapRateCalculator</h2>
      <CapRateCalculator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default CapRateCalculatorPage;