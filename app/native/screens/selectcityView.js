import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomFlatList from '../../helpers/customFlatList';
import CustomSearchBar from '../../helpers/customSearchBar';
import CustomButtons from '../../helpers/customButtons';
import LogoHeader from '../../helpers/LogoHeader';
import DialogBox from './dialogView';
import {useSelector} from 'react-redux';

const SelectcityView = ({navigation}) => {
  const citiesList = useSelector(state => state.walkInScreen.cities);

  const [searchQuery, setSearchQuery] = useState();

  const [cities, setCities] = useState(citiesList);
  const [cityID, setCityID] = useState();

  const [visible, setVisible] = useState(false);

  const onSubmit = () => {
    if (cityID == undefined) return;
    setVisible(true);
    const city = cityID;
  };

  function findName() {
    let name = '';
    cities.map(city => {
      if (city.id == cityID) name = city.name;
    });
    return name;
  }

  const text = 'Other cities coming soon';

  return (
    <View style={[styles.view]}>
      <LogoHeader isHeader={false} text="SELECT YOUR LOCATION" size={70} />
      <View style={styles.cities}>
        <CustomSearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          text="Search for your city"
        />
        <CustomFlatList
          text="Other cities coming soon"
          itemID={cityID}
          setItemID={setCityID}
          data={cities}
        />
      </View>
      <View style={{margin: 15, marginTop: 0}}>
        <CustomButtons text="DONE" pressHandler={onSubmit} isDone={true} />
      </View>
      {visible && (
        <DialogBox
          navigation={navigation}
          city={findName()}
          visible={visible}
          setVisible={setVisible}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  cities: {
    flex: 1,
    margin: 15,
  },
});

export default SelectcityView;
