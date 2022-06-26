import {createSlice} from '@reduxjs/toolkit';
import axiosAPIInstanceProject from '../../Api/axiosInstanceProject';

const broadcastScreenInitialState = {
  data: [],
};

const broadcastScreenSlice = createSlice({
  name: 'broadcastScreen',
  initialState: broadcastScreenInitialState,
  reducers: {
    addBroadcastData(state, action) {
      state.data = action.payload;
    },
  },
});
export const broadcastReducer = broadcastScreenSlice.reducer;

export const addBroadcastData = () => async dispatch => {
  const response = await axiosAPIInstanceProject.get(
    'broadcasts/getAll/broadcast',
  );
  console.log({response});
  dispatch(broadcastScreenSlice.actions.addBroadcastData(response.data));
};
