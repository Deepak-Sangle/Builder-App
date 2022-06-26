import {createSlice} from '@reduxjs/toolkit';
import axiosAPIInstanceProject from '../../Api/axiosInstanceProject';

const eventScreenInitialState = {
  data: [],
};

const eventsScreenSlice = createSlice({
  name: 'eventScreen',
  initialState: eventScreenInitialState,
  reducers: {
    addEventData(state, action) {
      state.data = action.payload;
    },
  },
});
export const eventScreenReducer = eventsScreenSlice.reducer;

export const addEventData = () => async dispatch => {
  const response = await axiosAPIInstanceProject.get(
    'events/broker/99a7a4c8-422e-4a7e-8a65-b9c5727e6af4',
  );
  dispatch(eventsScreenSlice.actions.addEventData(response.data));
};
