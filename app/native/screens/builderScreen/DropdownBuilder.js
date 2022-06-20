import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Location from 'react-native-vector-icons/FontAwesome5';

const DropdownComponent = ({data}) => {
  const [value, setValue] = useState(null);

  //console.log(value);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      //search
      maxHeight={300}
      labelField="address"
      valueField="id"
      placeholder={data[0]?.address}
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderLeftIcon={() => (
        <Location
          name="map-marker-alt"
          style={styles.icon}
          size={20}
          color="black"
        />
      )}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    width: '50%',
    alignSelf: 'center',
    paddingHorizontal: 8,
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
