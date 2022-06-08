import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import deviceWidth from '../../../Constants/projectConstants';
import SorryAlreadyMember from './sorryAlreadyMem';

export default function AlreadyMember() {
  return (
    <ScrollView>
      <SorryAlreadyMember name="RakeshKumar" company="Asset Advisor India" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
