import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import BottomNavigationTab from '../../../helpers/bottomNavigationTab';
import SorryAlreadyMember from './sorryAlreadyMem';
import CustomButtons from '../../../helpers/customButtons';

export default function AlreadyMember({navigation}) {

  const teampage = ()=> {
    navigation.navigate('TeamDashboardView');
  }

  return (
    <View style={{flex : 1}}>
      <ScrollView style={{flex : 1}}>
        <SorryAlreadyMember navigation={navigation} />
      </ScrollView>
      <View style={{margin : 40, marginTop : 100}}>
        <CustomButtons text="BACK TO TEAM PAGE" isDone={true} pressHandler={teampage} />
      </View>
      <BottomNavigationTab />
    </View>
  );
}

const styles = StyleSheet.create({});
