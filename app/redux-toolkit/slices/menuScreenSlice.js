import {createSlice} from '@reduxjs/toolkit';
import {MenuListData} from '../../native/screens/menuScreen/dummyData/MenuListData';

const menuScreenInitialState = {
  name: 'Mr. Dhoni',
  location: 'Gurugram',
  menuList: MenuListData,
};

const menuSlice = createSlice({
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
export const MenuReducer = menuSlice.reducer;
//export const {updateName, updateCompany} = nameCompanyReducer.actions;
