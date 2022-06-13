import React, {useRef} from 'react';
import {StyleSheet, View, Text, TextInput, Dimensions} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import deviceWidth from '../../../Constants/projectConstants';

export default function ClientDetails() {
  const otpInput = useRef('');
  const setText = e => {
    otpInput.current.setValue(e);
  };
  return (
    <View>
      <View style={styles.clientDetailsPart1}>
        <Text style={styles.clientDetailsText}>CLIENT DETAILS</Text>
      </View>
      <View style={styles.clientDetailsPart2}>
        <Text style={styles.clientDetailsText}>Client Name</Text>
        <TextInput style={styles.clientDetailsTextInput1} />
        <Text style={styles.clientDetailsText}>Client Contact No.</Text>
        <OTPTextInput
          inputCount={10}
          tintColor="#0078e9"
          keyboardType={'phone-pad'}
          textInputStyle={styles.contactNoClientDetails}
          autoFocus={false}
        />
        <Text style={styles.fourDigTxt}>
          Provide last 4 digits for confirmation later
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  clientDetailsPart1: {
    marginTop: 20,
    marginBottom: 8,
  },
  clientDetailsText: {
    fontFamily: 'Nunito-Bold',
  },
  clientDetailsPart2: {
    backgroundColor: '#dbe5f3',
    padding: 20,
    width: deviceWidth - 30,
    borderRadius: 10,
  },
  clientDetailsTextInput1: {
    padding: 0,
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 0.3,
    fontSize: 17,
  },
  contactNoClientDetails: {
    width: '7%',
    fontSize: 17,
  },
  fourDigTxt: {
    marginTop: 10,
    color: '#768497',
    fontFamily: 'Nunito-Regular',
  },
});
