import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Checkbox} from 'react-native-paper';
import deviceWidth from '../../../Constants/projectConstants';
import CustomButtons from '../../../helpers/customButtons';

export default function CheckboxAndBtn({navigation}) {
  const [checked, setChecked] = useState(false);

  const sendRequest = () => {
    navigation.navigate('MyClient');
  }

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

          <Text style={styles.checkBoxText}>Another broker is involved</Text>
        </View>
        <CustomButtons text="SEND REGISTER REQUEST" isDone={true} pressHandler={sendRequest}  />
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
  },
});
