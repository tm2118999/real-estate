import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import './App.css';
import LTVCalculatorPage from './calculators/LTVCalculatorpage';
import MortgageCalculatorPage from './calculators/MortgageCalculatorpage';
import CapRateCalculatorPage from './calculators/CapRateCalculatorpage';
import CashOnCashCalculatorpage from './calculators/CashOnCashCalculatorpage';
import DCFCalculatorPage from './calculators/DCFCalculatorpage';
import DSCRCalculatorPage from './calculators/DSCRCalculatorpage';
import ROICalculatorPage from './calculators/ROICalculatorpage';
import OERCalculatorPage from './calculators/OERCalculatorpage';
import NPVCalculatorPage from './calculators/NPVCalculatorpage';
import ASCalculatorPage from './calculators/ASCalculatorpage';
import EMCalculatorPage from './calculators/EMCalculatorpage';
import PICalculatorPage from './calculators/PICalculatorpage';
import BERCalculatorpage from './calculators/BERCalculatorpage';
import MIRRCalculatorPage from './calculators/MIRRCalculatorpage';
import IRRCalculatorPage from './calculators/IRRCalculatorpage';
import GRMCalculatorPage from './calculators/GRMCalculatorpage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LTV-Calculator" element={<LTVCalculatorPage />} />
      <Route path="/Mortgage-Calculator" element={<MortgageCalculatorPage />} />
      <Route path="/CapRate-Calculator" element={<CapRateCalculatorPage />} />
      <Route path="/CashOnCash-Calculator" element={<CashOnCashCalculatorpage />} />
      <Route path="/DCF-Calculator" element={<DCFCalculatorPage />} />
      <Route path="/DSCR-Calculator" element={<DSCRCalculatorPage />} />
      <Route path="/ROI-Calculator" element={<ROICalculatorPage />} />
      <Route path="/OER-Calculator" element={<OERCalculatorPage />} />
      <Route path="/NPV-Calculator" element={<NPVCalculatorPage />} />
      <Route path="/AS-Calculator" element={<ASCalculatorPage />} />
      <Route path="/EM-Calculator" element={<EMCalculatorPage />} />
      <Route path="/PI-Calculator" element={<PICalculatorPage />} />
      <Route path="/GRM-Calculator" element={<GRMCalculatorPage/>} />
      <Route path="/IRR-Calculator" element={<IRRCalculatorPage />} />
      <Route path="/MIRR-Calculator" element={<MIRRCalculatorPage/>} />
      <Route path="/BER-Calculator" element={<BERCalculatorpage />} />

    </Routes>
  </Router>
  );
}

export default App;

