import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

import IonIcons from 'react-native-vector-icons/Ionicons'       
import AwesomeIcons from 'react-native-vector-icons/FontAwesome5'         
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
import EntypoIcons from 'react-native-vector-icons/Entypo' 

const BottomNavigationTab = () => {
    return (
        <View style={styles.navigationView}>
            <View style={styles.iconView}>
                <IonIcons name="home-outline" style={styles.iconStyle} color="#0078E9" size={35} />
                <Text style={styles.textStyle}>Home</Text>
            </View>
            <View style={styles.iconView}>
                <AwesomeIcons name="broadcast-tower" style={styles.iconStyle} color="#0078E9" size={35} />
                <Text style={styles.textStyle}>Broadcast</Text>
            </View>
            <View style={styles.iconView}>
                <MaterialIcons name="apartment" style={styles.iconStyle} color="#0078E9" size={35} />
                <Text style={styles.textStyle}>Builders</Text>
            </View>
            <View style={styles.iconView}>
                <AwesomeIcons name="clipboard-list" style={styles.iconStyle} color="#0078E9" size={35} />
                <Text style={styles.textStyle}>My clients</Text>
            </View>
            <View style={styles.iconView}>
                <EntypoIcons name="dots-three-horizontal" style={styles.iconStyle} color="#0078E9" size={30} />
                <Text style={styles.textStyle}>more</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    navigationView : {
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems : "flex-end",
    },
    iconView : {
        justifyContent : "center",
        margin : 15,
        marginHorizontal : 20,
    },
    iconStyle : {
        textAlign : "center",
    },
    textStyle : {
        textAlign : "center",
        color : "#0078E9",
        fontFamily : "Nunito-Bold",
        fontSize : 11,
        letterSpacing : 0.5,
    },
})
 
export default BottomNavigationTab;