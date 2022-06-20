import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

export default function FavProj() {
  return <Text style={styles.favProj}>No Favourite Project as of now</Text>;
}

const styles = StyleSheet.create({
  favProj: {
    alignSelf: 'center',
    marginTop: '50%',
    fontFamily: 'Nunito-SemiBold',
  },
});
