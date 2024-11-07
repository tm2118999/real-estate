import React, { useState } from 'react';

const ROICalculator = () => {
  const [netProfit, setNetProfit] = useState('');
  const [initialInvestment, setInitialInvestment] = useState('');
  const [roi, setRoi] = useState(null);

  const calculateROI = () => {
    const profit = parseFloat(netProfit);
    const investment = parseFloat(initialInvestment);

    if (profit && investment) {
      const roiResult = (profit / investment) * 100;
      setRoi(roiResult.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Return on Investment (ROI) Calculator</h2>
      <div>
        <label>Net Profit: </label>
        <input
          type="number"
          value={netProfit}
          onChange={(e) => setNetProfit(e.target.value)}
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
      <button onClick={calculateROI}>Calculate ROI</button>
      {roi !== null && <p>Return on Investment: {roi}%</p>}
    </div>
  );
};

export default ROICalculator;
