import React from 'react';
import {StyleSheet, View} from 'react-native';
import Dropdown from '../myClientScreen/Dropdown';
import deviceWidth from '../../../Constants/projectConstants';
import SearchDeedAndDoc from './SearchDeedAndDoc';

export default function DropAndSearch({loc, cards}) {
  return (
    <View style={styles.dropAndSearchComp}>
      <View>
        <Dropdown data={loc} dropDownStyles={styles.dropDownSty} />
      </View>
      <View>
        <Dropdown data={cards} dropDownStyles={styles.dropDownSty} />
      </View>
      <View>
        <SearchDeedAndDoc />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropAndSearchComp: {
    backgroundColor: '#e4ebf4',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 16,
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  dropDownSty: {
    margin: 16,
    marginTop: 5,
    height: 50,
    width: deviceWidth - 70,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 8,
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
