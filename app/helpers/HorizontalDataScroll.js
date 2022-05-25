import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const HorizontalDataScroll = (props) => {

    const data = props.data;
    const heading = props.heading;
    
    const [colorGradientPairs, setColorGradientPairs ] = useState([
        {color1 : "#736DFF", color2 : "#A97FFF"},
        {color1 : "#F7C598", color2 : "#FF8886"},
        {color1 : "#F9B4BD", color2 : "#9573DB"},
        {color1 : "#44DEC5", color2 : "#4EBCFA"},
        {color1 : "#36BDFF", color2 : "#4EBCFA"},
    ]);

    const GRADIENT_PAIRS = colorGradientPairs.length;

    return (
        <View style={styles.updatesView}>
            <Text style={[styles.textStyle, styles.headingText]}>{heading}</Text>

            <ScrollView horizontal={true} >
                <View style={styles.allupdateView}>
                    {data.map((val,index)=>{
                        return(
                            <LinearGradient start={{x:0.2, y:0}} colors={(index < GRADIENT_PAIRS) ? [colorGradientPairs[index].color1, colorGradientPairs[index].color2] : [colorGradientPairs[index-GRADIENT_PAIRS].color1, colorGradientPairs[index-GRADIENT_PAIRS].color2]} key={val.id} style={styles.eachupdateView}>
                                <Text style={[styles.textStyle, styles.updateText]}>{val.title}</Text>
                                <Text style={[styles.textStyle, styles.updateValue]}>{val.value}</Text>
                            </LinearGradient>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    
    headingText : {
        marginVertical : 5,
        fontFamily : "Nunito-Bold",
        color : "#4A4A4A",
        marginBottom : 10,
    },
    textStyle : {
        fontFamily : "Nunito",
        letterSpacing : 0.5,
        fontSize : 12,
        color : "#FFFFFF",
    },
    updatesView : {
        paddingLeft : 15,    
    },
    allupdateView : {
        flexDirection : "row",
    },
    eachupdateView : {
        justifyContent : "space-between",
        width : 100,
        height : 100,
        elevation : 2,
        borderRadius : 6,
        backgroundColor : "#A97FFF",
        marginBottom : 10,
        padding : 15,
        marginRight : 5,
    },
    updateText : {
        fontFamily : "Nunito-Bold",
        lineHeight : 18,
    },
    updateValue : {
        fontSize : 20,
        fontFamily : "Nunito-Bold",
    }
})
 
export default HorizontalDataScroll;