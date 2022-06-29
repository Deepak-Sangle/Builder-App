import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import UpcomingCard from './upcomingCard';
import {deviceWidth} from '../../../Constants/projectConstants';

export default function UpcmoingVisitSection({clientData}) {
  const leng = clientData.length;
  return (
    <View>
      <View style={styles.visitCont}>
        <Text style={styles.txt1}>UPCOMING VISIT</Text>
        <Text style={styles.txt2}>View all {leng}</Text>
      </View>
      {clientData.map(item => {
        return (
          <View key={item.key}>
            <UpcomingCard data={item} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  visitCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    width: deviceWidth,
  },
  txt1: {
    color: '#429b38',
    marginLeft: '5%',
    fontFamily: 'Nunito-Bold',
  },
  txt2: {
    color: '#0078e9',
    marginRight: '5%',
    fontFamily: 'Nunito-Bold',
  },
});
