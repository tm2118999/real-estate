import React, { useState } from 'react';

const ASCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [years, setYears] = useState('');
  const [schedule, setSchedule] = useState([]);

  const calculateAmortization = () => {
    const loanAmount = parseFloat(principal);
    const monthlyRate = parseFloat(annualRate) / 100 / 12;
    const totalPayments = parseInt(years) * 12;

    if (loanAmount && monthlyRate && totalPayments) {
      const monthlyPayment = 
        (monthlyRate * loanAmount) / (1 - Math.pow(1 + monthlyRate, -totalPayments));

      const newSchedule = [];
      let balance = loanAmount;

      for (let i = 0; i < totalPayments; i++) {
        const interest = balance * monthlyRate;
        const principalPayment = monthlyPayment - interest;
        balance -= principalPayment;

        newSchedule.push({
          month: i + 1,
          payment: monthlyPayment.toFixed(2),
          principalPayment: principalPayment.toFixed(2),
          interestPayment: interest.toFixed(2),
          remainingBalance: balance.toFixed(2),
        });

        if (balance <= 0) break;
      }

      setSchedule(newSchedule);
    }
  };

  return (
    <div>
      <h2>Amortization Schedule Calculator</h2>
      <div>
        <label>Loan Amount (Principal): </label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Interest Rate (%): </label>
        <input
          type="number"
          value={annualRate}
          onChange={(e) => setAnnualRate(e.target.value)}
        />
      </div>
      <div>
        <label>Loan Term (Years): </label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div>
      <button onClick={calculateAmortization}>Calculate Amortization Schedule</button>

      {schedule.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Payment</th>
              <th>Principal</th>
              <th>Interest</th>
              <th>Remaining Balance</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, index) => (
              <tr key={index}>
                <td>{row.month}</td>
                <td>{row.payment}</td>
                <td>{row.principalPayment}</td>
                <td>{row.interestPayment}</td>
                <td>{row.remainingBalance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ASCalculator;
