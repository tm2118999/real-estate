import React, { useState } from 'react';

const GRMCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState('');
  const [grossRentalIncome, setGrossRentalIncome] = useState('');
  const [grm, setGrm] = useState(null);

  const calculateGRM = () => {
    const price = parseFloat(propertyPrice);
    const income = parseFloat(grossRentalIncome);

    if (price && income) {
      const grmResult = price / income;
      setGrm(grmResult.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Gross Rent Multiplier (GRM) Calculator</h2>
      <div>
        <label>Property Price: </label>
        <input
          type="number"
          value={propertyPrice}
          onChange={(e) => setPropertyPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Gross Rental Income (Annual): </label>
        <input
          type="number"
          value={grossRentalIncome}
          onChange={(e) => setGrossRentalIncome(e.target.value)}
        />
      </div>
      <button onClick={calculateGRM}>Calculate GRM</button>
      {grm !== null && <p>Gross Rent Multiplier: {grm}</p>}
    </div>
  );
};

export default GRMCalculator;
