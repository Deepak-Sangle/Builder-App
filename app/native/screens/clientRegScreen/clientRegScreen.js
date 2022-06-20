import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ClientDetails from './ClientDetails';
import CheckboxAndBtn from './ClientDetailsBottomPart';
import ClientRegCarousel from './clientRegCarousel';
import ClientRegFields from './ClientRegFields';
import deviceWidth from '../../../Constants/projectConstants';
import {useSelector} from 'react-redux';
import LogoHeader from '../../../helpers/LogoHeader';
import BottomNavigationTab from '../../../helpers/bottomNavigationTab';

export default function ClientRegScreen({navigation}) {
  const getDetails = useSelector(state => state);

  return (
    <View style={{flex : 1,}}>
      <ScrollView style={{flex : 1,}}>
        <LogoHeader size={55} text="REGISTER A WALK-IN CLIENT" isThreeDot={true} isBack={true} isImage={false} />
        <View style={styles.eventsCont}>
          <Text style={styles.carouselHeader}>Select builder</Text>
          <ClientRegCarousel data={getDetails.clientRegScreen.carousel} />
          <View style={{marginHorizontal : 20,}}>
            <ClientRegFields
              property={getDetails.clientRegScreen.property}
              project={getDetails.clientRegScreen.project}
              rmD={getDetails.clientRegScreen.rmD}
              />
            <ClientDetails />
            </View>
          <CheckboxAndBtn navigation={navigation} />
        </View>
      </ScrollView>
      <BottomNavigationTab />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
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
    fontFamily: 'Nunito-Bold',
  },
});
