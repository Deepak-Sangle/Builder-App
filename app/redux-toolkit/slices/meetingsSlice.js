import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../Api/AxiosApiInstance';

const meetingsInitialState = {
    data : [],
    loading : true,
}

const meetingSlice = createSlice({
    name : 'meetingSlice',
    initialState : meetingsInitialState,
    reducers : {
        addMeetingsData(state,action){
            state.data = action.payload;
            state.loading = false;
        },
    }
});

export const meetingReducer = meetingSlice.reducer;

export const addMeetingsData = () => async dispatch => {
    const response = await axiosInstance.get('/meetings');
    console.log(response.data);
    dispatch(meetingSlice.actions.addMeetingsData(response.data));
};