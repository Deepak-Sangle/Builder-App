import React, { useState } from 'react';
import {Text, View, StyleSheet,} from 'react-native'
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import CustomFlatList from '../../helpers/customFlatList';
import CustomSearchBar from '../../helpers/customSearchBar';
const myIcon = <Icon name="camera" size={60}  color="blue"/>;

const SelectcityView = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cities, setCities] = useState([
        {title: "Gurugram", id: 1},
        {title: "New Delhi", id: 2},
        {title: "Other Cities coming soon", id: 3},
    ]);
    const [cityID, setCityID] = useState('');

    const onSubmit = () =>{
        const city = cityID;
    }
    
    return (
        <View style={[styles.view]}>
            <View style={[styles.container]}>
                <Text style={[styles.icon]}>
                    {myIcon}
                </Text>
                <Text style={styles.title}>SELECT YOUR LOCATION</Text>
            </View>
            <View style={styles.cities}>
                {/* <Searchbar 
                    placeholder='Search for your city'
                    onChangeText={(query)=> setSearchQuery(query)}
                    value={searchQuery}
                    style={styles.searchBar}
                    inputStyle={styles.searchQuery}
                /> */}
                <CustomSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} text="Search for your city" />
                <CustomFlatList itemID={cityID} setItemID={setCityID} data={cities}/>
            </View>
            <Button style={styles.submitBtn} mode="contained" onPress={() => onSubmit()}>
                <Text style={styles.doneText}>DONE</Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    view :{
        flex: 1,
        backgroundColor: "#f5f8fc",
    },
    container :{
        padding: 10,
        margin: 15,
    },
    title : {
        textAlign: "center",
        fontFamily: "Nunito-Bold",
        color: "#757575"
    },
    icon: {
        textAlign: "center",
        paddingVertical: 10,
        marginVertical: 10,    
    },
    cities : {
        flex: 1,
        margin: 15,
    },
    searchBar :{
        marginBottom: 10,
    },
    searchQuery : {
        fontSize: 13,
        color: "#4A4A4A",
        fontFamily: "Nunito-Regular"
    },
    submitBtn :{
        backgroundColor: "#0078E9",
        borderRadius: 5,
        marginTop: 0,
        margin: 15,
    },
    doneText : {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "Nunito-Bold",
    }
})

export default SelectcityView;