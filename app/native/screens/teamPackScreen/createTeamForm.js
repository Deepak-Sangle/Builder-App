import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Checkbox} from 'react-native-paper';
import deviceWidth from '../../../Constants/projectConstants';
import Plus from 'react-native-vector-icons/AntDesign';

export default function ClientDetails() {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.teamPackComp}>
      <View style={styles.teamPackPart1}>
        <Text style={styles.createTeamTxt}>CREATE YOUR TEAM</Text>
      </View>
      <View style={styles.teamPackPart2}>
        <Text style={styles.createTeamTxt}>Full Name</Text>
        <TextInput style={styles.clientDetailsTextInput1} />

        <Text style={styles.createTeamTxt}>Mobile No.</Text>
        <TextInput
          style={styles.clientDetailsTextInput1}
          keyboardType={'phone-pad'}
          placeholder="Enter mobile number"
        />

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
      <View style={styles.createBtnComp}>
        <Text style={styles.createBtn}>CREATE</Text>
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
    width: deviceWidth - 40,
    borderRadius: 10,
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 20,
  },
  clientDetailsTextInput1: {
    padding: 0,
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 0.3,
    fontSize: 14,
  },
  contactNoClientDetails: {
    width: '7%',
    fontSize: 17,
  },
  createTeamTxt: {
    fontFamily: 'Nunito-Bold',
  },
  checkBoxSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: '-2%',
  },
  checkBoxText: {
    fontFamily: 'Nunito-SemiBold',
  },
  checkBoxDescText: {
    fontFamily: 'Nunito-Regular',
  },
  chchkBxTxtComp: {
    flexDirection: 'column',
  },
  addMemComp: {
    flexDirection: 'row',
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
  createBtnComp: {
    marginTop: 50,
    marginBottom: 40,
  },
  createBtn: {
    borderWidth: 1,
    padding: 15,
    backgroundColor: '#0078e9',
    color: '#fff',
    borderRadius: 5,
    borderColor: '#0078e9',
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
  },
});
