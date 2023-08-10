import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './Reducer/UserReducer';
import phoneSlice from './Reducer/phoneSlice';
import customerAccount from './Reducer/CreateAccount/CustomerAccount'
import doctorAccount from './Reducer/CreateAccount/DoctorAccount'
import doctorSlice from './Reducer/doctorSlice';

const store = configureStore({
  reducer: {
    user: UserReducer,
    phone: phoneSlice,
    customerAccount: customerAccount,
    doctorAccount: doctorAccount,
    doctorDetails: doctorSlice
  },
});

export default store;