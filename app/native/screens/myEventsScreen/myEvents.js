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

export default function MyEvents() {
  return (
    <ScrollView>
      <View style={styles.eventsCont}>
        <Text style={styles.header}>EVENTS</Text>
        <View>
          <Dropdown
            data={EventsDropDown}
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
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  },
  eventsCont: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: deviceWidth,
  },
});
