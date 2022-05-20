import React from 'react';
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const CustomArrow = ()=>{
    return (
        <View>
            <View style={styles.blueCircle}>
                <Icon name="arrow-forward-ios" size={20} color="#FFFFFF" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    blueCircle : {
        borderRadius : 50,
        backgroundColor : "#0078E9",
        borderWidth : 6,
        borderColor : "#D0E8FF",
        width : 40,
        height : 40,
        justifyContent :"center",
        alignItems : "center",
    },
});

export default CustomArrow;