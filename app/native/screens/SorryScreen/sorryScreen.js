import React from 'react';
import {StyleSheet, View, Text, Dimensions, ScrollView} from 'react-native';
import deviceWidth from '../../../Constants/projectConstants';

export default function SorryScreen() {
  return (
    <ScrollView>
      <View style={styles.sorryScreenCont}>
        <View style={styles.sorryScreenPart1}>
          <Text style={styles.sorryText}>Sorry!</Text>
          <Text style={styles.noResultText}>No results found</Text>
        </View>
        <View style={styles.sorryScreenPart2}>
          <Text style={styles.backBtnSorryScreen}>BACK</Text>
          <Text style={styles.goToHome}>Go to home</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sorryScreenCont: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '23%',
    width: deviceWidth,
  },
  sorryScreenPart1: {
    alignItems: 'center',
  },
  sorryScreenPart2: {
    marginTop: '70%',
  },
  sorryText: {
    fontSize: 25,
    fontFamily: 'Nunito-SemiBold',
  },
  noResultText: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'Nunito-Regular',
  },
  backBtnSorryScreen: {
    borderWidth: 1,
    padding: 15,
    backgroundColor: '#0078e9',
    color: '#fff',
    borderRadius: 10,
    borderColor: '#0078e9',
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
    paddingLeft: 130,
    paddingRight: 130,
  },
  goToHome: {
    textAlign: 'center',
    marginTop: 30,
    fontFamily: 'Nunito-Regular',
  },
});
