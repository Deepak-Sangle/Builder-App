import React, { useState } from 'react';
import {Text, View, StyleSheet,ScrollView, TouchableOpacity} from 'react-native'
import CustomButtons from '../../helpers/customButtons';
import LogoHeader from '../../helpers/LogoHeader';

const SlideView = () => {

    const [slideDetails, setSlideDetails] = useState([
        {heading : "Exclusive Member Access", description : "Your privilege pass to exclusive information, latest offers, events and builder communications.", id : 1},
        {heading : "Stay ahead of competition", description : "Get every document or plan layouts you need to close that deal in an organised project wise manner.", id : 2},
        {heading : "Create your team", description : "Share exclusive memeber privilages with your team. Stay updated with their client visits and registrations.", id : 3},
    ]);

    const [currentSlide, setCurrentSlide] = useState(0);

    const onStarted = ()=> {
        if(currentSlide<2) setCurrentSlide(currentSlide+1);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <LogoHeader size={70} isHeader={true} isDescription={true}  />
            </View>
            <View style={[styles.circleView, styles.container]}>
                <View style={styles.bigcircle}></View>
            </View>
            {slideDetails.map((slide, index)=> {
                if(index!=currentSlide) return;
                return (
                    <View key={index} style={[styles.container]}>
                        <Text style={[styles.textStyle, styles.heading]}>{slide.heading}</Text>
                        <Text style={[styles.textStyle, styles.description]}>{slide.description}</Text>
                        <View style={styles.horizontalBars}>
                            {[0,1,2].map((i)=> {
                                if(currentSlide!=i) return (<View key={i} style={styles.dot}></View>)
                                else return (<View key={i} style={[styles.dot, styles.bar]}></View>)
                            })}
                            {/* <View style={[styles.dot, styles.bar]}></View>
                            <View style={styles.dot}></View>
                            <View style={styles.dot}></View> */}
                        </View>
                    </View>
                )
            })}
            <View style={[styles.container, {paddingHorizontal : 20}]}>
                <CustomButtons pressHandler={onStarted} text="GET STARTED" isDone={true}  />
                <View style={styles.alreadyView}>
                    <Text style={[styles.textStyle]}>Already have an account? </Text>
                    <TouchableOpacity style={{}}><Text style={{color : "#0078E9"}}>Enter here</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container : {
        margin : 30,
    },
    textStyle : {
        fontFamily : "Nunito",
        letterSpacing : 0.5,
        fontSize : 12,
        color : "#4A4A4A",
    },
    circleView : {
        alignItems : "center",
    },
    bigcircle : {
        width : 250,
        height : 250,
        backgroundColor : "#E0E7F1",
        borderRadius : 125,
    },
    heading : {
        fontFamily : "Nunito-Bold",
        fontSize : 20,
        textAlign : "center",
    },
    description : {
        textAlign : "center",
        marginHorizontal : 50,
        fontSize : 14,
        lineHeight : 20,
        marginVertical : 10,
    },
    alreadyView : {
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        marginVertical : 20,
    },
    horizontalBars : {
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "row",
    },
    dot : {
        marginHorizontal : 3,
        height : 5,
        borderRadius : 20,
        backgroundColor : "#BECCE0",
        width : 5,
    },
    bar : {
        width : 35,
    }
});

export default SlideView;