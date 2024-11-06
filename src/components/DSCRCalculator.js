import React, { useState } from 'react';

const DSCRCalculator = () => {
  const [netOperatingIncome, setNetOperatingIncome] = useState('');
  const [annualDebtService, setAnnualDebtService] = useState('');
  const [dscr, setDscr] = useState(null);

  const calculateDSCR = () => {
    const noi = parseFloat(netOperatingIncome);
    const debtService = parseFloat(annualDebtService);

    if (noi && debtService) {
      const dscrResult = noi / debtService;
      setDscr(dscrResult.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Debt Service Coverage Ratio (DSCR) Calculator</h2>
      <div>
        <label>Net Operating Income (NOI): </label>
        <input
          type="number"
          value={netOperatingIncome}
          onChange={(e) => setNetOperatingIncome(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Debt Service: </label>
        <input
          type="number"
          value={annualDebtService}
          onChange={(e) => setAnnualDebtService(e.target.value)}
        />
      </div>
      <button onClick={calculateDSCR}>Calculate DSCR</button>
      {dscr !== null && <p>Debt Service Coverage Ratio: {dscr}</p>}
    </div>
  );
};

export default DSCRCalculator;
