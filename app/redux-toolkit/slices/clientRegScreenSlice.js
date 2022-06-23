import {createSlice} from '@reduxjs/toolkit';
import {PropertyData} from '../../native/screens/clientRegScreen/dummyDataClientReg/PropertyData';
import {RmData} from '../../native/screens/clientRegScreen/dummyDataClientReg/RmData';
import PropertySubTypeData from '../../native/screens/clientRegScreen/dummyDataClientReg/propertySubTypeData';

import axiosInstance from '../../Api/AxiosApiInstance';
import axiosAPIInstanceProject from '../../Api/axiosInstanceProject';

const clientRegInitialState = {
  builder: [],
  property: PropertyData,
  project: {},
  rm: RmData,
  propertySubType : PropertySubTypeData,
  loading : true,
  status : null,
};

const clientRegSlice = createSlice({
  name: 'clientRegScreen',
  initialState: clientRegInitialState,
  reducers : {
    registerClient(state,action) {
      state.status = action.payload;
    },
    registerClientVisit(state,action) {
      state.status = action.payload;
    },
    addProjects(state, action){
      state.project = action.payload;
    },
    addBuilders(state,action){
      state.builder = action.payload;
      state.loading = false;
    } 
  }
});

export const registerClient = (data) => async dispatch => {
  const response = await axiosInstance.post('/clientVisits', data);
  dispatch(clientRegSlice.actions.registerClient(response.status));
};

export const registerClientVisit = (data) => async dispatch => {
  const response = await axiosInstance.post('/clientVisits/newVisit', data);
  console.log(response.status);
  dispatch(clientRegSlice.actions.registerClientVisit(response.status));
};

export const addProjects = (setProjectList) => async dispatch => {
  const response = await axiosInstance.get('/project?skip=0&limit=10');
  setProjectList(response.data.residential);
  dispatch(clientRegSlice.actions.addProjects(response.data));
};

export const addBuilders = () => async dispatch => {
  const response = await axiosAPIInstanceProject.get('/groups/getMyGroups');
  dispatch(clientRegSlice.actions.addBuilders(response.data.data));
};

export default clientRegSlice.reducer;