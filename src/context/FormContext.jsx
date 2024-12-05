// src/context/FormContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const FormContext = createContext();

const initialState = {
 vehicleType: null,       // car или motorcycle
 vehiclePeriod: null,     // 10days, 20days, 2months или 1year
 startDate: null,         // дата начала
 endDate: null,          // дата окончания
 registrationCountry: null, // страна регистрации
 plateNumber: null,       // номер машины
 amount: null,           // сумма к оплате
 currency: 'EUR'         // валюта
};

export function FormProvider({ children }) {
 const [state, setState] = useState(() => {
   const saved = localStorage.getItem('vignette_form_data');
   return saved ? JSON.parse(saved) : initialState;
 });

 useEffect(() => {
   localStorage.setItem('vignette_form_data', JSON.stringify(state));
 }, [state]);

 const updateField = (field, value) => {
   setState(prev => ({
     ...prev,
     [field]: value
   }));
 };

 const resetForm = () => {
   setState(initialState);
   localStorage.removeItem('vignette_form_data');
 };




 // Расчет конечной даты на основе периода
 const calculateEndDate = (startDate, period) => {
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

 return (
   <FormContext.Provider value={{ 
     state, 
     updateField, 
     resetForm,
     calculateEndDate
   }}>
     {children}
   </FormContext.Provider>
 );
}

export const useForm = () => {
 const context = useContext(FormContext);
 if (!context) {
   throw new Error('useForm must be used within FormProvider');
 }
 return context;
};