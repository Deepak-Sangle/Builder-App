import {createSlice} from '@reduxjs/toolkit';

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

const onPress_perBuilder = () => {
  navigation.navigate('BuilderPlanView');
};

const onPress_allAccess = () => {};

const planAndPrice = [
  {
    key: 1,
    tag: null,
    onPress: onPress_perBuilder,
    heading: 'Per Builder Plan',
    price: '2990',
    price_durn: 'year/builder',
    desc: 'Dealing with selected builders, get unlimited access to all their projects in your region.',
  },
  {
    key: 2,
    tag: 'Best seller',
    onPress: onPress_allAccess,
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
  cities,
  companies,
  name: 'Deepak',
  planAndPrice,
  builderViewLoc,
  companyTypeDD,
  stateDD,
  // selectBuilders,
  // completeProfile,
};

const walkInSlice = createSlice({
  name: 'walkInScreens',
  initialState: walkInScreensInitialState,
  // reducers: {
  //   updateName(state, action) {
  //     state.name = action.payload;
  //   },
  //   updateCompany(state, action) {
  //     state.location = action.payload;
  //   },
  // },
});

//export const {updateName, updateCompany} = nameCompanyReducer.actions;
export default walkInSlice.reducer;
