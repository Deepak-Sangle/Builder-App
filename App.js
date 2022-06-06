/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
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

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SelectcityView from './app/native/screens/selectcityView'
import SelectCompanyView from './app/native/screens/selectCompanyView'
import OtpView from './app/native/screens/otpView';
import RegisterView from './app/native/screens/registerView';
import CompleteProfileView from './app/native/screens/completeProfileView';
import WelcomeView from './app/native/screens/welcomeView';
import BuilderPlanView from './app/native/screens/builderPlanView';
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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: "#F5F8FC",
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1} ]}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
        {/* <SelectcityView/> */}
        {/* <SelectCompanyView/> */}
        {/* <RegisterView /> */}
        {/* <OtpView /> */}
        {/* <CompleteProfileView /> */}
        {/* <WelcomeView/> */}
        {/* <BuilderPlanView / > */}
        {/* <PlansPricingView /> */}
        {/* <PreAccessView /> */}
        {/* <ProjectDetailView /> */}
        {/* <DashBoardView /> */}
        {/* <ManageAccount /> */}
        {/* <TeamDashboardView /> */}
        {/* <NewsView /> */}
        {/* <CircleRateView /> */}
        {/* <GovtPolicyView /> */}
        {/* <SampleDocumentView /> */}
        <SlideView />
        
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

export default App;
