import React, { useState } from 'react';
import { Text, View, StyleSheet, Image} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const SearchLocation = (props) => {
    
    const [open,setOpen] = useState(false);
    const list = props.list;
    const item = props.item;
    const setItem = props.setItem;

    return (
        <View style={styles.inputView}>
            <View style={styles.searchBar}>
                <Icon style={styles.icon} name='location-pin' size={30} color="#898989"/>
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    showTickIcon={false}
                    open={open}
                    value={item}
                    items={list}
                    setOpen={setOpen}
                    selectedItemContainerStyle={styles.selected}
                    setValue={setItem}
                    style={[styles.dropmenu]}
                    textStyle={[styles.droptext, styles.dropdownAdjust]}
                    listItemLabelStyle={styles.listtext}
                    dropDownContainerStyle={styles.dropdown}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar : {
        flexDirection : "row",
        alignItems : "center",
    },
    icon : {
        position : "absolute",
        left : 10,
    },
    inputView: {
        marginVertical: 20,
    },
    label: {
        fontSize: 12,
        fontFamily: "Nunito-Medium",
    },
    textStyle: {
        fontFamily: "Nunito",
        letterSpacing: 0.6,
        color: "#4A4A4A",
    },
    dropmenu: {
        borderColor: "#BECCE0",
        borderRadius: 30,
        zIndex : -1,
    },
    dropdown: {
        borderRadius : 0,
        borderColor: "#BECCE0",
        borderWidth: 1,
    },
    droptext: {
        fontFamily: "Nunito-SemiBold",
        letterSpacing: 0.6,
        color: "#3E506D",
        paddingLeft : 50,
    },
    listtext: {
        borderColor: "#BECCE0",
        paddingLeft : 20,
    },
    dropdownAdjust : {
        margin: -10, 
    },
    selected : {
        backgroundColor : "#C4ECC0",
    }
});
 
export default SearchLocation;