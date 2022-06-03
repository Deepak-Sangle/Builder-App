import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SelectCountry} from 'react-native-element-dropdown';

export default function Dropdown({data, dropDownStyles, title}) {
  const [country, setCountry] = useState('1');

  return (
    <SelectCountry
      style={dropDownStyles}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      iconStyle={styles.iconStyle}
      maxHeight={200}
      value={country}
      data={data}
      valueField="value"
      labelField="lable"
      imageField="image"
      placeholder="Search item..."
      searchPlaceholder="Search..."
      onChange={e => {
        setCountry(e.value);
      }}
    />
  );
}

const styles = StyleSheet.create({
  // dropdown: {
  //   margin: 16,
  //   height: 50,
  //   width: 150,
  //   backgroundColor: '#EEEEEE',
  //   borderRadius: 10,
  //   paddingHorizontal: 8,
  // },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
