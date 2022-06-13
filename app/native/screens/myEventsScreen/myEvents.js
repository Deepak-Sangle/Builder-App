import React from 'react';
import {StyleSheet, View, Text, Dimensions, ScrollView} from 'react-native';
import Dropdown from '../myClientScreen/Dropdown';
import AddCalanderComp from './addCalander';
import AddTeamMemberComp from './addMembers';
import {EventsDropDown} from './dummyDataEvents/EventsDropdown';
import ImageAndCal from './ImageAndCal';
import OtherEventsCards from './OtherEventsCards';
import QRComp from './qrComp';
import deviceWidth from '../../../Constants/projectConstants';
import {useSelector} from 'react-redux';

export default function MyEvents() {
  const getDetails = useSelector(state => state);
  return (
    <ScrollView>
      <View style={styles.eventsCont}>
        <Text style={styles.header}>EVENTS</Text>
        <View>
          <Dropdown
            data={getDetails.eventScreen.events}
            dropDownStyles={{
              width: deviceWidth - 30,
              marginTop: 15,
              backgroundColor: '#EEEEEE',
              borderRadius: 5,
              paddingHorizontal: 8,
              height: 50,
            }}
          />
        </View>

        <ImageAndCal />
        <OtherEventsCards />
        <QRComp />
        <AddTeamMemberComp />
        <AddCalanderComp />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
  },
  eventsCont: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: deviceWidth,
  },
});
