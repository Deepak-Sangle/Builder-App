import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Location from 'react-native-vector-icons/FontAwesome5';
import {deviceWidth} from '../../../Constants/projectConstants';

export default function OtherEventsCards({data}) {
  var statusCss;
  return (
    <View>
      {data.map(item => {
        const time = item.eventTime.startTime.substring(11, 16);
        const date = item.eventTime.startTime.substring(0, 10);
        const ddmmyyFormat =
          date.substring(8, 10) +
          date.substring(4, 7) +
          '-' +
          date.substring(0, 4);

        for (var i = 0; i < item.invitees.length; i++) {
          var status = item.invitees[i].status;
          if (status === 'noReply') {
            statusCss = styles.nthing;

            return (
              <View style={statusCss}>
                <View style={styles.otherEventsCardCont} key={item._id}>
                  <View style={styles.eventsCC1}>
                    <View>
                      <Text style={styles.eventsCC1HeaderLeft}>
                        {item.title}
                      </Text>
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
                    <Text style={styles.cc2Text}>{item.description}</Text>
                    <View style={styles.eventsCC2Comp}>
                      <View>
                        <Image
                          source={require('../../assests/calanderImage.png')}
                        />
                      </View>
                      <View style={styles.eventsCC2Right}>
                        <Text style={styles.cc2Text}>
                          {time} onwards on {ddmmyyFormat} at
                        </Text>
                        <Text style={styles.cc2HotelText}>
                          {item.venue.address} {'\n'}
                        </Text>
                        <TouchableOpacity>
                          <Text style={styles.cc2Text}>
                            <Location name="map-marker-alt" />
                            {'\t'}View on Map
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.qrCardComp}>
                  <View style={styles.eventsCC3}>
                    <View>
                      <Text style={styles.qrTextPart}>
                        Please scan this code when you {'\n'}reach at the venue
                      </Text>
                    </View>
                    <View>
                      <Image
                        style={styles.qrImg}
                        source={require('../../assests/qrCode.png')}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.addComp}>
                  <View style={styles.eventsCC45}>
                    <TouchableOpacity>
                      <Text style={styles.eventsCC45Text}>
                        Add a team member
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.addCompCal}>
                  <View style={styles.eventsCC45}>
                    <TouchableOpacity>
                      <Text style={styles.eventsCC45Text}>
                        Add to your Calander
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          } else if (status === 'accepted') {
            return (
              <>
                <View style={styles.otherEventsCardCont} key={item._id}>
                  <View style={styles.eventsCC1}>
                    <View>
                      <Text style={styles.eventsCC1HeaderLeft}>
                        {item.title}
                      </Text>
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
                    <Text style={styles.cc2Text}>{item.description}</Text>
                    <View style={styles.eventsCC2Comp}>
                      <View>
                        <Image
                          source={require('../../assests/calanderImage.png')}
                        />
                      </View>
                      <View style={styles.eventsCC2Right}>
                        <Text style={styles.cc2Text}>
                          {time} onwards on {ddmmyyFormat} at
                        </Text>
                        <Text style={styles.cc2HotelText}>
                          {item.venue.address} {'\n'}
                        </Text>
                        <TouchableOpacity>
                          <Text style={styles.cc2Text}>
                            <Location name="map-marker-alt" />
                            {'\t'}View on Map
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.qrCardComp}>
                  <View style={styles.eventsCC3}>
                    <View>
                      <Text style={styles.qrTextPart}>
                        Please scan this code when you {'\n'}reach at the venue
                      </Text>
                    </View>
                    <View>
                      <Image
                        style={styles.qrImg}
                        source={require('../../assests/qrCode.png')}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.addComp}>
                  <View style={styles.eventsCC45}>
                    <TouchableOpacity>
                      <Text style={styles.eventsCC45Text}>
                        Add a team member
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.addCompCal}>
                  <View style={styles.eventsCC45}>
                    <TouchableOpacity>
                      <Text style={styles.eventsCC45Text}>
                        Add to your Calander
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            );
          } else if (status === 'rejected') {
            statusCss = styles.nthing;
            const time = item.eventTime.startTime.substring(11, 16);
            const date = item.eventTime.startTime.substring(0, 10);
            const ddmmyyFormat =
              date.substring(8, 10) +
              date.substring(4, 7) +
              '-' +
              date.substring(0, 4);
            return (
              <>
                <View style={styles.otherEventsCardCont} key={item._id}>
                  <View style={styles.eventsCC1}>
                    <View>
                      <Text style={styles.eventsCC1HeaderLeft}>
                        {item.title}
                      </Text>
                    </View>

                    <View style={styles.eventsCC1HeaderRight}>
                      <Image
                        style={styles.rightTickImg}
                        source={require('../../assests/crossIcon.png')}
                      />
                      <Text style={styles.goingText}>Not Going</Text>
                    </View>
                  </View>
                  <View style={styles.eventsCC2}>
                    <Text style={styles.cc2Text}>{item.description}</Text>
                    <View style={styles.eventsCC2Comp}>
                      <View>
                        <Image
                          source={require('../../assests/calanderImage.png')}
                        />
                      </View>
                      <View style={styles.eventsCC2Right}>
                        <Text style={styles.cc2Text}>
                          {time} onwards on {ddmmyyFormat} at
                        </Text>
                        <Text style={styles.cc2HotelText}>
                          {item.venue.address} {'\n'}
                        </Text>
                        <TouchableOpacity>
                          <Text style={styles.cc2Text}>
                            <Location name="map-marker-alt" />
                            {'\t'}View on Map
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.qrCardComp}>
                  <View style={styles.eventsCC3}>
                    <View>
                      <Text style={styles.qrTextPart}>
                        Please scan this code when you {'\n'}reach at the venue
                      </Text>
                    </View>
                    <View>
                      <Image
                        style={styles.qrImg}
                        source={require('../../assests/qrCode.png')}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.addComp}>
                  <View style={styles.eventsCC45}>
                    <TouchableOpacity>
                      <Text style={styles.eventsCC45Text}>
                        Add a team member
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.addCompCal}>
                  <View style={styles.eventsCC45}>
                    <TouchableOpacity>
                      <Text style={styles.eventsCC45Text}>
                        Add to your Calander
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            );
          } else if (status === 'notSure') {
            statusCss = styles.nthing;
            const time = item.eventTime.startTime.substring(11, 16);
            const date = item.eventTime.startTime.substring(0, 10);
            const ddmmyyFormat =
              date.substring(8, 10) +
              date.substring(4, 7) +
              '-' +
              date.substring(0, 4);
            return (
              <>
                <View style={styles.otherEventsCardCont} key={item._id}>
                  <View style={styles.eventsCC1}>
                    <View>
                      <Text style={styles.eventsCC1HeaderLeft}>
                        {item.title}
                      </Text>
                    </View>

                    <View style={styles.eventsCC1HeaderRight}>
                      <Image
                        style={styles.rightTickImg}
                        source={require('../../assests/questionMark.png')}
                      />
                      <Text style={styles.goingText}>Tentative</Text>
                    </View>
                  </View>
                  <View style={styles.eventsCC2}>
                    <Text style={styles.cc2Text}>{item.description}</Text>
                    <View style={styles.eventsCC2Comp}>
                      <View>
                        <Image
                          source={require('../../assests/calanderImage.png')}
                        />
                      </View>
                      <View style={styles.eventsCC2Right}>
                        <Text style={styles.cc2Text}>
                          {time} onwards on {ddmmyyFormat} at
                        </Text>
                        <Text style={styles.cc2HotelText}>
                          {item.venue.address} {'\n'}
                        </Text>
                        <TouchableOpacity>
                          <Text style={styles.cc2Text}>
                            <Location name="map-marker-alt" />
                            {'\t'}View on Map
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.qrCardComp}>
                  <View style={styles.eventsCC3}>
                    <View>
                      <Text style={styles.qrTextPart}>
                        Please scan this code when you {'\n'}reach at the venue
                      </Text>
                    </View>
                    <View>
                      <Image
                        style={styles.qrImg}
                        source={require('../../assests/qrCode.png')}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.addComp}>
                  <View style={styles.eventsCC45}>
                    <TouchableOpacity>
                      <Text style={styles.eventsCC45Text}>
                        Add a team member
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.addCompCal}>
                  <View style={styles.eventsCC45}>
                    <TouchableOpacity>
                      <Text style={styles.eventsCC45Text}>
                        Add to your Calander
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            );
          }
        }
      })}
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
    borderBottomColor: 'gray',
    padding: 20,
    backgroundColor: '#e7e7e7',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  eventsCC1HeaderLeft: {
    fontFamily: 'Nunito-Bold',
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
  nthing: {
    display: 'none',
  },
  goingText: {
    fontFamily: 'Nunito-Bold',
    color: 'green',
  },
  cc2Text: {
    fontFamily: 'Nunito-Regular',
  },
  cc2HotelText: {
    marginTop: 7,
    fontFamily: 'Nunito-Regular',
  },
  qrCardComp: {
    marginTop: 2,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: deviceWidth - 30,
  },
  eventsCC3: {
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  qrImg: {
    height: 100,
    width: 100,
    marginRight: '5%',
    marginTop: 15,
    marginBottom: 15,
  },
  qrTextPart: {
    marginLeft: '5%',
    fontFamily: 'Nunito-Regular',
  },
  addComp: {
    marginTop: 2,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: deviceWidth - 30,
  },
  addCompCal: {
    marginTop: 2,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: deviceWidth - 30,
  },
  eventsCC45: {
    borderRadius: 10,
    padding: 20,
  },
  eventsCC45Text: {
    color: '#0078e9',
    fontFamily: 'Nunito-SemiBold',
  },
});
