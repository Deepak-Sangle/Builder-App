import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native'

const LogoHeader = (props) => {
    const dimensions = props.size;
    const text = props.text;
    const isHeader = props.isHeader ? props.isHeader : false ; 
    
    const alignLogo = isHeader ? "flex-start" : "center" ;
    const leftPadding = isHeader ? 50 : 0;
    
    const icon = {
        width : dimensions,
        height : dimensions,
    }

    const headingStyle = {
        justifyContent : alignLogo,
        paddingLeft : leftPadding,
    }

    return (
        <View>
            <View style={[styles.container, headingStyle]}>
                <View>
                    <Image 
                        source={require('../../android/app/src/main/assets/images/Logo.png')}
                        style={icon}
                    />
                </View>
                {isHeader && <View style={styles.companyView}>
                    <Text style={[styles.companyText, styles.textStyle]}> Builders {"\n"} Broadcast </Text>
                </View>}
            </View>
            {text && <Text style={styles.title}>{text}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({ 
    container :{
        flexDirection : "row",
        paddingTop : 60,
        alignItems : "center",
    },
    title : {
        textAlign: "center",
        fontFamily: "Nunito-Bold",
        color: "#757575",
        marginBottom : 40,
        marginTop : 20,
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

});
 
export default LogoHeader;