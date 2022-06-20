import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import CustomIcons from './CustomIcons';

const CustomFilterMenu = (props) => {
    
    const [open,setOpen] = useState(false);
    const list = props.list;
    const item = props.item;
    const setItem = props.setItem;
    const isIcon = props.isIcon ? props.isIcon : false;
    const borderRadius = props.radius ? props.radius : 5;
    const leftPadding = isIcon ? 50 : 20;
    const backgroundColor = props.backgroundColor ? props.backgroundColor : "#DFE7F2" ;
    
    return (
        <View style={styles.inputView}>
            <View style={styles.searchBar}>
                {isIcon && <CustomIcons style={styles.icon} name='location-pin' size={25} color="#898989"/>}
                <DropDownPicker
                    listMode='SCROLLVIEW'
                    showTickIcon={false}
                    open={open}
                    value={item}
                    items={list}
                    setOpen={setOpen}
                    selectedItemContainerStyle={styles.selected}
                    setValue={setItem}
                    style={[styles.dropmenu, {borderRadius: borderRadius, backgroundColor: backgroundColor}]}
                    textStyle={[styles.droptext, styles.dropdownAdjust, {paddingLeft : leftPadding }]}
                    listItemLabelStyle={styles.listtext}
                    dropDownContainerStyle={[styles.dropdown, {backgroundColor: backgroundColor}]}
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
        left : 20,
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
        elevation : 5,
        borderColor: "#BECCE0",
        borderWidth : 0,
        zIndex : -1,
    },
    dropdown: {
        borderRadius : 5,
        borderColor: "#BECCE0",
        borderWidth: 0,
        elevation : 5,
    },
    droptext: {
        fontFamily: "Nunito-SemiBold",
        letterSpacing: 0.6,
        color: "#3E506D",
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
 
export default CustomFilterMenu;