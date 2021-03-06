import React from 'react';
import {StyleSheet, View, Dimensions, TextInput, Text} from 'react-native';
import Dropdown from '../myClientScreen/Dropdown';
import deviceWidth from '../../../Constants/projectConstants';

export default function ClientRegFields({property, project, rmD}) {
  return (
    <View style={{marginHorizontal : 20,}}>
      <Dropdown data={property} dropDownStyles={styles.dropDowns} />
      <Dropdown data={project} dropDownStyles={styles.dropDowns} />
      <Text style={styles.regText}>Property spec(3 BHK - 3425 sqft)</Text>
      <Dropdown data={rmD} dropDownStyles={styles.dropDowns} />
    </View>
  );
}

const styles = StyleSheet.create({
  dropDowns: {
    marginTop: 15,
    backgroundColor: '#dbe5f3',
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 50,
  },
  regText: {
    marginTop: 15,
    backgroundColor: '#dbe5f3',
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 50,
    fontFamily: 'Nunito-SemiBold',
    padding: 15,
    fontSize: 16,
  },
});
