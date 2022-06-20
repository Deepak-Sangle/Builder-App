import {createSlice} from '@reduxjs/toolkit';
import {AllCatData} from '../../native/screens/deedDocWriterScreen/dummyData/AllCatData';
import {DeedDocCardsData} from '../../native/screens/deedDocWriterScreen/dummyData/CardsData';
import {LocationData} from '../../native/screens/deedDocWriterScreen/dummyData/LocationData';

const deedDocScreenInitialState = {
  allCatData: AllCatData,
  deedDocCards: DeedDocCardsData,
  locData: LocationData,
};

const deedDocSlice = createSlice({
  name: 'deedDocScreen',
  initialState: deedDocScreenInitialState,
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
export default deedDocSlice.reducer;
