import React, { useEffect,useCallback, useState } from 'react';
import {Text, View, StyleSheet, ScrollView, TextInput} from 'react-native'
import LogoHeader from '../../helpers/LogoHeader';


const WelcomeView = () => {
    return (
        <View style={styles.container}>
            <LogoHeader isHeader={false} size={55} />
            
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