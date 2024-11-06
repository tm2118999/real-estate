import React, { useState } from 'react';

const LTVCalculator = () => {
  // Set up state variables to store user input
  const [loanAmount, setLoanAmount] = useState('');
  const [propertyValue, setPropertyValue] = useState('');
  const [ltv, setLTV] = useState(null);

  // Function to calculate LTV
  const calculateLTV = () => {
    if (propertyValue && loanAmount) {
      const ltvResult = (loanAmount / propertyValue) * 100;
      setLTV(ltvResult.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Loan-to-Value (LTV) Calculator</h2>
      <div>
        <label>Loan Amount: </label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Property Value: </label>
        <input
          type="number"
          value={propertyValue}
          onChange={(e) => setPropertyValue(e.target.value)}
        />
      </div>
      <button onClick={calculateLTV}>Calculate LTV</button>
      {ltv !== null && <p>LTV Ratio: {ltv}%</p>}
    </div>
  );
};

export default LTVCalculator;
