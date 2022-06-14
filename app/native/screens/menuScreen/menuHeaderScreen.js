import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import Cross from 'react-native-vector-icons/Entypo';
import Location from 'react-native-vector-icons/FontAwesome5';
import deviceWidth from '../../../Constants/projectConstants';
import {useSelector} from 'react-redux';

export default function MenuHeaderScreen({navigation}) {
  const getDetails = useSelector(state => state);

  const goBack = ()=> {
    navigation.goBack();
  }
  return (
    <View style={styles.menuHeader}>
      <TouchableOpacity activeOpacity={0.5} onPressOut={goBack} style={styles.menuHeaderPart1}>
        <Cross name="cross" size={30} />
      </TouchableOpacity>
      <View style={styles.menuHeaderPart2}>
        <View>
          <Image
            style={styles.menuHeaderImage}
            source={{
              uri: 'https://png.pngitem.com/pimgs/s/151-1517966_transparent-cricket-bat-clipart-ms-dhoni-spartan-bat.png',
            }}
          />
        </View>
        <View style={styles.menuHeaderPart22}>
          <Text style={styles.textMenu}>Welcome</Text>
          <Text style={styles.textMenu}>
            {getDetails.menuScreen.name}
            {'\n'}
          </Text>
          <TouchableOpacity activeOpacity={0.7} onPressOut={()=> navigation.navigate('ManageAccount')}><Text>Manage your account</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.menuHeaderPart3}>
        <View style={styles.locIcon}>
          <Location name="map-marker-alt" />
        </View>
        <Text style={styles.locText}>{getDetails.menuScreen.location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuHeader: {
    width: deviceWidth - 30,
    marginTop: 40,
    marginBottom: 25,
  },
  menuHeaderPart1: {
    alignItems: 'flex-end',
  },
  menuHeaderPart2: {
    flexDirection: 'row',
    padding: 15,
  },
  menuHeaderImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    resizeMode: 'contain',
  },
  menuHeaderPart22: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: '7%',
  },
  menuHeaderPart3: {
    marginLeft: '5%',
    backgroundColor: '#fff',
    fontWeight: 'bold',
    borderRadius: 20,
    flexDirection: 'row',
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: 'flex-start',
  },
  locIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  locText: {
    marginLeft: 7,
    fontFamily: 'Nunito-Bold',
    marginRight: 10,
  },
  textMenu: {
    fontFamily: 'Nunito-Bold',
  },
  textMenuName: {
    fontFamily: 'Nunito-SemiBold',
  },
  mangAcc: {
    fontFamily: 'Nunito-Regular',
  },
});
