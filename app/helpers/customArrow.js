import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const CustomArrow = (props)=>{
    const borderWidth = props.borderWidth ? props.borderWidth : 0;
    const borderColor = props.borderColor;
    const backgroundColor = props.backgroundColor ? props.backgroundColor : "#FFFFFF";
    const color = props.color ;
    const pressHandler = props.pressHandler;

    return (
        <TouchableOpacity onPressOut={pressHandler} style={{borderWidth, borderColor, borderRadius : 50}}>
            <View style={[styles.blueCircle, {backgroundColor}]}>
                <Icon name="arrow-forward-ios" size={20} color={color} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    blueCircle : {
        borderRadius : 50,
        width : 30,
        height : 30,
        justifyContent :"center",
        alignItems : "center",
    },
});

export default CustomArrow;