import React, { useEffect, useState } from 'react';
import { Linking, Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-paper';
import LogoHeader from '../../helpers/LogoHeader';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PieChart from 'react-native-pie-chart';
import BottomNavigationTab from '../../helpers/bottomNavigationTab';
import EachDayMeetingCards from '../../helpers/eachDayMeetingCards';


const TeamDashboardView = () => {
    
    //Get this data from API 
    
    const [teamMembersData, setTeamMembersData] = useState([
        {name : "Roshan", email : "roshan25@gmail.com", phone : 9856741230, isAdmin : true, client_visits : 98, client_registration : 65, client_bookings : 42, id : 0},
        {name : "Kunal Sarin", email : "kunalsarin26@gmail.com",   phone : 9856265230,isAdmin : true, client_visits : 65, client_registration : 43, client_bookings : 24, id : 1},
        {name : "Deepak Sangle", email : "deepaksangle68@gmail.com" , phone : 9986741230, isAdmin : false, client_visits : 32, client_registration : 58, client_bookings : 63, id : 2},
        {name : "Member 3", email : "memberthree@gmail.com",  phone : 9857239230, isAdmin : false, client_visits : 26, client_registration : 69, client_bookings : 420, id : 3},
    ]);

    const userName = "Roshan";
    const userID = 0;

    const [selectedMemberID, setSelectedMemberID] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);

    const CircleInfo = (props)=> {
        const name = props.name;
        const isAdmin = props.isAdmin;
        const id = props.id;

        var acronym = name;
        if(name!="You"){
            var matches = name.match(/\b(\w)/g); 
            var acronym = matches.join('');
        } 

        const colorTheme = {
            backgroundColor : (selectedMemberID==id) ? "#0078E9" : "#FFFFFF"
        }

        const nameColor = {
            color : (selectedMemberID!=id) ? "#0078E9" : "#FFFFFF"
        }

        const adminColor = {
            color : (selectedMemberID==id) ? "#0078E9" : "#FFFFFF",
            backgroundColor : (selectedMemberID!=id) ? "#0078E9" : "#FFFFFF"
        }

        return(
            <View>
                <TouchableOpacity onPress={()=>setSelectedMemberID(id)} style={[styles.roundView, colorTheme]} activeOpacity={0.5}>
                    <View style={styles.textView}>
                        <Text style={[styles.textStyle, styles.nameText, nameColor]}>{acronym}</Text>
                        {isAdmin && <Text style={[styles.textStyle, styles.adminText, adminColor]}>ADMIN</Text>}
                    </View>
                </TouchableOpacity>
                {selectedMemberID==id && <MaterialIcons style={styles.arrowdown} name='arrow-drop-down' size={50} color='#0078E9' />}
            </View>
        )
    }

    const TotalClientsView = (props) => {
        const text = props.text;
        const index = props.index;

        var clientsInfo = [];
        var colorGradient = [];
        teamMembersData.map((member)=>{
            (index==1) ? clientsInfo.push(member.client_visits) : (index==2) ? clientsInfo.push(member.client_registration) : clientsInfo.push(member.client_bookings);
        });

        const len = clientsInfo.length;
        var size = clientsInfo.reduce((a, b) => a + b, 0);
        
        const color1 = (index==1) ? "#FFE88A" : (index==2) ? "#A6DFF1" : "#C2A6FF";
        const color2 = (index==1) ? "#F49900" : (index==2) ? "#00B8ED" : "#7540E7";

        var Rainbow = require('rainbowvis.js');
        var myRainbow = new Rainbow();
        myRainbow.setNumberRange(1, len);
        myRainbow.setSpectrum(color1, color2);
        for(var i=1;i<=len;i++) colorGradient.push(myRainbow.colorAt(i));    
    
        return (
            <View style={styles.totalClientView}>
                <View style={styles.totalView}>
                    <Text style={[styles.textStyle, styles.totalText]}>{text}</Text>
                    <Text style={[styles.textStyle, styles.countText]}>{size}</Text>
                </View>

                <View style={styles.botView}>
                    <View style={{flex : 1,}}>
                        <PieChart
                            widthAndHeight={140}
                            series={clientsInfo}
                            sliceColor={colorGradient}
                            doughnut={true}
                            coverRadius={0.70}
                            coverFill={'#FFFFFF'}
                        />
                    </View>
                
                    <View style={styles.rightView}>
                        <Text style={[styles.textStyle, styles.typeText]}>Past (upcoming)</Text>
                        <ScrollView nestedScrollEnabled style={styles.scrollInfo}>
                            {teamMembersData.map((member)=>{
                                if(member.name==userName) member.name="You" ;
                                return (
                                    <View key={member.id} style={styles.infoView}>
                                        <Text style={[styles.textStyle, styles.byName]}>By {member.name}</Text>
                                        {index==1 &&<Text style={[styles.textStyle, styles.byAmnt]}>{member.client_visits}</Text>}
                                        {index==2 &&<Text style={[styles.textStyle, styles.byAmnt]}>{member.client_registration}</Text>}
                                        {index==3 &&<Text style={[styles.textStyle, styles.byAmnt]}>{member.client_bookings}</Text>}
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }

    const changeSelectedTab = (index)=> {
        setSelectedTab(index);
    }

    return (
        <View style={{flex : 1,}}>
            <ScrollView>
                <LogoHeader text="TEAM DASHBOARD" topPadding={30} isImage={false} size={55} isThreeDot={true} isBack={true}  />

                <View style={styles.membersView}>
                    <ScrollView horizontal style={{marginHorizontal : 30,}}>
                        {teamMembersData.map((member)=>{
                            return (
                                <CircleInfo 
                                    name={(member.name==userName) ? "You" : member.name} 
                                    isAdmin = {member.isAdmin}
                                    id = {member.id}
                                    key={member.id}
                                />
                            )
                        })}
                        <View>
                            <TouchableOpacity style={[styles.roundView, {borderWidth : 1}]} activeOpacity={0.5}>
                                    <View style={styles.textView}>
                                        <EntypoIcons color="#0078E9" size={30} name="plus" />
                                    </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    
                </View>

                <View style={styles.nameView}>
                    <View style={styles.description}>
                        <Text style={[styles.textStyle, styles.usernameText]}>{teamMembersData[selectedMemberID].name.toUpperCase()}</Text>
                        <Text style={[styles.textStyle, styles.youAdmin]}>{selectedMemberID === userID ? "You are the admin" : teamMembersData[selectedMemberID].email }</Text>
                        <Text style={[styles.textStyle, styles.youAdmin]}>{selectedMemberID === userID ? "Only admin can view team dashboard" : teamMembersData[selectedMemberID].phone }</Text>
                    </View>
                    <View>
                        <View style={styles.editView}>
                            <EntypoIcons name='edit' size={15} color='#FFFFFF' />
                        </View>
                    </View>
                </View>

                {selectedMemberID===0 && <View style={styles.allClientsView}>
                    <TotalClientsView text="TOTAL CLIENTS VISITS" index={1}  />
                    <TotalClientsView text="TOTAL CLIENTS REGISTRATION" index={2}  />
                    <TotalClientsView text="TOTAL CLIENTS BOOKING" index={3} />
                </View>}

                {selectedMemberID!==0 && <View>
                    <View style={styles.topView}>
                        <TouchableOpacity activeOpacity={0.7} onPressOut={() => changeSelectedTab(0)} style={styles.sectionView}>
                            <Text style={[styles.textStyle, styles.headText]}>Visits ({teamMembersData[selectedMemberID].client_visits})</Text>
                            <View style={[styles.botLine, {opacity : (selectedTab === 0) ? 1 : 0}]}></View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} onPressOut={() => changeSelectedTab(1)} style={styles.sectionView}>
                            <Text style={[styles.textStyle, styles.headText]}>Registrations ({teamMembersData[selectedMemberID].client_registration})</Text>
                            <View style={[styles.botLine, {opacity : (selectedTab === 1) ? 1 : 0}]}></View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} onPressOut={() => changeSelectedTab(2)} style={styles.sectionView}>
                            <Text style={[styles.textStyle, styles.headText]}>Bookings ({teamMembersData[selectedMemberID].client_bookings})</Text>
                            <View style={[styles.botLine, {opacity : (selectedTab === 2) ? 1 : 0}]}></View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainView}>
                        <EachDayMeetingCards date="08" day="Today" month="Dec" />
                        <EachDayMeetingCards date="12" day="Wed" month="Dec" />
                    </View>
                </View>}

            </ScrollView>
            <View>
                <BottomNavigationTab />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    roundView : {
        borderRadius : 45,
        borderColor : "#0078E9",
        borderWidth : 1,
        justifyContent : "center",
        alignItems : "center",
        margin : 10,
        width : 70,
        height : 70,
    },
    membersView : {
        alignItems : "center",
    },
    textView : {
        alignItems : "center",
    },
    textStyle : {
        fontFamily : "Nunito-Regular",
        letterSpacing : 0.5,
        fontSize : 12,
        color : "#4A4A4A",
    },
    nameText : {
        fontFamily : "Nunito-SemiBold",
        fontSize : 14,
        marginBottom : 3,
    },
    adminText : {
        fontSize : 10,
        fontFamily : "Nunito-SemiBold",
        padding : 3,
        borderRadius : 2,
    },
    arrowdown : {
        position : "absolute",
        bottom : -15,
        left : 20,
    },
    nameView : {
        margin : 20,
        marginBottom : 0,
        backgroundColor : "#E0E7F1",
        borderRadius : 6,
        padding : 20,
        paddingVertical : 10,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
    },
    usernameText : {
        color : "#545454",
        fontFamily : "Nunito-Bold",
        fontSize : 16,
        marginVertical : 5,
    },
    youAdmin : {
        color : "#808080",
        marginVertical : 3,
    },
    description : {
        marginHorizontal : 10, 
    },
    editView : {
        backgroundColor : "#0078E9",
        borderRadius : 30,
        padding : 7,
    },
    allClientsView :{ 
        margin : 20,
    },
    totalClientView : {
        borderRadius : 8,
        backgroundColor : "#FFFFFF",
        borderColor : "#EAEDF1",
        borderWidth : 1,
        marginVertical : 20,
    },
    totalView : {
        backgroundColor : "#EAEDF1",
        padding : 20,
        flexDirection : "row",
        justifyContent : "space-between",
    },
    botView : {
        padding : 20,
        flexDirection : "row",
        
    },
    rightView : {
        flex : 1,
        height : 150,
    },
    totalText : {
        fontFamily : "Nunito-Bold",
        fontSize : 14,
    },
    countText : {
        fontSize : 16,
        fontFamily : "Nunito-Bold",
    },
    typeText : {
        color : "#808080",
        textAlign : "right",
        marginBottom : 10,
    },
    infoView : {
        flexDirection : "row",
        justifyContent : "space-between",
        margin : 10,
        alignItems : "center",
    },
    byName : {
        fontFamily : "Nunito-SemiBold",
    },
    byAmnt : {
        fontSize : 16,
        fontFamily : "Nunito-Bold",
    },
    topView : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        padding : 20,
        marginTop : 15,
        paddingBottom : 0,
    },
    sectionView : {
        
    },
    headText : {
        color : "#545454",
        marginVertical : 5,
    },
    botLine : {
        borderColor : "#0078E9",
        backgroundColor : "#0078E9",
        borderWidth : 2,
        borderRadius : 20,
        marginTop : 5,
    },
    mainView : {
        backgroundColor : "#E0E7F1",
        padding : 20,
    },
});
 
export default TeamDashboardView;