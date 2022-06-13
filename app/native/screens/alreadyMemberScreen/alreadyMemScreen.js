import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import deviceWidth from '../../../Constants/projectConstants';
import SorryAlreadyMember from './sorryAlreadyMem';

export default function AlreadyMember({navigation}) {
  return (
    <ScrollView>
      <SorryAlreadyMember navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
