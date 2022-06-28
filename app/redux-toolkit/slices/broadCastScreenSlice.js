import {createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../../Api/AxiosApiInstance';

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
  const response = await axiosInstance.get(
    'broadcasts/getAll/broadcast',
  );
  dispatch(broadcastScreenSlice.actions.addBroadcastData(response.data));
};
