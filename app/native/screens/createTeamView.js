import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import LogoHeader from "../../helpers/LogoHeader";
import CustomButtons from "../../helpers/customButtons";
import CreateTeamCard from "../../helpers/createTeamCard";
import Icons from 'react-native-vector-icons/Entypo'

const CreateTeamView = ({navigation}) => {

    const [counter, setCounter] = useState(1);

    const decreaseCounter = ()=> {
        if(counter <= 1) setCounter(1);
        else setCounter(counter-1);
    }

    const increaseCounter = ()=> {
        setCounter(counter+1);
    }

    const Pay = () => {
        navigation.navigate('TeamPack');
    }

    const CounterCard = ()=> {
        return(
            <View style={styles.counterView}>
                <TouchableOpacity onPress={decreaseCounter} style={[styles.counter, styles.rightBorder]}>
                    <Icons name="minus" size={25} color="#0078E9" />
                </TouchableOpacity>
                <View style={[styles.counter, styles.rightBorder, styles.val]}>
                    <Text style={[styles.textStyle, styles.textVal]}>{counter.toString().padStart(2, '0')}</Text>
                </View>
                <TouchableOpacity onPress={increaseCounter} style={styles.counter}>
                    <Icons name="plus" size={25} color="#0078E9" />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <LogoHeader size={55} text="CREATE YOUR TEAM" isThreeDot={true} isBack={true} isImage={false} />
            <CreateTeamCard />
            <View style={styles.payCard}>
                <Text style={styles.textStyle}>Your team size</Text>
                <View style={styles.middleView}>
                    <View>
                        <CounterCard />
                    </View>
                    <View>
                        <Text style={[styles.textStyle, styles.firstLine]}>2399 x {counter}</Text>
                        <Text style={[styles.textStyle, styles.secLine]}>Rs. {2399*counter}</Text>
                    </View>
                </View>
                <CustomButtons text="PROCEED TO PAY" isDone={true} pressHandler={Pay} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    payCard : {
        backgroundColor : "#EAEDF1",
        borderRadius : 6,
        padding : 30,
        margin : 40,
        marginTop : 0,
    },
    textStyle : {
        fontFamily : "Nunito-Regular",
        letterSpacing : 0.5,
        color : "#4A4A4A",
        fontSize : 12,
    },
    middleView : {
        flexDirection : "row",
        justifyContent : "space-between",
        paddingVertical : 10,
        alignItems : "center",
        marginBottom : 15,
        marginTop : 10,
    },
    counterView : {
        borderRadius : 4,
        backgroundColor : "#E0E7F1",
        borderColor : "#BECCE0",
        borderWidth : 1,
        flexDirection : "row",
    },
    counter : {
        padding : 10,
    },
    rightBorder : {
        borderColor : "#BECCE0",
        borderRightWidth : 1,
    },
    val : {
        backgroundColor : "#FFFFFF",
        justifyContent : "center",
        paddingHorizontal : 15,
    },
    textVal : {
        fontSize : 16,
    },
    firstLine : {
        textAlign : "right",
    },
    secLine : {
        color : "#429B38",
        fontSize : 16,
        fontFamily : "Nunito-Bold",
    },
});
 
export default CreateTeamView;