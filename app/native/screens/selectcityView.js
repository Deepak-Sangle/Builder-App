import React, { useState } from 'react';
import {Text, View, StyleSheet,} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import CustomFlatList from '../../helpers/customFlatList';
import CustomSearchBar from '../../helpers/customSearchBar';
import CustomButtons from '../../helpers/customButtons';
import LogoHeader from '../../helpers/LogoHeader';
import DialogBox from './dialogView';

const SelectcityView = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const [cities, setCities] = useState([
        {title: "Gurugram", id: 1},
        {title: "New Delhi", id: 2},
        // {title: "New Delhi", id: 3},
        // {title: "New Delhi", id: 4},
        // {title: "New Delhi", id: 5},
        // {title: "New Delhi", id: 6},
        // {title: "New Delhi", id: 7},
        // {title: "New Delhi", id: 8},
        // {title: "New Delhi", id: 9},
        // {title: "New Delhi", id: 10},
        // {title: "New Delhi", id: 11},
        // {title: "New Delhi", id: 21},
    ]);
    const [cityID, setCityID] = useState('');

    const [visible, setVisible] = React.useState(false);

    const onSubmit = () =>{
        setVisible(true);
        const city = cityID;
    }
    
    function findName(){
        let name = '';
        cities.map((city)=>{
            if(city.id == cityID) name = city.title;
        });
        return name;
    }
    
    const text = "Other cities coming soon";

    return (
        <View style={[styles.view]}>
            <LogoHeader isHeader={false} text="SELECT YOUR LOCATION" size={70} />
            <View style={styles.cities}>
                <CustomSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} text="Search for your city" />
                <CustomFlatList text="Other cities coming soon" itemID={cityID} setItemID={setCityID} data={cities}/>
            </View>
            <View style={{margin: 15, marginTop: 0}}>
                <CustomButtons text="DONE" pressHandler={onSubmit} isDone={true}/>
            </View>
            {visible && <DialogBox city={findName()} visible={visible} setVisible={setVisible} />}
        </View>
    );
}

const styles = StyleSheet.create({
    view :{
        flex: 1,
    },
    cities : {
        flex: 1,
        margin: 15,
    },
})

export default SelectcityView;