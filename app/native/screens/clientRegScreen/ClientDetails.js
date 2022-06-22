import React, {useRef} from 'react';
import {StyleSheet, View, Text, TextInput, Dimensions} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import deviceWidth from '../../../Constants/projectConstants';

export default function ClientDetails(props) {

  const name = props.name;
  const setName = props.setName;
  const contactNumber = props.contactNumber;
  const setContactNumber = props.setContactNumber;
  const actualNumber = props.actualNumber;

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
        <Text style={[styles.clientDetailsText, {color : "#3E506D"}]}>Client Name</Text>
        <TextInput 
          style={styles.clientDetailsTextInput1}
          value={name}
          onChangeText={setName}
         />
        <Text style={[styles.clientDetailsText, {color : "#3E506D"}]}>Client Contact No.</Text>
        <View style={{flexDirection : "row"}}>
          <View style={{flex : 2}}>
          <OTPTextInput
            inputCount={6}
            tintColor="#DCDCDC"
            defaultValue={actualNumber}
            keyboardType={'phone-pad'}
            editable={false}
            textInputStyle={styles.contactNoClientDetails}
            autoFocus={false}
            focus={false}
          />
          </View>
          <View style={{flex : 1.3}}>
          <OTPTextInput
            inputCount={4}
            tintColor="#0078e9"
            keyboardType={'phone-pad'}
            textInputStyle={styles.contactNoClientDetails}
            autoFocus={false}
            handleTextChange={setContactNumber}
          />
          </View>
        </View>
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
    color : "#A6A6A6",
    marginBottom : 10,
  },
  clientDetailsPart2: {
    backgroundColor: '#dbe5f3',
    padding: 20,
    borderRadius: 6,
  },
  clientDetailsTextInput1: {
    padding: 0,
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 0.3,
    color : "#4A4A4A",
    fontFamily : "Nunito-Regular"
  },
  contactNoClientDetails: {
    flex : 1,
    fontSize: 15,
  },
  fourDigTxt: {
    marginTop: 10,
    color: '#768497',
    fontFamily: 'Nunito-Regular',
  },
});
