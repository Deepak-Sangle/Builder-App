import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function TeamPackHeader() {
  return (
    <View style={styles.teamPackHeader}>
      <View>
        <Text style={styles.congoText}>CONGRATULATIONS</Text>
      </View>
      <View style={styles.fellowTextCont}>
        <Text style={styles.fellowText}>
          Your payment was successful. You can now start{' '}
        </Text>
        <Text style={styles.fellowText}>
          adding your team members and share all your
        </Text>
        <Text style={styles.fellowText}> builders access.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  teamPackHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#429b38',
    paddingTop: 70,
  },
  congoText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 15,
  },
  fellowText: {
    color: '#ffffff',
  },
  fellowTextCont: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 40,
  },
});
