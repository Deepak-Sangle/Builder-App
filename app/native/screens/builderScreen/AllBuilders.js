import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import deviceWidth from '../../../Constants/projectConstants';

export default function AllBuilders({data}) {
  //var isConnCss;

  return (
    <View style={styles.outsideView}>
      {data.map(item => {
        //isConnCss = item.isConn ? styles.connYes : styles.connNo;
        return (
          <View key={item.id} style={styles.insideView}>
            <Image source={{uri: item.logo}} style={styles.logoImg} />
            <Text style={styles.builderName}>{item.name}</Text>
            <Text style={styles.basedOutOf}>Based in {item.address}</Text>
            {/* <Text style={styles.projStyles}>({item.proj} PROJECTS)</Text> */}
            {/* <Text style={isConnCss}>CONNECTED</Text> */}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  outsideView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  insideView: {
    margin: 1,
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingBottom: 15,
    paddingTop: 15,
  },
  logoImg: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  builderName: {
    alignSelf: 'center',
    fontFamily: 'Nunito-Bold',
    color: '#a6a6a6',
    fontSize: 16,
  },
  basedOutOf: {
    alignSelf: 'center',
    fontFamily: 'Nunito-Regular',
    color: '#a6a6a6',
    fontSize: 13,
  },
  connNo: {
    display: 'none',
  },
  connYes: {
    alignSelf: 'center',
    color: '#429b38',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#c4ecc0',
    borderColor: '#c4ecc0',
    marginTop: 7,
    fontFamily: 'Nunito-SemiBold',
  },
});
