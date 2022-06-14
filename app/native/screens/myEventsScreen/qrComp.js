import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import deviceWidth from '../../../Constants/projectConstants';

export default function QRComp() {
  return (
    <View style={styles.qrCardComp}>
      <View style={styles.eventsCC3}>
        <View>
          <Text style={{marginLeft: 15}}>
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
  );
}

const styles = StyleSheet.create({
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
});
