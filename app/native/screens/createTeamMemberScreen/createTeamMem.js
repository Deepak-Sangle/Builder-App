import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LogoHeader from '../../../helpers/LogoHeader';
import BottomNavigationTab from '../../../helpers/bottomNavigationTab';
import MemberCard from './MemberCard';
import {deviceWidth} from '../../../Constants/projectConstants';

export default function CreateTeamMem() {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.clientsCont}>
          <LogoHeader
            size={55}
            text="EDIT KUNAL SARIN"
            isThreeDot={true}
            isBack={true}
            isImage={false}
          />
        </View>
        <MemberCard />
        <TouchableOpacity style={styles.removeMemView}>
           <Text style={styles.removeMem}>Remove from Team</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomNavigationTab />
    </View>
  );
}

const styles = StyleSheet.create({
  removeMem: {
    alignSelf: 'center',
    fontFamily: 'Nunito-Regular',
    color: '#b21313',
    textDecorationLine: 'underline',
  },
  removeMemView: {
    backgroundColor: '#f8eeee',
    padding: 30,
    width: deviceWidth,
    marginTop:'10%'
  },
});
