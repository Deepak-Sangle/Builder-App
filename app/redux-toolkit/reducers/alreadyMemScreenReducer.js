import {createSlice} from '@reduxjs/toolkit';

const alreadyMemInitialState = {
  name: 'Rakesh Kumar',
  company: 'Asset Advisor India',
};

const alreadyMemReducer = createSlice({
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

//export const {updateName, updateCompany} = alreadyMemReducer.actions;
export default alreadyMemReducer.reducer;
