import React, { useState } from 'react';

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const annualInterestRate = parseFloat(interestRate) / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = parseInt(loanTerm) * 12;

    if (principal && monthlyInterestRate && numberOfPayments) {
      const payment = 
        (principal * monthlyInterestRate) / 
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
      setMonthlyPayment(payment.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Mortgage Payment Calculator</h2>
      <div>
        <label>Loan Amount: </label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Interest Rate (%): </label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div>
        <label>Loan Term (years): </label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>
      <button onClick={calculateMortgage}>Calculate Payment</button>
      {monthlyPayment !== null && <p>Monthly Payment: ${monthlyPayment}</p>}
    </div>
  );
};

export default MortgageCalculator;
