import React, { useState } from 'react';

const IRRCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [numberOfYears, setNumberOfYears] = useState('');
  const [irr, setIrr] = useState(null);

  const calculateIRR = () => {
    const investment = parseFloat(initialInvestment);
    const final = parseFloat(finalValue);
    const years = parseFloat(numberOfYears);

    if (investment && final && years) {
      const irrResult = (Math.pow(final / investment, 1 / years) - 1) * 100;
      setIrr(irrResult.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Internal Rate of Return (IRR) Calculator</h2>
      <div>
        <label>Initial Investment: </label>
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
        />
      </div>
      <div>
        <label>Final Value: </label>
        <input
          type="number"
          value={finalValue}
          onChange={(e) => setFinalValue(e.target.value)}
        />
      </div>
      <div>
        <label>Number of Years: </label>
        <input
          type="number"
          value={numberOfYears}
          onChange={(e) => setNumberOfYears(e.target.value)}
        />
      </div>
      <button onClick={calculateIRR}>Calculate IRR</button>
      {irr !== null && <p>Internal Rate of Return: {irr}%</p>}
    </div>
  );
};

export default IRRCalculator;
