import React from 'react';
import {Text, View, StyleSheet,} from 'react-native'
import {Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'

const CustomButtons = (props) => {
    const text = props.text;
    const isDone = props.isDone;
    const margin = props.margin ? props.margin : 10;
    const primary_color = isDone ? "#0078E9" : "#FFFFFF";
    const secondary_color = isDone ? "#FFFFFF" : "#0078E9";
    const pressHandler = props.pressHandler;
    const width = props.width ? props.width + "%" : "100%";
    const isArrow = props.isArrow ? props.isArrow : false;

    const backbgcolor = {
        backgroundColor: primary_color,
        width : width,
        borderColor : secondary_color,
    }

    const textcolor = {
        color: secondary_color
    }
    
    return (
        <Button contentStyle={{margin : margin}} style={[styles.btn, backbgcolor]} mode='outlined' onPress={pressHandler}>
            <Text style={[styles.btntext_2, textcolor]}>{text}</Text>
            {isArrow && <Icon style={styles.arrow} name="arrow-forward-ios" size={15} color="#FFFFFF" />}
        </Button>
    );
}
 
const styles = StyleSheet.create({
    btn :{
        marginTop: 0,
        borderWidth: 1,
        borderRadius: 7,
        justifyContent : 'center',
    },
    btntext_2 : {
        fontFamily: "Nunito-Bold",
    },
    arrow : {
        
    },
})
export default CustomButtons;