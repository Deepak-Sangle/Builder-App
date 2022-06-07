import React from 'react';
import {StyleSheet, View, Text, Dimensions, ScrollView} from 'react-native';
import MenuHeaderScreen from './menuHeaderScreen';
import MenuList from './menuList';
import deviceWidth from '../../../Constants/projectConstants';

export default function MenuScreen() {
  return (
    <ScrollView>
      <View style={styles.eventsCont}>
        <MenuHeaderScreen />
      </View>
      <MenuList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  eventsCont: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth,
    backgroundColor: '#e6effc',
  },
});
