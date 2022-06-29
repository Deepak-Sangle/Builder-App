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
    shareContent(state, action) {},
    getShareData(state, action) {
      state.shareData = action.payload;
    },
  },
});
export const broadcastReducer = broadcastScreenSlice.reducer;

export const addBroadcastData = () => async dispatch => {
  const response = await axiosAPIInstanceProject.get(
    'broadcasts/getAll/broadcast',
  );
  dispatch(broadcastScreenSlice.actions.addBroadcastData(response.data));
};

export const shareContent = async payload => {
  const response = await axiosAPIInstanceProject.post(
    'media/counter?action=share',
    payload,
  );
  return response;
};

export const getShareData = referenceId => async dispatch => {
  const url = '/broadcasts/' + `${referenceId}` + '/export';
  const stringUrl = url.toString();
  console.log(stringUrl);
  const response = await axiosAPIInstanceProject.get(stringUrl);
  //dispatch(broadcastScreenSlice.actions.getShareData(response.data));
  return response.data.message.url;
};

export const viewContent = async payload => {
  const response = await axiosAPIInstanceProject.post(
    'media/counter?action=view',
    payload,
  );
  return response;
};

export const likeContent = async payload => {
  const response = await axiosAPIInstanceProject.post(
    'media/counter?action=like',
    payload,
  );
  return response;
};

export const dislikeContent = async payload => {
  const refid =
    'media/remove?action=like&referenceId=' + `${payload.referenceId}`;
  const ref = refid.toString();
  const response = await axiosAPIInstanceProject.delete(ref);
  return response;
};
