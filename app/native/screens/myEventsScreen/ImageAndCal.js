import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';
import Location from 'react-native-vector-icons/FontAwesome5';
import deviceWidth from '../../../Constants/projectConstants';

export default function ImageAndCal() {
  return (
    <View style={styles.imageAndCalCont}>
      <View style={styles.eventImg}>
        <Image
          style={styles.imageComp}
          source={{
            uri: 'https://st2.depositphotos.com/1494778/9997/v/950/depositphotos_99971414-stock-illustration-grand-opening-invitation-card-with.jpg',
          }}
        />
      </View>
      <View style={styles.cc2}>
        <Text style={styles.cc2Header}>Elegant Ornament</Text>
        <Text style={styles.cc2Content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          rcitationem ipsa.
        </Text>
        <View style={styles.cc22}>
          <View>
            <Image source={require('../../assests/calanderImage.png')} />
          </View>
          <View style={styles.cc22Right}>
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
      <View style={styles.cc3}>
        <Text style={styles.accept}>Accept</Text>
        <Text style={styles.reject}>Reject</Text>
        <Text style={styles.notSure}>Not sure</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageAndCalCont: {
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
  eventImg: {
    resizeMode: 'cover',
    height: 500,
  },
  imageComp: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cc2: {
    padding: 15,
  },
  cc2Header: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  cc2Content: {
    color: '#000',
    marginTop: 7,
    fontSize: 12,
  },
  cc22: {
    flexDirection: 'row',
    marginTop: 20,
  },
  cc22Right: {
    marginLeft: 20,
  },
  cc3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.7,
    marginBottom: 10,
    marginTop: 10,
    borderColor: '#d2d2d2',
  },
  accept: {
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    color: '#44c345',
    borderRadius: 5,
    borderColor: '#58c465',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
  },
  reject: {
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    color: '#dd3e26',
    borderRadius: 5,
    borderColor: '#ca4e3b',
    fontWeight: 'bold',
    marginTop: 10,
  },
  notSure: {
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    color: '#4a4a4a',
    borderRadius: 5,
    borderColor: '#d9d9d9',
    fontWeight: 'bold',
    marginTop: 10,
    marginRight: 20,
  },
});
