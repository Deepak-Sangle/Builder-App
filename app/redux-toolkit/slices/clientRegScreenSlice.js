import {createSlice} from '@reduxjs/toolkit';
import {PropertyData} from '../../native/screens/clientRegScreen/dummyDataClientReg/PropertyData';
import {RmData} from '../../native/screens/clientRegScreen/dummyDataClientReg/RmData';
import PropertySubTypeData from '../../native/screens/clientRegScreen/dummyDataClientReg/propertySubTypeData';
import {setModifiedProjectList} from '../../utilities/helperFunctions';

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
  dispatch(clientRegSlice.actions.registerClientVisit(response.status));
};

export const addProjects = (setProjectList) => async dispatch => {
  const response = await axiosInstance.get('/project?skip=0&limit=0');
  const modifiedList = setModifiedProjectList(response.data);
  setProjectList(modifiedList.residential);
  dispatch(clientRegSlice.actions.addProjects(modifiedList));
};

export const addBuilders = () => async dispatch => {
  const response = await axiosAPIInstanceProject.get('/groups/getMyGroups');
  dispatch(clientRegSlice.actions.addBuilders(response.data.data));
};

export const clientRegistrationReducer = clientRegSlice.reducer;