import React, { useEffect, useState } from 'react';
import { Linking, Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-paper';
import LogoHeader from '../../helpers/LogoHeader';

const ManageAccount = () => {

    const [userData, setUserData] = useState({
        full_name : "Roshan Soni", 
        company_name : "Asset Advisor India",
        phone_no : "9958744277",
        package_details : {
            name : "Per Builder Plan" ,
            amount : "3",
            validity : "June 3, 2022",
            isTeamPlan : false,
        },
        address : "FF10, Ninex Mall, Sohna Road Sector 49, Gurugram",
        pan : "MSXOS56996",
        gst : "69AABCGTH02658B1Q9",

    });

    const [panView, setPanView] = useState(false);
    const [gstView, setGstView] = useState(false);

    return (
        <ScrollView>
            <LogoHeader text="MANAGE YOUR ACCOUNT" topPadding={30} isImage={false} size={55} isThreeDot={true} isBack={true}  />

            <View style={[styles.boxView, {marginTop : 20}]}>
                <View style={styles.detailView}>
                    <Text style={[styles.textStyle, styles.name]}>{userData.full_name}</Text>
                    <Text style={[styles.textStyle, styles.phnno]}>{userData.phone_no}</Text>
                </View>
                <Divider />
                <View style={styles.detailView}>
                    <TouchableOpacity activeOpacity={0.5}><Text style={[styles.textStyle, styles.link]}>Change Password</Text></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}><Text style={[styles.textStyle, styles.link]}>Update Number</Text></TouchableOpacity>
                </View>
            </View>

            <Text style={[styles.textStyle, styles.heading]}>PACKAGE DETAILS</Text>

            <View style={styles.boxView}>
                <View style={{padding : 10}}>
                    <Text style={[styles.textStyle, styles.name]}>{userData.package_details.name} x {userData.package_details.amount}</Text>
                    <Text style={[styles.textStyle, styles.validity]}>Validity till {userData.package_details.validity}</Text>
                </View>
                <Divider />
                <View style={{padding : 10}}>
                    {userData.package_details.isTeamPlan && <Text style={[styles.textStyle, styles.plan]}>Don't know what to show if there is a team plan :{")"}</Text>}
                    {!userData.package_details.isTeamPlan && <Text style={[styles.textStyle, styles.plan]}>No Team Plan</Text>}
                </View>
                <Divider />
                <View style={{padding : 10, flexDirection : "row"}}>
                    <TouchableOpacity activeOpacity={0.5}><Text style={[styles.textStyle, styles.link]}>Edit Plan</Text></TouchableOpacity>
                </View>
            </View>

            <Text style={[styles.textStyle, styles.heading]}>COMPANY DETAILS</Text>
            <View style={[styles.boxView, {marginBottom : 50}]}>
                <View style={styles.detailView}>
                    <View style={{padding : 10, width : "80%"}}>
                        <Text style={[styles.textStyle, styles.company]}>{userData.company_name}</Text>
                        <Text style={[styles.textStyle, styles.address]}>{userData.address}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5}><Text style={[styles.textStyle, styles.link]}>Edit</Text></TouchableOpacity>
                </View>
                <Divider />
                <View style={styles.detailView}>
                    <View style={{padding : 10, width : "80%"}}>
                        <Text style={[styles.textStyle]}>PAN Number</Text>
                        <View style={{flexDirection : "row"}}>
                            {!panView && <Text style={[styles.textStyle, styles.pan]}>XXX...</Text>}
                            {!panView && <Text style={[styles.textStyle, styles.pan]}>{userData.pan.substring(userData.pan.length-3)}</Text>}
                            {panView && <Text style={[styles.textStyle, styles.pan]}>{userData.pan}</Text>}
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => setPanView(!panView)} activeOpacity={0.5}><Text style={[styles.textStyle, styles.link]}>View</Text></TouchableOpacity>
                </View>
                <Divider />
                <View style={styles.detailView}>
                    <View style={{padding : 10, width : "80%"}}>
                        <Text style={[styles.textStyle]}>Company GST Number</Text>
                        <View style={{flexDirection : "row"}}>
                            {!gstView && <Text style={[styles.textStyle, styles.pan]}>XXX...</Text>}
                            {!gstView && <Text style={[styles.textStyle, styles.pan]}>{userData.gst.substring(userData.gst.length-3)}</Text>}
                            {gstView && <Text style={[styles.textStyle, styles.pan]}>{userData.gst}</Text>}
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => setGstView(!gstView)} activeOpacity={0.5}><Text style={[styles.textStyle, styles.link]}>View</Text></TouchableOpacity>
                </View>
                <Divider />
                <View style={styles.detailView}>
                    <View style={{padding : 10, width : "80%"}}>
                        <Text style={[styles.textStyle]}>RERA</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5}><Text style={[styles.textStyle, styles.link]}>Add</Text></TouchableOpacity>
                </View>
                <Divider />
                <View style={styles.detailView}>
                    <View style={{padding : 10, width : "80%"}}>
                        <Text style={[styles.textStyle]}>LinkedIn Profile <Text style={{color : "#A6A6A6"}}>(Optional)</Text></Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5}><Text style={[styles.textStyle, styles.link]}>Add</Text></TouchableOpacity>
                </View>
            </View>

            <View style={styles.deleteView}>
                <TouchableOpacity activeOpacity={0.5}><Text style={[styles.textStyle, styles.delete]}>Delete your account</Text></TouchableOpacity>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    boxView : {
        backgroundColor : "#FFFFFF",
        borderColor : "#BECCE0",
        borderWidth : 1,
        borderRadius : 6,
        marginHorizontal : 30,
        marginBottom : 20,
    },
    textStyle : {
        color : "#4A4A4A",
        fontFamily : "Nunito-Regular",
        letterSpacing : 0.5,
        fontSize : 13,
    },
    detailView : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        padding : 10,
    },
    heading : {
        marginHorizontal : 30,
        marginBottom : 10,
        color : "#A6A6A6",
    },
    name : {
        fontFamily : "Nunito-Bold",
        fontSize : 15,
        margin : 10
    },
    phnno : {
        fontSize : 15,
        margin : 10
    },
    link : {
        margin : 10,
        marginTop : 0,
        color : "#0078E9",
    },
    validity : {
        marginHorizontal : 10,
        color : "#1E1E1E",
    },
    plan : {
        color : "#A6A6A6",
        margin : 10,
    },
    company : {
        fontFamily : "Nunito-Bold",
    },
    address : {
        marginTop : 10,
    },
    pan : {
        color : "#1E1E1E",
        fontSize : 14,
        marginTop : 10,
    },
    deleteView : {
        backgroundColor : "#F8EEEE",
        flexDirection : "row",
        justifyContent : "center",
    },
    delete : {
        color : "#B21313",
        margin : 30,
        fontFamily : "Nunito-Bold",
        textDecorationLine : "underline",
    },

});
 
export default ManageAccount;