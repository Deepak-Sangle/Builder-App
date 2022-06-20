import CustomArrow from './customArrow';
import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

const UpcomingEventsCard = ({heading, description, address, date, backgroundColor, arrowColor, textblack}) => {

    return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.cardView, {backgroundColor : backgroundColor }]}>
            <View style={{marginRight : 50, flex : 1}}>
                <Text style={[styles.textStyle, styles.heading, {color : textblack ? "#8B6B0F" : "#D4E8DE"}]}>{heading}</Text>
                <View horizontal={true}>
                    <Text numberOfLines={1} style={[styles.textStyle, styles.description, {color : textblack ? "#202020" : "#FFFFFF"}]}>{description}</Text>
                </View>
                {address!==undefined && <Text style={[styles.textStyle, styles.line, {color : textblack ? "#4A4A4A" : "#FFFFFF"}]}>{address}</Text>}
                {date!==undefined && <Text style={[styles.textStyle, styles.line, {color : textblack ? "#4A4A4A" : "#FFFFFF"}]}>{date}</Text>}
            </View>
            <CustomArrow color={arrowColor} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textStyle : {
        fontFamily : "Nunito",
        letterSpacing : 0.5,
        fontSize : 12,
        color : "#FFFFFF",
    },
    cardView : {
        padding : 25,
        borderRadius : 8,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        marginBottom : 20,
    },
    heading : {
        fontFamily : "Nunito-Bold",
        fontSize : 14,
    },
    description : {
        fontFamily : "Nunito-Bold",
        marginVertical : 5,
        fontSize : 13,
    },
    line : {
        fontFamily : "Nunito-SemiBold",
    },
});
 
export default UpcomingEventsCard;