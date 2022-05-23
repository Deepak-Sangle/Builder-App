import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const CustomGradient = (props) => {
    const text=props.text;
    const isSmall = props.isSmall ? props.isSmall : false;
    
    const textStyle = {
        padding : isSmall ? 3 : 7,
        paddingHorizontal : isSmall ? 5 : 20,
    }

    return (
        <View>
            {text!='' && <View style={styles.tagView}>
                <LinearGradient colors={["#F0DC57", "#DDB62C"]} style={styles.tagGradient} ><Text style={[styles.tagText, textStyle]}>{text}</Text></LinearGradient>
            </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    tagView : {
        flexDirection : "row",
    },
    tagText : {
        fontFamily : "Nunito-SemiBold",
        letterSpacing : 0.5,
        fontSize : 12,
        color : "#1E1E1E",
    },
    tagGradient :{
        borderTopLeftRadius : 8,
        borderBottomRightRadius : 8,

    },
})
 
export default CustomGradient;