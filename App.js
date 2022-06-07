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
import MyClient from './app/native/screens/myClientScreen/myClient';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MyEvents from './app/native/screens/myEventsScreen/myEvents';
import ClientRegScreen from './app/native/screens/clientRegScreen/clientRegScreen';
import MenuScreen from './app/native/screens/menuScreen/menuScreen';
import SorryScreen from './app/native/screens/SorryScreen/sorryScreen';
import DeedDocScreen from './app/native/screens/deedDocWriterScreen/deedDoc';
import TeamPack from './app/native/screens/teamPackScreen/teamPack';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View>
      {/* <MyClient /> */}
      {/* <MyEvents /> */}
      {/* <ClientRegScreen /> */}
      {/* <MenuScreen /> */}
      {/* <SorryScreen /> */}
      <DeedDocScreen />
      {/* <TeamPack /> */}
    </View>
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
