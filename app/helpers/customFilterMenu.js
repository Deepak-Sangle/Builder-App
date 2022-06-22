import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import CustomIcons from './CustomIcons';

const CustomFilterMenu = (props) => {
    
    const [open,setOpen] = useState(false);
    const list = props.list;
    const item = props.item;
    const setItem = props.setItem;
    const placeholder = props.placeholder? props.placeholder : "Select an item";
    const isIcon = props.isIcon ? props.isIcon : false;
    const borderRadius = props.radius ? props.radius : 5;
    const downDirection = props.down ? true : false;
    const onPress = props.onPress !== undefined ? props.onPress : () => {};
    const leftPadding = isIcon ? 50 : 20;
    const backgroundColor = props.backgroundColor ? props.backgroundColor : "#DFE7F2" ;
    
    const dropDownRef = useRef();

    return (
        <View style={styles.inputView}>
            <View style={styles.searchBar}>
                {isIcon && <CustomIcons style={styles.icon} name='location-pin' size={25} color="#898989"/>}
                <TouchableWithoutFeedback onPress={() => dropDownRef.current.close()}>
                    <DropDownPicker
                        listMode='SCROLLVIEW'
                        // loading={item ? false : true}
                        showTickIcon={false}
                        placeholder={placeholder}
                        open={open}
                        dropDownDirection={downDirection ? "TOP" : "BOTTOM"} 
                        value={item}
                        items={list}
                        setOpen={setOpen}
                        controller={(instance) => dropDownRef.current = instance}
                        onChangeValue={onPress}
                        selectedItemContainerStyle={styles.selected}
                        setValue={setItem}
                        style={[styles.dropmenu, {borderRadius: borderRadius, backgroundColor: backgroundColor}]}
                        textStyle={[styles.droptext, styles.dropdownAdjust, {paddingLeft : leftPadding }]}
                        listItemLabelStyle={styles.listtext}
                        dropDownContainerStyle={[styles.dropdown, {backgroundColor: backgroundColor}]}
                    />
                </TouchableWithoutFeedback>
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
        borderColor: "#BECCE0",
        borderWidth : 1,
        zIndex : -1,
    },
    dropdown: {
        borderRadius : 5,
        borderColor: "#BECCE0",
        borderWidth: 1,
        borderTopWidth : 0,
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