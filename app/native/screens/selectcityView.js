import React, { useState } from 'react';
import {Text, View, StyleSheet,} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import CustomFlatList from '../../helpers/customFlatList';
import CustomSearchBar from '../../helpers/customSearchBar';
import CustomButtons from '../../helpers/customButtons';
import DialogBox from './dialogView';
const myIcon = <Icon name="camera" size={60}  color="blue"/>;

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
            <View style={[styles.container]}>
                <Text style={[styles.icon]}>
                    {myIcon}
                </Text>
                <Text style={styles.title}>SELECT YOUR LOCATION</Text>
            </View>
            <View style={styles.cities}>
                <CustomSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} text="Search for your city" />
                <CustomFlatList text={text} itemID={cityID} setItemID={setCityID} data={cities}/>
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
    submitBtn :{
        backgroundColor: "#0078E9",
        borderRadius: 5,
        marginTop: 0,
        margin: 15,
    },
    btntext : {
        padding: 5
    },
    doneText : {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "Nunito-Bold",
    }
})

export default SelectcityView;