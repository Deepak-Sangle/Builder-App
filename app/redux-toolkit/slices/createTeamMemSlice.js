import {createSlice} from '@reduxjs/toolkit';
import axiosAPIInstanceProject from '../../Api/axiosInstanceProject';
import axiosInstance from '../../Api/AxiosApiInstance';

const createTeamMemInitState = {
  data: [],
};

const createTeamMemScreenSlice = createSlice({
  name: 'createTeamMemScreen',
  initialState: createTeamMemInitState,
  reducers: {
    addTeamMem(state, action) {},
  },
});

export default createTeamMemScreenSlice.reducer;

export const addTeamMem = async payload => {
  const response = await axiosInstance.post('teams/createTeamMember', payload);
  return response.status;
};
