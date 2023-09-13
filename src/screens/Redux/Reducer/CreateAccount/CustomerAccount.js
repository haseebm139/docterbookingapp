import { createSlice } from '@reduxjs/toolkit';

const createAccountSlice = createSlice({
  name: 'createAccount',
  initialState: {
    id:"",
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
  },
  reducers: {
    setId:(state, action)=>{
      state.id = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
        state.firstName = action.payload;
      },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setgender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const { setId,setFirstName,setLastName, setEmail, setgender } = createAccountSlice.actions;
export default createAccountSlice.reducer;