import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Dimensions, ScrollView} from 'react-native';
import Dropdown from '../myClientScreen/Dropdown';
import {EventsDropDown} from './dummyDataEvents/EventsDropdown';
import ImageAndCal from './ImageAndCal';
import OtherEventsCards from './OtherEventsCards';
import deviceWidth from '../../../Constants/projectConstants';
import LogoHeader from '../../../helpers/LogoHeader';
import {useDispatch, useSelector} from 'react-redux';
import {addEventData} from '../../../redux-toolkit/slices/eventScreenSlice';
import BottomNavigationTab from '../../../helpers/bottomNavigationTab';

export default function MyEvents() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addEventData());
  }, []);

  let eventData = [];
  eventData = useSelector(state => state.eventScreen.data);

  //console.log(eventData);

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View>
          <LogoHeader
            size={55}
            text="EVENTS"
            isThreeDot={true}
            isBack={true}
            isImage={false}
          />
          <View style={styles.eventItemsView}>
            <Dropdown
              data={EventsDropDown}
              dropDownStyles={{
                width: deviceWidth - 30,
                marginTop: 15,
                backgroundColor: '#EEEEEE',
                borderRadius: 5,
                paddingHorizontal: 8,
                height: 50,
                backgroundColor: '#e7e7e7',
              }}
            />
            <ImageAndCal data={eventData} />
            <OtherEventsCards data={eventData} />
          </View>
        </View>
      </ScrollView>
      <View>
        <BottomNavigationTab />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
  },
  eventItemsView: {
    alignSelf: 'center',
  },
});
