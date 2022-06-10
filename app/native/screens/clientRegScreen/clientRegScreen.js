import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ClientDetails from './ClientDetails';
import CheckboxAndBtn from './ClientDetailsBottomPart';
import ClientRegCarousel from './clientRegCarousel';
import ClientRegFields from './ClientRegFields';
import deviceWidth from '../../../Constants/projectConstants';
import {useSelector} from 'react-redux';

export default function ClientRegScreen() {
  const getDetails = useSelector(state => state);

  return (
    <ScrollView>
      <View style={styles.eventsCont}>
        <Text style={styles.header}>REGISTER A WALK-IN CLIENT</Text>
        <Text style={styles.carouselHeader}>Select builder</Text>
        <ClientRegCarousel data={getDetails.clientRegScreen.carousel} />
        <ClientRegFields
          property={getDetails.clientRegScreen.property}
          project={getDetails.clientRegScreen.project}
          rmD={getDetails.clientRegScreen.rmD}
        />
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
