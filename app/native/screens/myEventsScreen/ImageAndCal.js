import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Location from 'react-native-vector-icons/FontAwesome5';
import deviceWidth from '../../../Constants/projectConstants';

export default function ImageAndCal({data}) {
  return (
    <View>
      {data.map(item => {
        const uri = item.eventInviteDoc;
        const time = item.eventTime.startTime.substring(11, 16);
        const date = item.eventTime.startTime.substring(0, 10);
        const ddmmyyFormat =
          date.substring(8, 10) +
          date.substring(4, 7) +
          '-' +
          date.substring(0, 4);

        return (
          <View style={styles.imageAndCalCont} key={item.eventId}>
            <View style={styles.eventImg}>
              <Image
                style={styles.imageComp}
                source={{
                  uri,
                }}
              />
            </View>
            <View style={styles.cc2}>
              <Text style={styles.cc2Header}>{item.title}</Text>
              <Text style={styles.cc2Content}>{item.description}</Text>
              <View style={styles.cc22}>
                <View>
                  <Image source={require('../../assests/calanderImage.png')} />
                </View>
                <View style={styles.cc22Right}>
                  <Text style={styles.cc22Text}>
                    {time} onwards on {ddmmyyFormat} at
                  </Text>
                  <Text style={styles.cc22HotelText}>
                    {item.venue.address}
                    {'\n'}
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.cc22Text}>
                      <Location name="map-marker-alt" />
                      {'\t'}View on Map
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.cc3}>
              <TouchableOpacity>
                <Text style={styles.accept}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.reject}>Reject</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.notSure}>Not sure</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
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
    marginBottom: 10,
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
    fontFamily: 'Nunito-Bold',
    color: '#000',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  cc2Content: {
    color: '#000',
    marginTop: 7,
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
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
    fontFamily: 'Nunito-Bold',
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

    marginTop: 10,
    fontFamily: 'Nunito-Bold',
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
    fontFamily: 'Nunito-Bold',
    marginTop: 10,
    marginRight: 20,
  },
  cc22Text: {
    fontFamily: 'Nunito-Regular',
  },
  cc22HotelText: {
    marginTop: 7,
    fontFamily: 'Nunito-Regular',
  },
});
