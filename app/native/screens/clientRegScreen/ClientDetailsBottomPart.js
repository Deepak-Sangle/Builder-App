import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Checkbox} from 'react-native-paper';
import deviceWidth from '../../../Constants/projectConstants';

export default function CheckboxAndBtn() {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.checkBoxAndBtnSection}>
      <View style={styles.checkBoxSection}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
          color="#0078e9"
        />

        <Text style={styles.checkBoxText}>Another broker is involved</Text>
      </View>
      <View style={styles.checkBoxSectionBtn}>
        <Text style={styles.checkBoxBtnText}>SEND REGISTER REQUEST</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkBoxSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  checkBoxAndBtnSection: {
    width: deviceWidth - 30,
  },
  checkBoxText: {
    fontWeight: 'bold',
  },
  checkBoxBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkBoxSectionBtn: {
    backgroundColor: '#0078e9',
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 40,
  },
});
