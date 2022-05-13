/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1} ]}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
      </ScrollView> */}
      {/* <SelectcityView/> */}
      {/* <SelectCompanyView/> */}
      <OtpView />
      
    </SafeAreaView>
    // <SelectcityView/>
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
