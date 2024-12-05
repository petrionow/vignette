import { useNavigate } from 'react-router-dom';
import { useForm } from '../context/FormContext';
import Header from '../components/Header';
import { useState } from 'react';
import CountrySelect from '../components/CountrySelect.jsx';

export const formatDateForDisplay = (date) => {
  if (!date) return '';
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear();
  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  return `${day}-${month}-${year} ${hours}:${minutes}`;
};

// Расчет конечной даты в зависимости от периода
export const calculateEndDate = (startDate, period) => {
  const date = new Date(startDate);

  switch(period) {
    case '10days':
      date.setDate(date.getDate() + 10);
      break;
    case '20days':
      date.setDate(date.getDate() + 20);
      break;
    case '2months':
      date.setMonth(date.getMonth() + 2);
      break;
    case '1year':
      date.setFullYear(date.getFullYear() + 1);
      break;
    default:
      return null;
  }

  date.setHours(23, 59, 0, 0);
  return date;
};

function VehicleDetails() {
  const navigate = useNavigate();
  const { state, updateField } = useForm();

  const formatDisplayValue = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  

  // Форматирование для input type="date" (должен быть yyyy-mm-dd)
  const formatDateForInput = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };

  // Форматирование для отображения (dd-mm-yyyy hh:mm)


  // Состояния формы
  const [startDate, setStartDate] = useState(formatDateForInput(new Date()));
  const [country, setCountry] = useState('Austria');
  const [plateNumber, setPlateNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateField('startDate', startDate);
    updateField('registrationCountry', country);
    updateField('plateNumber', plateNumber);
    navigate('/check');
  };




  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Header progress={75} />
      
      <div className="w-[311px] mt-[calc(50vh/8)] mb-auto py-6 px-5 bg-[#F8F8F8] border-t border-gray-200 rounded-[20px] shadow-[0_0_1px_rgba(0,0,0,0.1)]">
        <h2 className="text-[20px] font-medium leading-[30px] font-poppins text-center mb-6">
          Period and car info
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
{/* Дата */}
<div className="space-y-1" style={{
  textAlign: 'start'
}}>
  <label className="text-sm text-[#2C2C2C] font-poppins">Choose starting date</label>
  <div className="relative">
    <div style={{
      display: 'flex',
      position: 'relative'
    }}>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="w-full p-4 border rounded-xl bg-white font-poppins appearance-none text-transparent"
        style={{
          height: '40px'
        }}
        required
      />
      <svg style={{
        position: 'absolute',
        right: '5%',
        top: '30%'
      }} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.16663 7.00016C1.16663 4.80041 1.16663 3.70025 1.85029 3.01716C2.53396 2.33408 3.63354 2.3335 5.83329 2.3335H8.16663C10.3664 2.3335 11.4665 2.3335 12.1496 3.01716C12.8327 3.70083 12.8333 4.80041 12.8333 7.00016V8.16683C12.8333 10.3666 12.8333 11.4667 12.1496 12.1498C11.466 12.8329 10.3664 12.8335 8.16663 12.8335H5.83329C3.63354 12.8335 2.53338 12.8335 1.85029 12.1498C1.16721 11.4662 1.16663 10.3666 1.16663 8.16683V7.00016Z"
          stroke="#2C2C2C" stroke-width="0.875"/>
        <path d="M4.08325 2.3335V1.4585M9.91659 2.3335V1.4585M1.45825 5.25016H12.5416" stroke="#2C2C2C"
              stroke-width="0.875" stroke-linecap="round"/>
        <path
          d="M10.5 9.91667C10.5 10.0714 10.4385 10.2198 10.3291 10.3291C10.2198 10.4385 10.0714 10.5 9.91667 10.5C9.76196 10.5 9.61358 10.4385 9.50419 10.3291C9.39479 10.2198 9.33333 10.0714 9.33333 9.91667C9.33333 9.76196 9.39479 9.61358 9.50419 9.50419C9.61358 9.39479 9.76196 9.33333 9.91667 9.33333C10.0714 9.33333 10.2198 9.39479 10.3291 9.50419C10.4385 9.61358 10.5 9.76196 10.5 9.91667ZM10.5 7.58333C10.5 7.73804 10.4385 7.88642 10.3291 7.99581C10.2198 8.10521 10.0714 8.16667 9.91667 8.16667C9.76196 8.16667 9.61358 8.10521 9.50419 7.99581C9.39479 7.88642 9.33333 7.73804 9.33333 7.58333C9.33333 7.42862 9.39479 7.28025 9.50419 7.17085C9.61358 7.06146 9.76196 7 9.91667 7C10.0714 7 10.2198 7.06146 10.3291 7.17085C10.4385 7.28025 10.5 7.42862 10.5 7.58333ZM7.58333 9.91667C7.58333 10.0714 7.52188 10.2198 7.41248 10.3291C7.30308 10.4385 7.15471 10.5 7 10.5C6.84529 10.5 6.69692 10.4385 6.58752 10.3291C6.47813 10.2198 6.41667 10.0714 6.41667 9.91667C6.41667 9.76196 6.47813 9.61358 6.58752 9.50419C6.69692 9.39479 6.84529 9.33333 7 9.33333C7.15471 9.33333 7.30308 9.39479 7.41248 9.50419C7.52188 9.61358 7.58333 9.76196 7.58333 9.91667ZM7.58333 7.58333C7.58333 7.73804 7.52188 7.88642 7.41248 7.99581C7.30308 8.10521 7.15471 8.16667 7 8.16667C6.84529 8.16667 6.69692 8.10521 6.58752 7.99581C6.47813 7.88642 6.41667 7.73804 6.41667 7.58333C6.41667 7.42862 6.47813 7.28025 6.58752 7.17085C6.69692 7.06146 6.84529 7 7 7C7.15471 7 7.30308 7.06146 7.41248 7.17085C7.52188 7.28025 7.58333 7.42862 7.58333 7.58333ZM4.66667 9.91667C4.66667 10.0714 4.60521 10.2198 4.49581 10.3291C4.38642 10.4385 4.23804 10.5 4.08333 10.5C3.92862 10.5 3.78025 10.4385 3.67085 10.3291C3.56146 10.2198 3.5 10.0714 3.5 9.91667C3.5 9.76196 3.56146 9.61358 3.67085 9.50419C3.78025 9.39479 3.92862 9.33333 4.08333 9.33333C4.23804 9.33333 4.38642 9.39479 4.49581 9.50419C4.60521 9.61358 4.66667 9.76196 4.66667 9.91667ZM4.66667 7.58333C4.66667 7.73804 4.60521 7.88642 4.49581 7.99581C4.38642 8.10521 4.23804 8.16667 4.08333 8.16667C3.92862 8.16667 3.78025 8.10521 3.67085 7.99581C3.56146 7.88642 3.5 7.73804 3.5 7.58333C3.5 7.42862 3.56146 7.28025 3.67085 7.17085C3.78025 7.06146 3.92862 7 4.08333 7C4.23804 7 4.38642 7.06146 4.49581 7.17085C4.60521 7.28025 4.66667 7.42862 4.66667 7.58333Z"
          fill="#2C2C2C"/>
      </svg>

    </div>

    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#2C2C2C]">
      {startDate ? formatDisplayValue(startDate) : 'DD-MM-YYYY'}
    </div>
  </div>
  <span className="text-xs text-gray-500">
    {state.vehiclePeriod && startDate ?
      <div>Valid until <span style={{
        color: 'black'
      }}>
        {formatDateForDisplay(calculateEndDate(startDate, state.vehiclePeriod))}</span></div>
      : "Choose date and period"
    }
  </span>
