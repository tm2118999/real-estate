import React, { useState } from 'react';

const NPVCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [cashFlows, setCashFlows] = useState([]);
  const [discountRate, setDiscountRate] = useState('');
  const [npv, setNpv] = useState(null);
  const [cashFlow, setCashFlow] = useState('');

  const addCashFlow = () => {
    setCashFlows([...cashFlows, parseFloat(cashFlow)]);
    setCashFlow('');
  };

  const calculateNPV = () => {
    const investment = parseFloat(initialInvestment);
    const rate = parseFloat(discountRate) / 100;

    if (investment && rate && cashFlows.length > 0) {
      const npvResult = cashFlows.reduce((acc, flow, index) => {
        return acc + flow / Math.pow(1 + rate, index + 1);
      }, -investment);
      setNpv(npvResult.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Net Present Value (NPV) Calculator</h2>
      <div>
        <label>Initial Investment: </label>
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
        />
      </div>
      <div>
        <label>Discount Rate (%): </label>
        <input
          type="number"
          value={discountRate}
          onChange={(e) => setDiscountRate(e.target.value)}
        />
      </div>
      <div>
        <label>Cash Flow (Yearly): </label>
        <input
          type="number"
          value={cashFlow}
          onChange={(e) => setCashFlow(e.target.value)}
        />
        <button onClick={addCashFlow}>Add Cash Flow</button>
      </div>
      <button onClick={calculateNPV}>Calculate NPV</button>
      {npv !== null && <p>Net Present Value: ${npv}</p>}
      <div>
        <h4>Cash Flows Added:</h4>
        <ul>
          {cashFlows.map((flow, index) => (
            <li key={index}>Year {index + 1}: ${flow}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NPVCalculator;
