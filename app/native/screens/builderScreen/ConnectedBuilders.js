import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

export default function ConnectedBuilders() {
  return (
    <Text style={styles.connBuilder}>No Connected Builders as of now</Text>
  );
}

const styles = StyleSheet.create({
  connBuilder: {
    alignSelf: 'center',
    marginTop: '50%',
    fontFamily: 'Nunito-SemiBold',
  },
});
