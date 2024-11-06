import React, { useState } from 'react';

const CapRateCalculator = () => {
  const [netOperatingIncome, setNetOperatingIncome] = useState('');
  const [propertyPrice, setPropertyPrice] = useState('');
  const [capRate, setCapRate] = useState(null);

  const calculateCapRate = () => {
    const noi = parseFloat(netOperatingIncome);
    const price = parseFloat(propertyPrice);

    if (noi && price) {
      const capRateResult = (noi / price) * 100;
      setCapRate(capRateResult.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Capitalization Rate (Cap Rate) Calculator</h2>
      <div>
        <label>Net Operating Income (NOI): </label>
        <input
          type="number"
          value={netOperatingIncome}
          onChange={(e) => setNetOperatingIncome(e.target.value)}
        />
      </div>
      <div>
        <label>Property Price: </label>
        <input
          type="number"
          value={propertyPrice}
          onChange={(e) => setPropertyPrice(e.target.value)}
        />
      </div>
      <button onClick={calculateCapRate}>Calculate Cap Rate</button>
      {capRate !== null && <p>Cap Rate: {capRate}%</p>}
    </div>
  );
};

export default CapRateCalculator;
