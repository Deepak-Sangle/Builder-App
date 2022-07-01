import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {deviceWidth} from '../../../Constants/projectConstants';
import Plus from 'react-native-vector-icons/AntDesign';
import CustomButtons from '../../../helpers/customButtons';
import Icons from 'react-native-vector-icons/AntDesign';
import jwt_decode from "jwt-decode";
import { token} from '../../../Constants/projectConstants';
import Loader from '../../../helpers/Loader';

export default function ClientDetails({navigation}) {
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const createTeam = () => {

    const payload = {
      fullName,
      phoneNumber,
      status : "ADDED",
      teamId : "",      //TODO - Deepak - 
      userId : user.userId,
      
    }

    navigation.navigate('AlreadyMember');
  };

  useEffect(()=> {
    setUser(jwt_decode(token));
    
  }, []);

  return (
    <View style={styles.teamPackComp}>
      <View style={styles.teamPackPart1}>
        <Text style={styles.createTeamTxt}>CREATE YOUR TEAM</Text>
      </View>
      <View style={styles.teamPackPart2}>
        <View style={styles.countView}>
          <Text style={styles.countText}>01</Text>
        </View>
        <Text style={styles.createTeamTxt2}>Full Name</Text>
        <TextInput onChangeText={setFullName} style={styles.clientDetailsTextInput1} />

        <Text style={styles.createTeamTxt2}>Mobile No.</Text>
        <View style={styles.mobileView}>
          <TextInput
            style={styles.clientDetailsTextInput1}
            keyboardType={'phone-pad'}
            placeholder="Enter mobile number"
            onChangeText={setPhoneNumber}
          />
          <Icons style={styles.icon} name="contacts" color="#0078E9" size={30} />
        </View>

        <View style={styles.checkBoxSection}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color="#0078e9"
            style={styles.chechBx}
          />
          <View style={styles.chchkBxTxtComp}>
            <Text style={styles.checkBoxText}>Make admin</Text>
            <Text style={styles.checkBoxDescText}>
              Admin can see team activity
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.addMemComp}>
        <Plus name="pluscircleo" size={30} color="#0078e9" />
        <View style={styles.addMemTxt}>
          <Text style={styles.addText}>Add another team member</Text>
        </View>
      </View>
      <View style={{marginTop : 20,}}>
        <CustomButtons text="CREATE" isDone={true} pressHandler={createTeam} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  teamPackComp: {
    alignSelf: 'center',
  },
  teamPackPart1: {
    marginTop: 40,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamPackPart2: {
    backgroundColor: '#ffffff',
    padding: 20,
    width : deviceWidth - 90,
    borderRadius: 6,
    elevation: 2,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 20,
  },
  countView : {
    backgroundColor : "#0078E9",
    borderRadius : 100,
    alignSelf : "flex-start",
    position : "absolute",
    left : -15,
    top : -15,
  },
  countText : {
    fontFamily : "Nunito-Regular",
    fontSize : 14,
    color : "#FFFFFF",
    margin : 10,
  },
  clientDetailsTextInput1: {
    padding: 0,
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 0.3,
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
    color : "#1E1E1E"

  },
  contactNoClientDetails: {
    width: '7%',
    fontSize: 17,
  },
  icon : {
    position : "absolute",
    right : 0,
  },
  createTeamTxt: {
    fontFamily: 'Nunito-Bold',
    color : "#545454"
  },
  createTeamTxt2 : {
    fontFamily: 'Nunito-Regular',
    color : "#5E5E5E"
  },
  checkBoxSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: '-2%',
  },
  checkBoxText: {
    fontFamily: 'Nunito-Regular',
    color : "#4A4A4A",
  },
  checkBoxDescText: {
    fontFamily: 'Nunito-Regular',
    color : "#C1C1C1",
  },
  chchkBxTxtComp: {
    flexDirection: 'column',
  },
  addMemComp: {
    flexDirection: 'row',
    marginVertical : 20,
  },
  addMemTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  addText: {
    color: '#0078e9',
    fontFamily: 'Nunito-Bold',
  },
});
