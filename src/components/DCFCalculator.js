import React, { useState } from 'react';

const DCFCalculator = () => {
  const [cashFlows, setCashFlows] = useState([]);
  const [discountRate, setDiscountRate] = useState('');
  const [presentValue, setPresentValue] = useState(null);

  const handleCashFlowChange = (e, index) => {
    const newCashFlows = [...cashFlows];
    newCashFlows[index] = parseFloat(e.target.value);
    setCashFlows(newCashFlows);
  };

  const addCashFlow = () => {
    setCashFlows([...cashFlows, 0]);
  };

  const calculateDCF = () => {
    const rate = parseFloat(discountRate) / 100;
    let dcf = 0;

    cashFlows.forEach((cf, t) => {
      dcf += cf / Math.pow(1 + rate, t + 1);
    });

    setPresentValue(dcf.toFixed(2));
  };

  return (
    <div>
      <h2>Discounted Cash Flow (DCF) Calculator</h2>
      <div>
        <label>Discount Rate (%): </label>
        <input
          type="number"
          value={discountRate}
          onChange={(e) => setDiscountRate(e.target.value)}
        />
      </div>
      <div>
        <h4>Cash Flows:</h4>
        {cashFlows.map((cf, index) => (
          <div key={index}>
            <label>Year {index + 1}: </label>
            <input
              type="number"
              value={cf}
              onChange={(e) => handleCashFlowChange(e, index)}
            />
          </div>
        ))}
        <button onClick={addCashFlow}>Add Cash Flow</button>
      </div>
      <button onClick={calculateDCF}>Calculate DCF</button>

      {presentValue !== null && (
        <h3>Present Value of Cash Flows: ${presentValue}</h3>
      )}
    </div>
  );
};

export default DCFCalculator;
