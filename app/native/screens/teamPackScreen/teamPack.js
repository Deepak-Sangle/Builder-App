import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
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
