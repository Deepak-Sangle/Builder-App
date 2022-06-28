import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {broadcastReducer} from '../slices/broadCastScreenSlice';
import {alreadyMemReducer} from '../slices/alreadyMemScreenSlice';
import {clientRegistrationReducer} from '../slices/clientRegScreenSlice';
import {MenuReducer} from '../slices/menuScreenSlice';
import {deedDocReducer} from '../slices/deedDocScreenSlice';
import {myClientReducer} from '../slices/myClientScreenSlice';
import {eventScreenReducer} from '../slices/eventScreenSlice';
import {walkInReducer} from '../slices/walkInScreensSlice';
import {createTeamMemberReducer} from '../slices/createTeamMemSlice';
import { dashboardReducer } from '../slices/dashboardScreenSlice';

const store = configureStore({
  reducer: {
    alreadyMemScreen: alreadyMemReducer,
    menuScreen: MenuReducer,
    deedDocScreen: deedDocReducer,
    myClientScreen: myClientReducer,
    eventScreen: eventScreenReducer,
    walkInScreen: walkInReducer,
    createMemScreen: createTeamMemberReducer,
    broadCastScreen: broadcastReducer,
    clientRegScreen: clientRegistrationReducer,
    dashboardScreen : dashboardReducer,
  },
});

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

export default store;
