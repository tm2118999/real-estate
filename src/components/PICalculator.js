import React, { useState } from 'react';

const PICalculator = () => {
  const [presentValue, setPresentValue] = useState('');
  const [initialInvestment, setInitialInvestment] = useState('');
  const [pi, setPi] = useState(null);

  const calculatePI = () => {
    const pv = parseFloat(presentValue);
    const investment = parseFloat(initialInvestment);

    if (pv && investment) {
      const piResult = pv / investment;
      setPi(piResult.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Profitability Index (PI) Calculator</h2>
      <div>
        <label>Present Value of Future Cash Flows: </label>
        <input
          type="number"
          value={presentValue}
          onChange={(e) => setPresentValue(e.target.value)}
        />
      </div>
      <div>
        <label>Initial Investment: </label>
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
        />
      </div>
      <button onClick={calculatePI}>Calculate PI</button>
      {pi !== null && <p>Profitability Index: {pi}</p>}
    </div>
  );
};

export default PICalculator;
