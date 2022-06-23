import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {deviceWidth} from '../../../Constants/projectConstants';
import CustomButtons from '../../../helpers/customButtons';

export default function CheckboxAndBtn({pressHandler, text, btnText, checked, setChecked}) {

  return (
    <View style={styles.checkBoxAndBtnSection}>
      <View style={{marginHorizontal : 20,}}>
        <View style={styles.checkBoxSection}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color="#0078e9"
          />
          <TouchableOpacity activeOpacity={0.6} onPressOut={() => setChecked(!checked)}>
            <Text style={styles.checkBoxText}>{text}</Text>
          </TouchableOpacity>
        </View>
        <CustomButtons text={btnText} isDone={true} pressHandler={pressHandler}  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkBoxSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom : 20,
  },
  checkBoxAndBtnSection: {
    width: deviceWidth - 30,
  },
  checkBoxText: {
    fontFamily: 'Nunito-SemiBold',
    color : "#466989"
  },
});
