import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import CustomIcons from './CustomIcons';

import IonIcons from 'react-native-vector-icons/Ionicons'       
import AwesomeIcons from 'react-native-vector-icons/FontAwesome5'         
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
import EntypoIcons from 'react-native-vector-icons/Entypo' 
import { useNavigation } from '@react-navigation/native';

const BottomNavigationTab = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.navigationView}>
            <TouchableOpacity activeOpacity={0.7}  style={styles.iconView}  onPressOut={()=> navigation.navigate('DashBoardView', {access : true})}>
                <CustomIcons name='home-mainnav-active'  color="#0078E9" size={30} />
                <Text style={styles.textStyle}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconView}>
                <CustomIcons name='broadcast-mainnav-active' color="#0078E9" size={30} />
                <Text style={styles.textStyle}>Broadcast</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconView}>
                <MaterialIcons name="apartment" style={styles.iconStyle} color="#0078E9" size={30} />
                <Text style={styles.textStyle}>Builders</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconView} onPressOut={()=> navigation.navigate('MyClient')}>
                <AwesomeIcons name="clipboard-list" style={styles.iconStyle} color="#0078E9" size={30} />
                <Text style={styles.textStyle}>My clients</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconView}>
                <EntypoIcons name="dots-three-horizontal" style={styles.iconStyle} color="#0078E9" size={25} />
                <Text style={styles.textStyle}>more</Text>
            </TouchableOpacity>
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
        alignItems : "center",
        justifyContent : "center",
        margin : 15,
        marginHorizontal : 10,
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