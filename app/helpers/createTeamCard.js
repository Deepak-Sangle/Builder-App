import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { Divider } from "react-native-elements/dist/divider/Divider";

const CreateTeamCard = (props) => {
    const backgroundColor = props.backgroundColor;
    
    return (
      <View style={[styles.bottomView, {backgroundColor : backgroundColor}]}>
        <View style={styles.proPlanView}>
          <View style={styles.proView}>
            <Text style={[styles.textStyle, styles.proText]}> PRO </Text>
          </View>
          <Text style={[styles.textStyle, styles.addText]}>
            Add team members to any of the plan
          </Text>
          <Text style={[styles.textStyle, styles.priceText]}>
            Rs. 2399/<Text style={styles.peryearText}>year/member</Text>
          </Text>
        </View>
        <Divider />
        <View style={styles.descriptionView}>
          <View style={styles.bulletView}>
            <Text style={styles.textStyle}>- </Text>
            <Text style={styles.textStyle}>
              Your team members can access all builders you have access to.
            </Text>
          </View>

          <View style={styles.bulletView}>
            <Text style={styles.textStyle}>- </Text>
            <Text style={styles.textStyle}>
              Track your team’s site visits, registrations and bookings.
            </Text>
          </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Nunito-Regular',
    color: '#4A4A4A',
    letterSpacing: 0.5,
    fontSize: 12,
  },
  bottomView: {
    padding: 40,
    paddingBottom: 20,
  },
  proPlanView: {
    marginBottom: 20,
  },
  proView: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  proText: {
    padding: 3,
    fontFamily: 'Nunito-Bold',
    backgroundColor: '#F5E350',
    fontSize: 8,
    borderRadius: 6,
  },
  addText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  priceText: {
    marginVertical: 5,
    color: '#3E506D',
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
  },
  peryearText: {
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
  },
  descriptionView: {
    marginVertical: 10,
  },
  bulletView: {
    flexDirection: 'row',
    marginTop: 15,
  },
});

export default CreateTeamCard;
