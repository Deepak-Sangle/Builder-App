import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../../Api/AxiosApiInstance';

const cities = [
  {name: 'Gurugram', id: 1},
  {name: 'New Delhi', id: 2},
];

const companies = [
  {
    name: 'Asset Advisor India',
    address: 'FF10, Ninex Mall, Sohna Road, Sector 49, Gurugram',
    id: 1,
  },
  {
    name: 'Asset Advisor India Pvt. Ltd.',
    address: 'B3-590, Greenwood, Sector 46, Gurugram',
    id: 2,
  },
  {name: 'None of the above', id: 0},
];

const planAndPrice = [
  {
    key: 1,
    tag: null,
    heading: 'Per Builder Plan',
    price: '2990',
    price_durn: 'year/builder',
    desc: 'Dealing with selected builders, get unlimited access to all their projects in your region.',
  },
  {
    key: 2,
    tag: 'Best seller',
    heading: 'All Access Plan',
    price: '19990',
    price_durn: 'year',
    desc: 'Unlimited access to all builders in your region.',
  },
];

const builderViewLoc = [
  {label: 'Gurugram', value: 'gurugram'},
  {label: 'New Delhi', value: 'delhi'},
  {label: 'Mumbai', value: 'mumbai'},
];

const companyTypeDD = [
  {label: 'Partnership', value: 'partnership'},
  {label: 'Public Company', value: 'public-company'},
  {label: 'Private Company', value: 'private-company'},
];

const stateDD = [
  {label: 'Maharashtra', value: 'maharashtra'},
  {label: 'Haryana', value: 'haryana'},
  {label: 'Goa', value: 'goa'},
  {label: 'Kerela', value: 'kerela'},
  {label: 'Punjab', value: 'punjab'},
];

const walkInScreensInitialState = {
  otp: 1234,
  cities,
  companies,
  name: 'Arnav',
  planAndPrice,
  builderViewLoc,
  companyTypeDD,
  stateDD,
  data: [],
};

const walkInSlice = createSlice({
  name: 'walkInScreens',
  initialState: walkInScreensInitialState,
  reducers: {
    registerAccount(state, action) {},
    loginUser(state, action) {},
    loggedInUser(state, action) {
      state.data = action.payload;
    },
  },
});

export default walkInSlice.reducer;

export const registerAccount = async payload => {
  const response = await axiosInstance.post('auth/register', payload);
  return response.status;
};

export const loginUser = async payload => {
  const response = await axiosInstance.post('auth/login', payload);
  console.log({response});
  return response;
};

export const loggedInUser = response => async dispatch => {
  dispatch(walkInSlice.actions.loggedInUser(response));
};
