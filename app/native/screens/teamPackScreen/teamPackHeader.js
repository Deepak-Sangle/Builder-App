import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LogoHeader from '../../../helpers/LogoHeader';

export default function TeamPackHeader() {
  return (
    <View style={styles.teamPackHeader}>
      <LogoHeader textColor="#FFFFFF" size={55} text="CONGRATULATIONS" isThreeDot={true} isBack={true} isImage={false} />

      <View style={styles.fellowTextCont}>
        <Text style={styles.fellowText}>
          Your payment was successful. You can now start adding your team members and share all your builders access.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  teamPackHeader: {
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#429b38',
    // paddingTop: 70,
  },
  congoText: {
    fontFamily: 'Nunito-Bold',
    color: '#ffffff',
    fontSize: 15,
  },
  fellowText: {
    color: '#ffffff',
    marginHorizontal : 60,
    textAlign : "center",
    fontFamily: 'Nunito-Regular',
  },
  fellowTextCont: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 40,
  },
});
