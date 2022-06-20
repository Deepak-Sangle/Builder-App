import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const EachDayMeetingCards = (props) => {

    const data = props.data;
    let count = props.count;
    
    const MeetingCard = (props) => {
        const isNext = props.isNext ;
        return(
            <View style={[styles.meet, {backgroundColor : isNext ? "#429B38" : "#FFFFFF"}]}>
                <View style={styles.cardView}>
                    <View style={styles.buildernameView}>
                        <Text style={[styles.textStyle, {color : isNext ? "#FFFFFF" : "#3E506D", fontFamily : "Nunito-Bold"},]}>{props.builderName.toUpperCase()}</Text>
                        {isNext && <View style={styles.nextView}>
                            <Text style={[styles.textStyle, styles.nextText]}>  NEXT  </Text>
                        </View>}
                    </View>
                    <Text style={[styles.textStyle, {color : isNext ? "#FFFFFF" : "#4A4A4A",fontFamily : "Nunito-SemiBold"}]}>{props.startingTime} - {props.endingTime}</Text>
                </View>
                <View style={styles.cardView}>
                    <Text style={[styles.textStyle, {color : isNext ? "#FFFFFF" : "#3E506D", fontFamily : "Nunito-Bold"}]}>{props.name.toUpperCase()}</Text>
                    <View style={{flexDirection : "row"}}>
                        <Text style={[styles.textStyle, {color : isNext ? "#FFFFFF" : "#4A4A4A", fontFamily : "Nunito-SemiBold"}]}>{props.bhk} BHK - </Text>
                        <Text style={[styles.textStyle, {color : isNext ? "#FFFFFF" : "#4A4A4A", fontFamily : "Nunito-SemiBold"}]}>{props.area} sqft</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.eachDayView}>
            <View style={styles.dateView}>
                <Text style={[styles.textStyle, styles.date]}>{props.date}</Text>
                <Text style={[styles.textStyle, styles.date]}>{props.month}</Text>
                <Text style={[styles.textStyle, styles.day]}>{props.day}</Text>
            </View>
            <View style={styles.meetView}>
                {data.map((meet,i)=> {
                    return (
                        <MeetingCard 
                            isNext={count===0} 
                            key={i}
                            builderName={meet.organizer.name} 
                            startingTime={meet.startTime.substring(11,16)} 
                            endingTime={meet.endTime.substring(11,16)} 
                            name={meet.client ? meet.client.name : "client-0"} 
                            //meeting data should also contain bhk and area values
                            bhk="3"         
                            area="3452" 
                        />
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    textStyle : {
        fontFamily : "Nunito-Regular",
        letterSpacing : 0.5,
        fontSize : 12,
        color : "#4A4A4A",
    },
    eachDayView : {
        flexDirection : "row",
        justifyContent : "space-between",
        marginVertical : 10,
    },
    dateView : {
        marginHorizontal : 20,
        marginRight : 30,
        flex : 0.15,
    },
    meetView : {
        flex : 1,
        marginLeft : 5,
    },
    date : {
        fontFamily : "Nunito-Bold",
        fontSize : 15,
    },
    day : {
        fontFamily : "Nunito=SemiBold",
        color : "#429B38",
    },
    cardView : {
        margin : 5,
    },
    meet : {
        padding : 15,
        borderRadius : 6,
        marginBottom : 10,
        backgroundColor : "#FFFFFF",
    },
    buildernameView : {
        flexDirection : "row",
        alignItems : "center",
    },
    nextView : {
        marginHorizontal : 15,
        backgroundColor : "#3E506D",
        borderRadius : 2,
    },
    nextText : {
        fontFamily : "Nunito-Bold",
        color : "#FFFFFF",
        fontSize : 11,
        margin : 3,
    }
});
 
export default EachDayMeetingCards;
