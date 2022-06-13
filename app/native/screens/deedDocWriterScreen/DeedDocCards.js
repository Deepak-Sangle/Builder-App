import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import deviceWidth from '../../../Constants/projectConstants';
import Telephone from 'react-native-vector-icons/Foundation';

//green card means verified and white means not verified
export default function DeedDocCards({data}) {
  var isVerCSS;
  var isVerImageCSS;
  var isVerTextCSS;
  var isCircleCSS;
  var isDashedCSS;
  var isNumCSS;
  var isNameCSS;
  var isVerImgLogoCSS;
  var leng = data.length;
  return (
    <View style={styles.deedDocCards}>
      <View style={styles.deedDocPart1}>
        <Text style={styles.deedDocWritters}>{leng} WRITTERS FOUND</Text>
      </View>
      {data.map(item => {
        {
          isVerCSS = item.isVer
            ? styles.deedDocPart2Yes
            : styles.deedDocPart2No;
          isVerImageCSS = item.isVer
            ? styles.deedDocCardImgYes
            : styles.deedDocCardImgNo;
          isVerTextCSS = item.isVer
            ? styles.deedDocCardsTextWhite
            : styles.deedDocCardsTextBlack;
          isCircleCSS = item.isVer
            ? styles.roundCardThingYes
            : styles.roundCardThingNo;
          isDashedCSS = item.isVer
            ? styles.deedDocCardCompYes
            : styles.deedDocCardCompNo;
          isNumCSS = item.isVer ? styles.conCompYes : styles.conCompNo;
          isNameCSS = item.isVer ? styles.nameStylesYes : styles.nameStylesNo;
          isVerImgLogoCSS = item.isVer ? styles.veriPngYes : styles.veriPngNo;
        }
        return (
          <View style={isVerCSS} key={item.key}>
            <View>
              <Image
                style={isVerImageCSS}
                source={{
                  uri: 'https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg',
                }}
              />
              <Image
                style={isVerImgLogoCSS}
                source={require('../../assests/verified.png')}
              />
            </View>
            <View style={styles.deedDocPart22}>
              <View>
                <Text style={isNameCSS}>{item.name}</Text>
                <Text style={isVerTextCSS}>{item.job}</Text>
                <Text style={isVerTextCSS}>{item.exp}</Text>
              </View>
              <View style={isDashedCSS}>
                <Telephone name="telephone" size={15} style={isCircleCSS} />
                <Text style={isNumCSS}>{item.contact}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  deedDocPart1: {
    padding: 15,
    marginTop: 20,
  },
  deedDocWritters: {
    fontFamily: 'Nunito-SemiBold',
  },
  deedDocPart2No: {
    backgroundColor: '#fff',
    padding: 20,
    width: deviceWidth - 30,
    borderRadius: 10,
    margin: 15,
    marginTop: 5,
    flexDirection: 'row',
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  deedDocPart2Yes: {
    backgroundColor: '#429b38',
    padding: 20,
    width: deviceWidth - 30,
    borderRadius: 10,
    margin: 15,
    marginTop: 5,
    flexDirection: 'row',
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  contactNoClientDetails: {
    width: '7%',
    fontSize: 17,
  },
  deedDocPart22: {
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  deedDocCardImgNo: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderColor: '#f4f4f4',
    borderWidth: 8,
    resizeMode: 'contain',
  },
  deedDocCardImgYes: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderColor: '#55ba4a',
    borderWidth: 8,
    resizeMode: 'contain',
  },
  conCompYes: {
    marginLeft: 7,
    fontSize: 15,
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
  },
  conCompNo: {
    marginLeft: 7,
    fontSize: 15,
    color: '#000',
    fontFamily: 'Nunito-SemiBold',
  },
  deedDocCardCompYes: {
    borderTopWidth: 1,
    flexDirection: 'row',
    width: '100%',
    paddingTop: 10,
    paddingLeft: 4,
    marginTop: 15,
    borderStyle: 'dashed',
    borderColor: '#ffffff',
  },
  deedDocCardCompNo: {
    borderTopWidth: 1,
    flexDirection: 'row',
    width: '100%',
    paddingTop: 10,
    paddingLeft: 4,
    marginTop: 15,
    borderStyle: 'dashed',
    borderColor: '#000',
  },
  deedDocCardsTextWhite: {
    color: '#ffffff',
    fontFamily: 'Nunito-Regular',
  },
  deedDocCardsTextBlack: {
    color: '#000',
    fontFamily: 'Nunito-Regular',
  },
  roundCardThingYes: {
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#ffffff',
    padding: 5,
    paddingRight: 7,
    paddingLeft: 7,
    textAlign: 'center',
    color: '#ffffff',
  },
  roundCardThingNo: {
    borderRadius: 100,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#0078e9',
    padding: 5,
    paddingRight: 7,
    paddingLeft: 7,
    textAlign: 'center',
    color: '#0078e9',
  },
  nameStylesYes: {
    color: '#ffffff',
    fontFamily: 'Nunito-Bold',
  },
  nameStylesNo: {
    color: '#000',
    fontFamily: 'Nunito-Bold',
  },
  veriPngYes: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: 50,
    zIndex: 3,
    marginTop: -30,
  },
  veriPngNo: {
    display: 'none',
  },
});
