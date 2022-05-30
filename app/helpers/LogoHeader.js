import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native'
import Icons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' //arrow-back-ios

const LogoHeader = (props) => {
    const dimensions = props.size;
    const text = props.text;
    const isHeader = props.isHeader!=undefined ? props.isHeader : false ; 
    const source = props.source ? props.source : require('../../android/app/src/main/assets/images/Logo.png') ;
    const isThreeDot = props.isThreeDot ? props.isThreeDot : false ;
    const isBack = props.isBack ? props.isBack : false;
    const isImage = props.isImage!=undefined ? props.isImage : true; 
    
    const alignLogo = isHeader ? "flex-start" : "space-between" ;
    const leftPadding = isHeader ? 50 : 0;
    const topPadding = props.topPadding ? props.topPadding : props.source ? 20 : 60;

    const icon = {
        width : dimensions,
        height : dimensions,
    }

    const headingStyle = {
        justifyContent : alignLogo,
        paddingLeft : leftPadding,
        paddingTop : topPadding,
    }

    return (
        <View>
            <View style={[styles.container, headingStyle]}>
                {!isHeader && <TouchableOpacity activeOpacity={isBack ? 0.5 : 0} style={[styles.backView, {opacity : isBack ? 1 : 0}]}>
                    <MaterialIcons name="arrow-back-ios" size={20} color="#0078E9" />
                </TouchableOpacity>}

                <View >
                    <Image 
                        source={source}
                        style={[icon, {opacity : isImage ? 1 : 0}]}
                        resizeMode="contain"
                    />
                </View>

                {isHeader && <View style={styles.companyView}>
                    <Text style={[styles.companyText, styles.textStyle]}> Builders {"\n"} Broadcast </Text>
                </View>}

                {!isHeader && <TouchableOpacity activeOpacity={isThreeDot ? 0.5 : 0} style={[styles.navigationView, {opacity : isThreeDot ? 1 : 0}]}>
                    <Icons name='three-bars' size={25} color="#4A4A4A" />
                </TouchableOpacity>}
            </View>
            {text && <Text style={styles.title}>{text}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({ 
    container :{
        flexDirection : "row",
        alignItems : "center",
    },
    title : {
        textAlign: "center",
        fontFamily: "Nunito-Bold",
        color: "#757575",
        marginVertical : 20,
        letterSpacing : 0.5,
    },
    companyView : {
        marginHorizontal : 20,
    },
    companyText : {
        fontWeight : "300",
        fontSize : 18,
    },
    textStyle : {
        fontFamily : "Nunito",
        letterSpacing : 0.6,
        color : "#4A4A4A",
    },
    backView : {
        marginHorizontal : 40,
    },
    navigationView : {
        marginHorizontal : 40,
    }

});
 
export default LogoHeader;