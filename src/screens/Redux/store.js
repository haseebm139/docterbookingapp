import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './Reducer/UserReducer';
import phoneSlice from './Reducer/phoneSlice';
import customerAccount from './Reducer/CreateAccount/CustomerAccount'
import doctorAccount from './Reducer/CreateAccount/DoctorAccount'

const store = configureStore({
  reducer: {
    user: UserReducer,
    phone: phoneSlice,
    customerAccount: customerAccount,
    doctorAccount: doctorAccount
  },
});

export default store;