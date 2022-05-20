import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import { Divider } from 'react-native-paper';
import LogoHeader from '../../helpers/LogoHeader';
import CustomArrow from '../../helpers/customArrow';
import LinearGradient from 'react-native-linear-gradient';

const PlansPricingView = () => {

    const BuilderplanCard = (props)=> {
        const tag = props.tag;
        const heading = props.heading;
        const price = props.price;
        const price_durn = props.price_durn;
        const description = props.description;

        return (
            <TouchableOpacity activeOpacity={0.7} style={styles.cardView}>
                {tag!='' && <View style={styles.tagView}>
                    <LinearGradient colors={["#F0DC57", "#DDB62C"]} style={styles.tagGradient} ><Text style={[styles.textStyle, styles.tagText]}>{tag}</Text></LinearGradient>
                </View>}
                <View style={styles.cardTop}>
                    <View style={{marginHorizontal : 10}}>
                        <Text style={[styles.textStyle, styles.headingStyle]}>{heading}</Text>
                        <Text style={[styles.textStyle, styles.priceStyle]}>Rs. {price}/<Text style={styles.peryearText}>{price_durn}</Text></Text>
                    </View>    
                    <View>
                        <CustomArrow />
                    </View>
                </View>

                <Divider />
                
                <View style={styles.cardBot}>
                    <Text style={[styles.textStyle, styles.descriptionStyle]}>{description}</Text>
                </View>

            </TouchableOpacity>
        )
    }

    const text_1 = "Dealing with selected builders, get unlimited access to all their projects in your region.";
    const text_2 = "Unlimited access to all builders in your region.";

    return (
        <View style={styles.container}>
            <LogoHeader size={55} />
            
            <View style={styles.plansView}>
                <Text style={[styles.textStyle, styles.plansText ]}>Plans {"&"} Pricing</Text>
            </View>
            
            <ScrollView style={styles.scrollView}>
                <View style={styles.planCardView}>
                    <BuilderplanCard tag="" heading="Per Builder Plan" price="2990" price_durn="year/builder" description={text_1}/>
                </View>
                <View style={styles.planCardView}>
                    <BuilderplanCard tag="Best seller" heading="All Access Plan" price="19990" price_durn="year" description={text_2}/>
                </View>
            </ScrollView>

            <View style={styles.bottomView}>
                <View style={styles.proPlanView}>
                    <View style={styles.proView}><Text style={[styles.textStyle, styles.proText]}> PRO </Text></View>
                    <Text style={[styles.textStyle, styles.addText ]}>Add team members to any of the plan</Text>
                    <Text style={[styles.textStyle, styles.priceText]}>Rs. 2399/<Text style={styles.peryearText}>year/member</Text></Text>
                </View>
                <Divider/>
                <View style={styles.descriptionView}>
                    <View style={styles.bulletView}>
                        <Text style={styles.textStyle}>- </Text>
                        <Text style={styles.textStyle}>Your team members can access all builders you have access to.</Text>
                    </View>
                    
                    <View style={styles.bulletView}>
                        <Text style={styles.textStyle}>- </Text>
                        <Text style={styles.textStyle}>Track your team’s site visits, registrations and bookings.</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#F5F8FC",
        justifyContent : "space-between",
    },
    plansView : {
        marginVertical : 30,
    },
    textStyle : {
        fontFamily : "Nunito-Regular",
        color : "#4A4A4A",
        letterSpacing : 0.5,
        fontSize : 12,
    },
    plansText : {
        textAlign : "center",
        fontSize : 24,
    },
    scrollView : {
        flex : 1,
    },
    planCardView : {
        margin : 20,
        marginHorizontal : 40,
    },
    cardView : {
        borderRadius : 8,
        shadowOffset : {width: 0, height: 4},
        // shadowColor : "rgba(190,190,190,0.5)",
        elevation : 7,
        shadowRadius : 7,
        shadowOpacity : 0,
        backgroundColor : "#FFFFFF",
    },
    cardTop : {
        margin : 20,
        flexDirection : "row",
        justifyContent : "space-between",
    },
    cardBot : {
        margin : 20,
    },
    tagView : {
        flexDirection : "row",
    },
    tagText : {
        color : "#1E1E1E",
        padding : 10,
        paddingHorizontal : 20,
    },
    tagGradient :{
        borderTopLeftRadius : 8,
        borderBottomRightRadius : 8,

    },
    headingStyle : {
        fontFamily : "Nunito-Bold",
        fontSize : 15,
        color : "#0078E9",
    },
    priceStyle :{
        color : "#3E506D",
        fontFamily : "Nunito-Bold",
        fontSize : 14,
    },
    descriptionStyle :{
        marginHorizontal : 10,
    },
    bottomView : {
        backgroundColor : "#EAEDF1",
        padding : 40,
        paddingBottom : 20,
    },
    proPlanView : {
        marginBottom : 20,
        
    },
    proView :{
        marginVertical : 5,
        flexDirection : "row",
    },
    proText : {
        padding : 3,
        fontFamily : "Nunito-Bold",
        backgroundColor : "#F5E350",
        fontSize : 8,
        borderRadius : 6,
    },
    addText : {
        fontWeight : "bold",
        fontSize : 12,
    },
    priceText : {
        marginVertical : 5,
        color : "#3E506D",
        fontFamily : "Nunito-Bold",
        fontSize : 14,
    },
    peryearText : {
        fontSize : 12,
        fontFamily : "Nunito-Regular",
    },
    descriptionView : {
        marginVertical : 10,
    },
    bulletView :{ 
        flexDirection : "row",
        marginTop : 15,
    },


});
 
export default PlansPricingView;