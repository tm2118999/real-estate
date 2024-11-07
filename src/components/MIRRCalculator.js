import React, { useState } from 'react';

const MIRRCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [cashFlows, setCashFlows] = useState([]);
  const [financeRate, setFinanceRate] = useState('');
  const [reinvestmentRate, setReinvestmentRate] = useState('');
  const [mirr, setMirr] = useState(null);
  const [cashFlow, setCashFlow] = useState('');

  const addCashFlow = () => {
    setCashFlows([...cashFlows, parseFloat(cashFlow)]);
    setCashFlow('');
  };

  const calculateMIRR = () => {
    const investment = parseFloat(initialInvestment);
    const finRate = parseFloat(financeRate) / 100;
    const reinvRate = parseFloat(reinvestmentRate) / 100;

    if (investment && finRate && reinvRate && cashFlows.length > 0) {
      const positiveFlows = cashFlows.reduce(
        (acc, flow) => (flow > 0 ? acc + flow : acc),
        0
      );
      const totalFutureValue = positiveFlows * Math.pow(1 + reinvRate, cashFlows.length);
      const mirrResult = Math.pow(totalFutureValue / Math.abs(investment), 1 / cashFlows.length) - 1;
      setMirr((mirrResult * 100).toFixed(2));
    }
  };

  return (
    <div>
      <h2>Modified Internal Rate of Return (MIRR) Calculator</h2>
      <div>
        <label>Initial Investment: </label>
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
        />
      </div>
      <div>
        <label>Finance Rate (%): </label>
        <input
          type="number"
          value={financeRate}
          onChange={(e) => setFinanceRate(e.target.value)}
        />
      </div>
      <div>
        <label>Reinvestment Rate (%): </label>
        <input
          type="number"
          value={reinvestmentRate}
          onChange={(e) => setReinvestmentRate(e.target.value)}
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
      <button onClick={calculateMIRR}>Calculate MIRR</button>
      {mirr !== null && <p>Modified Internal Rate of Return: {mirr}%</p>}
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

export default MIRRCalculator;
