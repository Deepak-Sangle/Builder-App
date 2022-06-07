import React from 'react';
import {StyleSheet, View, Text, Dimensions, ScrollView} from 'react-native';
import ClientCard from './ClientCard';
import SearchAndDropDown from './SearchAndDropDown';
import UpcomingVisits from './upcomingVisits';
import {ClientData} from './dummyData/ClientData';
import deviceWidth from '../../../Constants/projectConstants';

export default function MyClient() {
  return (
    <ScrollView>
      <View style={styles.clientsCont}>
        <Text style={styles.header}>MY CLIENTS</Text>
        <View style={styles.cont}>
          <Text style={styles.btn1}>SCHEDULE CLIENT VISIT</Text>
          <Text style={styles.btn2}>WALK-IN</Text>
        </View>
        <UpcomingVisits />
        <SearchAndDropDown />

        {ClientData.map(item => {
          //const regStatus = item.status.reg == null;
          return (
            <View key={item.key}>
              <ClientCard data={item} />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  clientsCont: {
    marginTop: 40, //for the back n sidebar btn
    backgroundColor: '#f5f8fc',
  },
  cont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    width: deviceWidth,
  },
  btn1: {
    borderWidth: 1,
    marginLeft: '2%',
    padding: 15,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: '#0078e9',
    color: '#fff',
    borderRadius: 10,
    borderColor: '#0078e9',
    fontWeight: 'bold',
  },

  btn2: {
    borderWidth: 1,
    paddingLeft: 40,
    paddingRight: 40,
    padding: 15,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    color: '#0078e9',
    borderColor: '#0078e9',
    borderRadius: 10,
    marginRight: '2%',
  },
  header: {
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  },
});
