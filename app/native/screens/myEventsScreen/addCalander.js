import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import deviceWidth from '../../../Constants/projectConstants';

export default function AddCalanderComp() {
  return (
    <View style={styles.addComp}>
      <View style={styles.eventsCC45}>
        <Text style={styles.eventsCC45Text}>Add to your Calander</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addComp: {
    marginTop: 2,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: deviceWidth - 30,
    marginBottom: 10,
  },
  eventsCC45: {
    borderRadius: 10,
    padding: 20,
  },
  eventsCC45Text: {
    color: '#0078e9',
    fontFamily: 'Nunito-SemiBold',
  },
});
