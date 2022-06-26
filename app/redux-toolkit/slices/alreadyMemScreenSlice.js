import {createSlice} from '@reduxjs/toolkit';

const alreadyMemInitialState = {
  name: 'Rakesh Kumar',
  company: 'Asset Advisor India',
};

const alreadyMemSlice = createSlice({
  name: 'alreadyMemScreen',
  initialState: alreadyMemInitialState,
  // reducers: {
  //   updateName(state, action) {
  //     state.name = action.payload;
  //   },
  //   updateCompany(state, action) {
  //     state.company = action.payload;
  //   },
  // },
});
export const alreadyMemReducer = alreadyMemSlice.reducer;
//export const {updateName, updateCompany} = alreadyMemSlice.actions;
export default alreadyMemSlice;
