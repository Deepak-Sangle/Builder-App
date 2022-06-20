import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import DeedDocCards from './DeedDocCards';
import DropAndSearch from './DropDownsAndSearch';
import {useSelector} from 'react-redux';
import LogoHeader from '../../../helpers/LogoHeader';
import BottomNavigationTab from '../../../helpers/bottomNavigationTab';

export default function DeedDocScreen() {
  const getDetails = useSelector(state => state);

  return (
    <View style={{flex : 1,}}>
      <ScrollView style={{flex : 1,}}>
        <LogoHeader size={55} text="DEED/DOCUMENTS WRITTERS" isThreeDot={true} isBack={true} isImage={false} />
        <DropAndSearch
          loc={getDetails.deedDocScreen.locData}
          cards={getDetails.deedDocScreen.allCatData}
        />
        <DeedDocCards data={getDetails.deedDocScreen.deedDocCards} />
      </ScrollView>
      <View>
        <BottomNavigationTab />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 70,
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
  },
});
