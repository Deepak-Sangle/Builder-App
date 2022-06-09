import {createSlice} from '@reduxjs/toolkit';

const menuScreenInitialState = {
  name: 'Mr. Dhoni',
  location: 'Gurugram',
};

const menuScreenReducer = createSlice({
  name: 'menuScreen',
  initialState: menuScreenInitialState,
  // reducers: {
  //   updateName(state, action) {
  //     state.name = action.payload;
  //   },
  //   updateCompany(state, action) {
  //     state.location = action.payload;
  //   },
  // },
});

//export const {updateName, updateCompany} = nameCompanyReducer.actions;
export default menuScreenReducer.reducer;
