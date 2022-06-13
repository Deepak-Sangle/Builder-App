import React, { useState } from 'react';
import {Text, View, StyleSheet,ScrollView, TouchableOpacity} from 'react-native'
import LogoHeader from '../../helpers/LogoHeader';
import CustomIcons from '../../helpers/CustomIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginView = ({navigation}) => {

    const [isScanning, setIsScanning] = useState(false);
    const [isScanned, setIsScanned] = useState(false);

    const changeSlide = ()=> {
        if(isScanning==false && isScanned==false) setIsScanning(true);
        else if(isScanning==true && isScanned==false) {
            setIsScanned(true);
            setIsScanning(false);
        }
        else if(isScanning==false && isScanned==true){
            navigation.navigate('DashBoardView');
        }
    }

    const signUpNow = ()=> {
        if(!isScanning && !isScanned){
            navigation.navigate('RegisterView');
        }
    }

    return (
        <View style={styles.container}>
            <LogoHeader topPadding={60} isHeader={true} size={70}/>
            <View style={styles.mainView}>
                <Text style={[styles.textStyle, styles.welcome]}>Welcome</Text>
                <Text style={[styles.textStyle, styles.please]}>Please login to continue</Text>
                <TouchableOpacity activeOpacity={0.8} onPressOut={changeSlide} style={styles.faceView}>
                    <View style={styles.leftView}>
                        <View style={styles.logoView}>
                            {/* <CustomIcons name="face-scan" size={30} color="#0078E9" /> */}
                            <Icons name="face-recognition" size={45} color="#0078E9" />
                        </View>
                        {!isScanning && !isScanned && <Text style={[styles.textStyle, styles.useFace]}>USE FACE ID</Text>}
                        {isScanning && !isScanned && <Text style={[styles.textStyle, styles.useFace]}>SCANNING...</Text>}
                        {!isScanning && isScanned && <Text style={[styles.textStyle, styles.useFace, {color : "#429B38"}]}>SUCCESFULL!</Text>}
                    </View>
                    {!isScanning && isScanned && <View><Icons name="check" size={40} color="#429B38"></Icons></View>}
                </TouchableOpacity>
                <Text style={[styles.textStyle, styles.password]}>Use password to login</Text>

            </View>
            <View style={[styles.botView, {opacity : (!isScanning && !isScanned) ? 1 : 0}]}>
                <Text style={styles.textStyle}>Don’t have an account? </Text>
                <TouchableOpacity onPressOut={signUpNow} activeOpacity={0.5}><Text style={[styles.textStyle, {color : "#00A9FF"}]}>Sign up now</Text></TouchableOpacity>
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "space-between",
    },
    textStyle : {
        color : "#757575",
        fontFamily : "Nunito-SemiBold",
        letterSpacing : 0.5,
        fontSize : 12,
    },
    mainView : {
        flex : 1,
        justifyContent : "center",
        padding : 50,
    },
    welcome : {
        fontFamily : "Nunito-SemiBold",
        fontSize : 22,
        color : "#696969",
        marginVertical : 7,
    },
    please : {
        fontFamily : "Nunito-Regular",
        marginVertical : 8,
    },
    logoView : {
        marginHorizontal : 10,
    },
    faceView : {
        backgroundColor : "#FFFDFD",
        borderRadius : 6,
        elevation : 3,
        padding : 20,
        marginVertical : 20,
        flexDirection : "row",
        justifyContent : "space-between",
    },
    leftView : {
        flexDirection : "row",
        alignItems : "center",
    },
    useFace : {
        color : "#5E5E5E",
        fontFamily : "Nunito-Bold",
        marginHorizontal : 10,
    },
    password : {
        color : "#008AF4",
        marginVertical : 10,
    },
    botView : {
        borderColor : "#BECCE0",
        borderWidth : 1,
        flexDirection : "row",
        backgroundColor : "#E0E7F1",
        padding : 35,
    }
});

export default LoginView;