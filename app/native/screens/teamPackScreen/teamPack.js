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
import CreateTeamForm from './createTeamForm';
import TeamPackHeader from './teamPackHeader';

export default function TeamPack() {
  return (
    <ScrollView>
      <TeamPackHeader />
      <CreateTeamForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
