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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  //Set background color to "#0078E9" when Otp view is enabled
  const [backgroundColor, setBackgroundColor] = useState("white")
  
  const backgroundStyle = {
    backgroundColor: backgroundColor,
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
        <BuilderPlanView / >
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
