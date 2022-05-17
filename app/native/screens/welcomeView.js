import React, { useEffect,useCallback, useState } from 'react';
import {Linking, Text, View, StyleSheet, ScrollView, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import {useForm, Controller} from 'react-hook-form'
import DropDownPicker from 'react-native-dropdown-picker';

import CustomButtons from '../../helpers/customButtons';
const myIcon = <Icon name="camera" size={60}  color="blue"/>;


const WelcomeView = () => {
    return (
        <View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "white",
    }
})
 
export default WelcomeView;