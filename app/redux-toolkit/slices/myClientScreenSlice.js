import {createSlice} from '@reduxjs/toolkit';
import {ClientData} from '../../native/screens/myClientScreen/dummyData/ClientData';
import {Clients} from '../../native/screens/myClientScreen/dummyData/UpcomingClients';
import {local_data} from '../../native/screens/myClientScreen/dummyData/DropDownData';

const myClientScreenInitialState = {
  client: ClientData,
  upcomingClients: Clients,
  dropDown: local_data,
};

const myClientSlice = createSlice({
  name: 'myClientRegScreen',
  initialState: myClientScreenInitialState,
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
export default myClientSlice.reducer;
