import React, { useState } from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { Searchbar, RadioButton, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const myIcon = <Icon name="camera" size={60}  color="black"/>;

const SelectcityView = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cities, setCities] = useState([
        {title: "Gurugram", id: 1},
        {title: "New Delhi", id: 2},
        {title: "Other Cities coming soon", id: 3},
    ]);
    const [cityId, setCityID] = useState('');

    const pressHandler = (id) =>{
        setCityID(id);
    }

    const onSubmit = () =>{
        const city = cityId;
        
    }
    const renderList =  ({item}) => {
        return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.listView]} onPress={()=> pressHandler(item.id)}>
            <View style={styles.listAlign}>
                <Text style={[styles.listText]}>{item.title}</Text>
                <Text style={[styles.checkText]}>
                    <RadioButton
                        value={item.id}
                        status={ cityId === item.id ? 'checked' : 'unchecked' }
                        onPress={() => setCityID(item.id)}
                    />
                </Text>
            </View>
        </TouchableOpacity>
        )
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
                <Searchbar 
                    placeholder='Search for your city'
                    onChangeText={(query)=> setSearchQuery(query)}
                    value={searchQuery}
                    style={styles.searchBar}
                    inputStyle={styles.searchQuery}
                />
                <FlatList 
                    data={cities}
                    keyExtractor = {item => item.id}
                    renderItem={renderList}
                    style={styles.listBox}
                />
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
        backgroundColor: "white",
    },
    container :{
        // backgroundColor: "grey",
        padding: 10,
        margin: 15,
    },
    debuggindBorder: {
        borderColor: "red",
        borderWidth: 2,
    },
    title : {
        textAlign: "center",
        fontFamily: "Raleway-Bold",
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
        fontSize: 12,
        color: "#4A4A4A",
        fontFamily: "sans-serif"
    },
    listBox :{
        borderColor: "#E6EBF3",
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: "rgba(255,255,255,0.71)",
    },
    listView : {
        borderColor: "#E6EBF3",

        borderBottomWidth: 1,
    },
    listAlign : {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
    },
    checkText :{
        padding: 10,
        // paddingVertical: 15,
    },
    listText :{
        fontSize: 14,
        // fontFamily: "Nunito",
        padding: 20,
        color: "#545454",
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
    }
})

export default SelectcityView;