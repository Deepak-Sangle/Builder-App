import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import Dropdown from './Dropdown';
import Searchbar from './SearchBar';

export default function SearchAndDropDown({data}) {
  const [value, setValue] = useState();
  function updateSearch(value) {
    //do your search logic or anything
    console.log(value);
  }
  return (
    <View style={styles.searchCont}>
      <View>
        <Searchbar
          value={value}
          updateSearch={updateSearch}
          style={{marginTop: '8%'}}
        />
      </View>
      <View>
        <Dropdown
          data={data}
          dropDownStyles={{
            margin: 16,
            height: 50,
            width: 150,
            backgroundColor: '#d8e5f3',
            borderRadius: 6,
            paddingHorizontal: 8,
          }}
          title="All Clients"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
