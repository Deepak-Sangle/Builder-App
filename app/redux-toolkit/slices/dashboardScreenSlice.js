import {createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../../Api/AxiosApiInstance';
import axiosAPIInstancePlan from '../../Api/AxiosInstancePlan';
import axiosAPIInstanceProject from '../../Api/axiosInstanceProject';

const dashboardScreenInitialState = {
  data: [],
  allBuilders : [],
  subscriptions : [],
  loading : true,
};

const dashboardScreenSlice = createSlice({
  name: 'dashboardScreen',
  initialState: dashboardScreenInitialState,
  reducers: {
    addDashboardData(state, action) {
      state.data = action.payload;
    },
    getAllBuilders(state, action) {
      state.allBuilders = action.payload;
    },
    getAllSubscriptions(state, action) {
      state.subscriptions = action.payload;
      state.loading = false;
    },
  },
});
export const dashboardReducer = dashboardScreenSlice.reducer;

export const addDashboardData = () => async dispatch => {
  const response = await axiosAPIInstanceProject.get('/groups/getMyGroups');
  dispatch(dashboardScreenSlice.actions.addDashboardData(response.data.data));
};

export const getAllBuilders = () => async dispatch => {
  const response = await axiosAPIInstanceProject.get('/groups');
  dispatch(dashboardScreenSlice.actions.getAllBuilders(response.data.data));
};

export const getAllSubscriptions = () => async dispatch => {
  const response = await axiosAPIInstancePlan.get('/subscription');
  dispatch(dashboardScreenSlice.actions.getAllSubscriptions(response.data.data));
};