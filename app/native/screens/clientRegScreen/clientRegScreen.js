import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ClientDetails from './ClientDetails';
import CheckboxAndBtn from './ClientDetailsBottomPart';
import ClientRegCarousel from './clientRegCarousel';
import ClientRegFields from './ClientRegFields';
import {CarouselData} from './dummyDataClientReg/CarouselData';
import deviceWidth from '../../../Constants/projectConstants';

export default function ClientRegScreen() {
  return (
    <ScrollView>
      <View style={styles.eventsCont}>
        <Text style={styles.header}>REGISTER A WALK-IN CLIENT</Text>
        <Text style={styles.carouselHeader}>Select builder</Text>
        <ClientRegCarousel data={CarouselData} />
        <ClientRegFields />
        <ClientDetails />
        <CheckboxAndBtn />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 70,
    textAlign: 'center',
    fontWeight: 'bold',
    //fontFamily: 'Ubuntu-Medium',
  },
  eventsCont: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth,
    backgroundColor: '#f5f8fc',
  },
  carouselHeader: {
    marginTop: 40,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
