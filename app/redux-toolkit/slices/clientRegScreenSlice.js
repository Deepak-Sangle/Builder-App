import {createSlice} from '@reduxjs/toolkit';
import {CarouselData} from '../../native/screens/clientRegScreen/dummyDataClientReg/CarouselData';
import {PropertyData} from '../../native/screens/clientRegScreen/dummyDataClientReg/PropertyData';
import {ProjectData} from '../../native/screens/clientRegScreen/dummyDataClientReg/ProjectData';
import {RmData} from '../../native/screens/clientRegScreen/dummyDataClientReg/RmData';

const clientRegInitialState = {
  carousel: CarouselData,
  property: PropertyData,
  project: ProjectData,
  rmD: RmData,
};

const clientRegSlice = createSlice({
  name: 'clientRegScreen',
  initialState: clientRegInitialState,
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
export default clientRegSlice.reducer;
