import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import Location from 'react-native-vector-icons/FontAwesome5';
import deviceWidth from '../../../Constants/projectConstants';

export default function OtherEventsCards() {
  return (
    <View style={styles.otherEventsCardCont}>
      <View style={styles.eventsCC1}>
        <View>
          <Text style={styles.eventsCC1HeaderLeft}>M3M - GLOF ESTATE</Text>
        </View>

        <View style={styles.eventsCC1HeaderRight}>
          <Image
            style={styles.rightTickImg}
            source={require('../../assests/rightTick.png')}
          />
          <Text style={styles.goingText}>Going</Text>
        </View>
      </View>
      <View style={styles.eventsCC2}>
        <Text>Lorem ipsum dolor sit amet</Text>
        <View style={styles.eventsCC2Comp}>
          <View>
            <Image source={require('../../assests/calanderImage.png')} />
          </View>
          <View style={styles.eventsCC2Right}>
            <Text>5:00 PM onwards at</Text>
            <Text style={{marginTop: 7}}>Radison Hotel</Text>
            <Text>Ninex Mall, Sohna Road, Gurgaon{'\n'}</Text>
            <Text>
              <Location name="map-marker-alt" />
              {'\t'}View on Map
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  otherEventsCardCont: {
    marginTop: 10,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: deviceWidth - 30,
  },
  eventsCC2: {
    padding: 20,
  },
  eventsCC2Right: {
    marginLeft: 20,
  },
  eventsCC2Comp: {
    flexDirection: 'row',
    marginTop: 15,
  },
  eventsCC1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.4,
    borderBottomColor: 'green',
    padding: 20,
    backgroundColor: '#e7e7e7',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  eventsCC1HeaderLeft: {
    fontWeight: 'bold',
    color: '#000',
  },
  eventsCC1HeaderRight: {
    color: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightTickImg: {
    height: 25,
    width: 25,
    marginRight: 5,
  },
  goingText: {
    fontWeight: 'bold',
    color: 'green',
  },
});
