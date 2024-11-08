import React from 'react';
import ROICalculator from '../components/ROICalculator'; // Ensure the path matches your folder structure
import { Link } from 'react-router-dom';

const ROICalculatorPage = () => {
  return (
    <div>
      <h2>LTV Calculator</h2>
      <ROICalculator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ROICalculatorPage;
