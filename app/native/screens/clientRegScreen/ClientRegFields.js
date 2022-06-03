import React from 'react';
import {StyleSheet, View, Dimensions, TextInput, Text} from 'react-native';
import Dropdown from '../myClientScreen/Dropdown';
import {PropertyData} from './dummyDataClientReg/PropertyData';
import {ProjectData} from './dummyDataClientReg/ProjectData';
import {RmData} from './dummyDataClientReg/RmData';
import deviceWidth from '../../../Constants/projectConstants';

export default function ClientRegFields() {
  return (
    <View>
      <Dropdown data={PropertyData} dropDownStyles={styles.dropDowns} />
      <Dropdown data={ProjectData} dropDownStyles={styles.dropDowns} />
      <Text style={styles.regText}>Property spec(3 BHK - 3425 sqft)</Text>
      <Dropdown data={RmData} dropDownStyles={styles.dropDowns} />
    </View>
  );
}

const styles = StyleSheet.create({
  dropDowns: {
    width: deviceWidth - 30,
    marginTop: 15,
    backgroundColor: '#dbe5f3',
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 50,
  },
  regText: {
    width: deviceWidth - 30,
    marginTop: 15,
    backgroundColor: '#dbe5f3',
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 50,
    fontWeight: 'bold',
    padding: 15,
    fontSize: 16,
  },
});
