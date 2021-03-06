/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import createTeamMemSlice from './app/redux-toolkit/slices/createTeamMemSlice';
import alreadyMemSlice from './app/redux-toolkit/slices/alreadyMemScreenSlice';
import menuSlice from './app/redux-toolkit/slices/menuScreenSlice';
import clientRegSlice from './app/redux-toolkit/slices/clientRegScreenSlice';
import deedDocSlice from './app/redux-toolkit/slices/deedDocScreenSlice';
import myClientSlice from './app/redux-toolkit/slices/myClientScreenSlice';
import eventsScreenSlice from './app/redux-toolkit/slices/eventScreenSlice';
import walkInScreensSlice from './app/redux-toolkit/slices/walkInScreensSlice';
import SelectcityView from './app/native/screens/selectcityView';
import SelectCompanyView from './app/native/screens/selectCompanyView';
import OtpView from './app/native/screens/otpView';
import RegisterView from './app/native/screens/registerView';
import CompleteProfileView from './app/native/screens/completeProfileView';
import WelcomeView from './app/native/screens/welcomeView';
import BuilderPlanView from './app/native/screens/builderPlanView';
import DialogBox from './app/native/screens/dialogView';
import PlansPricingView from './app/native/screens/plans&pricingView';
import PreAccessView from './app/native/screens/preAccessView';
import ProjectDetailView from './app/native/screens/projectDetailView';
import DashBoardView from './app/native/screens/accessDashboardView';
import ManageAccount from './app/native/screens/manageAccountView';
import TeamDashboardView from './app/native/screens/teamDashboardView';
import NewsView from './app/native/screens/newsView';
import CircleRateView from './app/native/screens/circleRateView';
import GovtPolicyView from './app/native/screens/govtPolicyView';
import SampleDocumentView from './app/native/screens/sampleDocumentView';
import SlideView from './app/native/screens/slideView';
import PaymentView from './app/native/screens/paymentView';
import MyEvents from './app/native/screens/myEventsScreen/myEvents';
import ClientRegScreen from './app/native/screens/clientRegScreen/clientRegScreen';
import MenuScreen from './app/native/screens/menuScreen/menuScreen';
import SorryScreen from './app/native/screens/SorryScreen/sorryScreen';
import DeedDocScreen from './app/native/screens/deedDocWriterScreen/deedDoc';
import TeamPack from './app/native/screens/teamPackScreen/teamPack';
import MyClient from './app/native/screens/myClientScreen/myClient';
import LoginView from './app/native/screens/loginView';
import AlreadyMember from './app/native/screens/alreadyMemberScreen/alreadyMemScreen';
import BuildersView from './app/native/screens/buildersView';
import VisitsPlannedView from './app/native/screens/visitsPlannedView';
import CreateTeamMem from './app/native/screens/createTeamMemberScreen/createTeamMem';

import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    alreadyMemScreen: alreadyMemSlice,
    menuScreen: menuSlice,
    clientRegScreen: clientRegSlice,
    deedDocScreen: deedDocSlice,
    myClientScreen: myClientSlice,
    eventScreen: eventsScreenSlice,
    walkInScreen: walkInScreensSlice,
    createMemScreen: createTeamMemSlice,
  },
});

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#F5F8FC',
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name='SlideView' component={SlideView} />
          <Stack.Screen name='RegisterView' component={RegisterView} />
          <Stack.Screen name='OtpView' component={OtpView} />
          <Stack.Screen name='SelectcityView' component={SelectcityView} />
          <Stack.Screen name='DialogBox' component={DialogBox} />
          <Stack.Screen name='SelectCompanyView' component={SelectCompanyView} />
          <Stack.Screen name='WelcomeView' component={WelcomeView} />
          <Stack.Screen name='LoginView' component={LoginView} />
          <Stack.Screen name='PlansPricingView' component={PlansPricingView} />
          <Stack.Screen name='BuilderPlanView' component={BuilderPlanView} />
          <Stack.Screen name='PaymentView' component={PaymentView} />
          <Stack.Screen name='CompleteProfileView' component={CompleteProfileView} />
          <Stack.Screen name='DashBoardView' component={DashBoardView} />
          <Stack.Screen name='PreAccessView' component={PreAccessView} />
          <Stack.Screen name='ProjectDetailView' component={ProjectDetailView} />
          <Stack.Screen name='BuildersView' component={BuildersView} />
          <Stack.Screen name='NewsView' component={NewsView} />
          <Stack.Screen name='CircleRateView' component={CircleRateView} />
          <Stack.Screen name='GovtPolicyView' component={GovtPolicyView} />
          <Stack.Screen name='SampleDocumentView' component={SampleDocumentView} />
          <Stack.Screen name='ManageAccount' component={ManageAccount} />
          <Stack.Screen name='TeamDashboardView' component={TeamDashboardView} />
          <Stack.Screen name='VisitsPlannedView' component={VisitsPlannedView} /> */}

          {/* <Stack.Screen name="MyEvents" component={MyEvents} /> */}
          {/* <Stack.Screen name="MenuScreen" component={MenuScreen} />
          <Stack.Screen name="SorryScreen" component={SorryScreen} />
          <Stack.Screen name="DeedDocScreen" component={DeedDocScreen} /> */}
          {/* <Stack.Screen name="MyClient" component={MyClient} />
          <Stack.Screen name="ClientRegScreen" component={ClientRegScreen} />
          <Stack.Screen name="TeamPack" component={TeamPack} />
          <Stack.Screen name="AlreadyMember" component={AlreadyMember} /> */}
          <Stack.Screen name="CreateTeamMem" component={CreateTeamMem} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
