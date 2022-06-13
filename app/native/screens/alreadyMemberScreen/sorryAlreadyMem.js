import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import deviceWidth from '../../../Constants/projectConstants';
import {useSelector, useDispatch} from 'react-redux';
//import {updateCompany,updateName} from "../../../redux-toolkit/reducers/sampleReducer";

export default function SorryAlreadyMember() {
  const getDetails = useSelector(state => state);
  // const dispatch = useDispatch();
  // const changeName = (name) => {
  //     dispatch(updateName(name)); //here updateName is the action type and the argument ie name here will become the payload
  // }
  // const changeAge = (age) => {
  //    dispatch(updateAge(age));
  // };
  //console.log(getDetails.nameCompany.name);
  return (
    <View>
      <View style={styles.alreadyMemCont}>
        <View>
          <Text style={styles.sorryTxt}>Sorry!</Text>
        </View>
        <View style={styles.fellowTextCont}>
          <Text style={styles.fellowTextName}>
            {getDetails.alreadyMemScreen.name}
          </Text>
          <Text style={styles.fellowText}>
            is already associated with company
          </Text>
          <Text style={styles.fellowTextName}>
            {' '}
            {getDetails.alreadyMemScreen.company}
          </Text>
        </View>
      </View>
      <View style={styles.part2ContentComp}>
        <Text style={styles.contentTxt}>Please contact admin of</Text>
        <Text style={styles.contentTxt}>
          {' '}
          {getDetails.alreadyMemScreen.company} to be a part of{' '}
        </Text>
        <Text style={styles.contentTxt}>its team</Text>
      </View>
      <View style={styles.backBtn}>
        <Text style={styles.backToTeamBtn}>Back to Team Page</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alreadyMemCont: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c64343',
    paddingTop: 70,
  },
  sorryTxt: {
    fontFamily: 'Nunito-Bold',
    color: '#ffffff',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  fellowText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Regular',
  },
  fellowTextName: {
    color: '#ffffff',
    fontFamily: 'Nunito-Bold',
  },
  fellowTextCont: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 40,
  },
  part2ContentComp: {
    marginTop: '12%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtn: {
    alignSelf: 'center',
    marginTop: '60%',
  },
  backToTeamBtn: {
    borderWidth: 1,
    padding: 15,
    textAlign: 'center',
    backgroundColor: '#0078e9',
    color: '#fff',
    borderRadius: 5,
    borderColor: '#0078e9',
    fontFamily: 'Nunito-Bold',
    width: deviceWidth - 30,
    textTransform: 'uppercase',
  },
  contentTxt: {
    fontFamily: 'Nunito-Regular',
  },
});
