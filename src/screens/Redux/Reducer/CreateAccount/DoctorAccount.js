import { createSlice } from '@reduxjs/toolkit';

const createDoctorAccountSlice = createSlice({
  name: 'createAccount',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    address:"",
    profession_type:"",
    hospital:"",
    experience:"",
    fee:"",
    gender: '',
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
        state.lastName = action.payload;
      },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAddress: (state, action) => {
        state.address = action.payload;
      },
      setFee: (state, action) => {
        state.fee = action.payload;
      },
      setHospital: (state, action) => {
        state.hospital = action.payload;
      },
      setExperience: (state, action) => {
        state.experience = action.payload;
      },
      setProfession: (state, action) => {
        state.profession_type = action.payload;
      },
    setgender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const { 
    setFirstName,
    setAddress,
    setExperience,
    setFee,
    setHospital,
    setProfession,
    setLastName, setEmail, setgender } = createDoctorAccountSlice.actions;
export default createDoctorAccountSlice.reducer;