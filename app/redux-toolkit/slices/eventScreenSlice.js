import {createSlice} from '@reduxjs/toolkit';
import {EventsDropDown} from '../../native/screens/myEventsScreen/dummyDataEvents/EventsDropdown';

const eventsInitialState = {
  events: EventsDropDown,
};

const eventsScreenSlice = createSlice({
  name: 'eventsScreen',
  initialState: eventsInitialState,
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
export default eventsScreenSlice.reducer;
