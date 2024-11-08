import React from 'react';
import CashOnCashCalculator from '../components/CashOnCashCalculator'; // Ensure the path matches your folder structure
import { Link } from 'react-router-dom';

const CashOnCashCalculatorpage = () => {
  return (
    <div>
      <h2>LTV Calculator</h2>
      <CashOnCashCalculator />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default CashOnCashCalculatorpage;
