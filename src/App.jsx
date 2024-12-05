import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import HomePage from './pages/HomePage';
import VehicleSelect from './pages/VehicleSelect';
import PeriodSelect from './pages/PeriodSelect';
import VehicleDetails from './pages/VehicleDetails';
import CheckDetails from './pages/CheckDetails';
import './App.css';
import Payment from './pages/Payment.jsx';
import ThankYou from './pages/ThankYou.jsx';

function App() {  
  return (
    <Router>
      <FormProvider>
        <div style={{
          background: 'none'
        }} className="min-h-screen bg-gradient-to-b from-[#FFF5F5] via-[#FFF5F5] to-[#FFF5F5]">
          <div className="w-full min-h-screen mx-auto px-4 py-5 flex flex-col items-center sm:max-w-[430px]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/vehicle" element={<VehicleSelect />} />
              <Route path="/period" element={<PeriodSelect />} />
              <Route path="/details" element={<VehicleDetails />} />
              <Route path="/check" element={<CheckDetails />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </div>
        </div>
      </FormProvider>
    </Router>
  );
}

export default App;