</div>

          {/* Выбор страны */}
          <div style={{
            textAlign: 'start'
          }} className="space-y-1">
            <label className="text-sm text-[#2C2C2C] font-poppins">Car registration country</label>

            <CountrySelect/>
            {/*<div style={{*/}
            {/*  height: '40px'*/}
            {/*}} className="w-full p-4 border rounded-xl bg-white flex items-center justify-between">*/}
            {/*  <span className="font-poppins">{country}</span>*/}

            {/*</div>*/}
          </div>

          {/* Номер машины */}
          <div style={{
            textAlign: 'start'
          }} className="space-y-1">
            <label className="text-sm text-[#2C2C2C] font-poppins">Enter plate number</label>
            <div style={{
              height: '40px'
            }} className="flex gap-2">

              <input
                type="text"
                value={plateNumber}
                onChange={(e) => setPlateNumber(e.target.value)}
                placeholder="WPO12AB"
                className="flex-1 p-4 border rounded-xl bg-white font-poppins"
                required
              />
            </div>
          </div>

          {/* Кнопка Next */}
          <button style={{
            position: 'relative',
            height: '48px'
          }}
            type="submit"
            className="w-full h-[48px] bg-[#E31E24] text-white rounded-xl font-poppins text-[14px] font-medium leading-[28px] px-6 py-[6px] flex items-center justify-center gap-2.5 hover:bg-[#cc1a1f] transition-colors mt-6"
          >
            Next
            <svg style={{
              position: 'absolute',
              right: '5%',
              top: '35%'
            }} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.24242 2.15122C4.1898 2.09553 4.14865 2.03002 4.12135 1.95843C4.09404 1.88683 4.0811 1.81056 4.08326 1.73397C4.08543 1.65738 4.10266 1.58196 4.13397 1.51203C4.16529 1.4421 4.21007 1.37901 4.26576 1.32639C4.32145 1.27376 4.38696 1.23262 4.45855 1.20531C4.53014 1.178 4.60641 1.16506 4.68301 1.16723C4.7596 1.16939 4.83502 1.18662 4.90495 1.21794C4.97488 1.24925 5.03796 1.29403 5.09059 1.34972L10.0489 6.59972C10.1513 6.70803 10.2084 6.85142 10.2084 7.00047C10.2084 7.14952 10.1513 7.29291 10.0489 7.40122L5.09059 12.6518C5.03831 12.7087 4.97524 12.7547 4.90505 12.787C4.83486 12.8193 4.75895 12.8374 4.68172 12.8401C4.60449 12.8429 4.52748 12.8303 4.45517 12.803C4.38287 12.7757 4.3167 12.7344 4.26051 12.6813C4.20432 12.6282 4.15924 12.5645 4.12787 12.4939C4.09651 12.4233 4.07949 12.3471 4.07781 12.2699C4.07613 12.1926 4.08981 12.1158 4.11807 12.0439C4.14633 11.9719 4.1886 11.9063 4.24242 11.8509L8.82276 7.00047L4.24242 2.15122Z"
                fill="white"/>
            </svg>

          </button>
        </form>
      </div>
    </div>
  );
}

export default VehicleDetails;