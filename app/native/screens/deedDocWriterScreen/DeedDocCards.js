import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import deviceWidth from '../../../Constants/projectConstants';

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
                <Text style={isCircleCSS}>hey</Text>
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
    fontWeight: 'bold',
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
  },
  conCompNo: {
    marginLeft: 7,
    fontSize: 15,
    color: '#000',
  },
  deedDocCardCompYes: {
    borderTopWidth: 1,
    flexDirection: 'row',
    width: '100%',
    paddingTop: 10,
    paddingLeft: 4,
    marginTop: 7,
    borderStyle: 'dashed',
    borderColor: '#ffffff',
  },
  deedDocCardCompNo: {
    borderTopWidth: 1,
    flexDirection: 'row',
    width: '100%',
    paddingTop: 10,
    paddingLeft: 4,
    marginTop: 7,
    borderStyle: 'dashed',
    borderColor: '#000',
  },
  deedDocCardsTextWhite: {
    color: '#ffffff',
  },
  deedDocCardsTextBlack: {
    color: '#000',
  },
  roundCardThingYes: {
    backgroundColor: '#ffffff',
    color: '#ffffff',
    borderRadius: 100,
  },
  roundCardThingNo: {
    backgroundColor: '#0078e9',
    color: '#0078e9',
    borderRadius: 100,
  },
  nameStylesYes: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  nameStylesNo: {
    color: '#000',
    fontWeight: 'bold',
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
