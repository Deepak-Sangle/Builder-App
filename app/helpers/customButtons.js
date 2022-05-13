import React from 'react';
import {Text, StyleSheet,} from 'react-native'
import {Button } from 'react-native-paper';

const CustomButtons = (props) => {
    const text = props.text;
    const isDone = props.isDone;
    const primary_color = isDone ? "#0078E9" : "#FFFFFF";
    const secondary_color = isDone ? "#FFFFFF" : "#0078E9";
    const pressHandler = props.pressHandler;
    const width = props.width ? props.width + "%" : "100%";
    const backbgcolor = {
        backgroundColor: primary_color,
        width : width,
        borderColor : primary_color,
    }

    const textcolor = {
        color: secondary_color
    }
    
    return (
        <Button contentStyle={styles.btntext} style={[styles.btn, backbgcolor]} mode='outlined' onPress={pressHandler}>
            <Text style={[styles.btntext_2, textcolor]}>{text}</Text>
        </Button>
    );
}
 
const styles = StyleSheet.create({
    btn :{
        marginTop: 0,
        borderWidth: 1,
        borderRadius: 7,
    },
    btntext : {
        margin: 6,
    },
    btntext_2 : {
        fontFamily: "Nunito-Bold",
    },
})
export default CustomButtons;