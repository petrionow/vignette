// src/pages/Payment.jsx
import { useNavigate } from 'react-router-dom';
import { useForm } from '../context/FormContext';
import Header from '../components/Header';
import { useState } from 'react';

function Payment() {
  const navigate = useNavigate();
  const { state, updateField } = useForm();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateField('email', email);
    // Здесь будет редирект на платежную систему
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Header progress={100} />

      <div className="w-[311px] mt-[calc(50vh/8)] mb-auto py-6 px-5 bg-[#F8F8F8] border-t border-gray-200 rounded-[20px] shadow-[0_0_1px_rgba(0,0,0,0.1)]">
        <h2 className="text-[20px] font-medium leading-[30px] font-poppins text-center mb-6">
          Payment
        </h2>

        <form  onSubmit={handleSubmit} className="space-y-4">
          <div style={{
            textAlign: 'start'
          }} className="space-y-1">
            <label className="text-sm text-[#2C2C2C] font-poppins">Enter your email</label>
            <input
              style={{
                height: '40px'
              }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Prikolemail@gmail.com"
              className="w-full p-4 border rounded-xl bg-white font-poppins"
              required
            />
          </div>

          <p style={{
            textAlign: 'start'
          }} className="text-sm text-gray-500 text-center">
            We will immediately send an electronic vignette to your email after payment
          </p>

          <button
            onClick={()=>navigate('/thank-you')}
            type="submit"
            className="w-full h-[48px] bg-[#E31E24] text-white rounded-xl font-poppins text-[14px] font-medium"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;