import React from 'react';
import MIRRCalculator from '../components/MIRRCalculator'; // Ensure the path matches your folder structure
import { Link } from 'react-router-dom';

const MIRRCalculatorPage = () => {
  return (
    <div>
      <h2>LTV Calculator</h2>
      <MIRRCalculator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MIRRCalculatorPage;
