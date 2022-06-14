import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import deviceWidth from '../../../Constants/projectConstants';
import BottomNavigationTab from '../../../helpers/bottomNavigationTab';
import CreateTeamForm from './createTeamForm';
import TeamPackHeader from './teamPackHeader';

export default function TeamPack({navigation}) {
  return (
    <View style={{flex : 1}}>
      <ScrollView style={{flex : 1}}>
        <TeamPackHeader />
        <CreateTeamForm navigation={navigation} />
      </ScrollView>
      <BottomNavigationTab />
    </View>
  );
}

const styles = StyleSheet.create({});
