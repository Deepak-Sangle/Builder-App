import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import DeedDocCards from './DeedDocCards';
import DropAndSearch from './DropDownsAndSearch';
import {useSelector} from 'react-redux';

export default function DeedDocScreen() {
  const getDetails = useSelector(state => state);

  return (
    <ScrollView>
      <View>
        <Text style={styles.header}>DEED/DOCUMENTS WRITTERS</Text>
      </View>
      <DropAndSearch
        loc={getDetails.deedDocScreen.locData}
        cards={getDetails.deedDocScreen.allCatData}
      />
      <DeedDocCards data={getDetails.deedDocScreen.deedDocCards} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 70,
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
  },
});
