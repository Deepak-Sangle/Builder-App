import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import DeedDocCards from './DeedDocCards';
import DropAndSearch from './DropDownsAndSearch';
import {DeedDocCardsData} from './dummyData/CardsData';

export default function DeedDocScreen() {
  return (
    <ScrollView>
      <View>
        <Text style={styles.header}>DEED/DOCUMENTS WRITTERS</Text>
      </View>
      <DropAndSearch />
      <DeedDocCards data={DeedDocCardsData} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 70,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
