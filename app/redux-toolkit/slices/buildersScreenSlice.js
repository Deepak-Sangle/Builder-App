import {createSlice} from '@reduxjs/toolkit';
import axiosApiInstance from '../../Api/AxiosApiInstance';

const builderScreenInitialState = {
  data: [],
};

const builderScreenSlice = createSlice({
  name: 'builderScreen',
  initialState: builderScreenInitialState,
  reducers: {
    addBuilderData(state, action) {
      state.data = action.payload;
    },
  },
});

export default builderScreenSlice.reducer;

export const addBuilderData = () => async dispatch => {
  const response = await axiosApiInstance.get('/groups');
  dispatch(builderScreenSlice.actions.addBuilderData(response.data.data));
};
