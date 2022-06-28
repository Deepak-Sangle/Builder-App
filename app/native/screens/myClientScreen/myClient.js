import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ClientCard from './ClientCard';
import SearchAndDropDown from './SearchAndDropDown';
import UpcomingVisits from './upcomingVisits';
import {deviceWidth} from '../../../Constants/projectConstants';
import {useSelector} from 'react-redux';
import LogoHeader from '../../../helpers/LogoHeader';
import BottomNavigationTab from '../../../helpers/bottomNavigationTab';

export default function MyClient({navigation}) {
  const getDetails = useSelector(state => state);
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.clientsCont}>
          <LogoHeader
            size={55}
            text="MY CLIENTS"
            isThreeDot={true}
            isBack={true}
            isImage={false}
          />
          <View style={styles.cont}>
            <Text style={styles.btn1}>SCHEDULE CLIENT VISIT</Text>
            <TouchableOpacity
              style={{marginHorizontal: 20}}
              activeOpacity={0.7}
              onPressOut={() => navigation.navigate('ClientRegScreen')}>
              <Text style={styles.btn2}>WALK-IN</Text>
            </TouchableOpacity>
          </View>
          <UpcomingVisits
            clientData={getDetails.myClientScreen.upcomingClients}
          />
          <SearchAndDropDown data={getDetails.myClientScreen.dropDown} />

          {getDetails.myClientScreen.client.map(item => {
            //const regStatus = item.status.reg == null;
            return (
              <View key={item.key}>
                <ClientCard data={item} />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View>
        <BottomNavigationTab />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  clientsCont: {
    marginTop: 0,
    backgroundColor: '#f5f8fc',
  },
  cont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    width: deviceWidth,
  },
  btn1: {
    borderWidth: 1,
    marginLeft: 20,
    padding: 15,
    textAlign: 'center',
    backgroundColor: '#0078e9',
    color: '#fff',
    borderRadius: 10,
    borderColor: '#0078e9',
    fontFamily: 'Nunito-Bold',
    width: '61%',
  },

  btn2: {
    borderWidth: 1,
    padding: 15,
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#0078e9',
    borderColor: '#0078e9',
    borderRadius: 10,
    marginRight: '2%',
    fontFamily: 'Nunito-Bold',
  },
  header: {
    marginTop: 30,
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: 15,
  },
});
