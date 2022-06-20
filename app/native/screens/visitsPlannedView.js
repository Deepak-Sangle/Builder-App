import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import LogoHeader from '../../helpers/LogoHeader';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import BottomNavigationTab from '../../helpers/bottomNavigationTab';
import CustomSearchBar from '../../helpers/customSearchBar';
import CustomButtons from '../../helpers/customButtons';
import EachDayMeetingCards from '../../helpers/eachDayMeetingCards';
import CustomFilterMenu from '../../helpers/customFilterMenu';
import { addMeetingsData } from '../../redux-toolkit/slices/meetingsSlice';
import Loader from '../../helpers/Loader';

import {getDate, getMonth, getDay, compareDates} from '../../utilities/helperFunctions';

const VisitsPlannedView = () => {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(addMeetingsData());
    }, []);

    let meetingData = [];
    let loading = true;
    
    meetingData = useSelector(state => state.meetingsScreen.data);
    loading = useSelector(state => state.meetingsScreen.loading);
    
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTab, setSelectedTab] = useState(0);

    const icon = <EntypoIcons name="plus" size={25} color="#FFFFFF" />

    const newClientVisit = ()=> {

    }

    const changeSelectedTab = (index)=> {
        setSelectedTab(index);
    }

    const [builderList, setBuilderList] = useState([
        {label : "All Builders", value : "all"},
        {label : "Builder 1", value : "builder1"},
        {label : "Builder 2", value : "builder2"},
    ]);

    const [builder, setBuilder] = useState("all");

    const RenderList = ({data})=> {
        data.sort((a,b) => {
            if(selectedTab===0) return (b.meetingDate.substring(0,10) < a.meetingDate.substring(0,10)) ? 1 : -1;
            else return (b.meetingDate.substring(0,10) < a.meetingDate.substring(0,10)) ? -1 : 1;
        })

        
        let prevIndex = 0, ppIndex = 0;
        let count = -1;
        return (
            <View>
                {data.map((meet, i)=> {
                    count++;
                    if(i==data.length-1 || data[i+1].meetingDate.substring(0,10) !== data[i].meetingDate.substring(0,10) ) {
                        ppIndex = prevIndex;
                        prevIndex = i+1;
                        return (
                            <EachDayMeetingCards
                                count={selectedTab===0 ? count : count+1}
                                data = {data.slice(ppIndex,i+1)}
                                key={i} 
                                date={getDate(meet.meetingDate)} 
                                month={getMonth(meet.meetingDate)} 
                                day={getDay(meet.meetingDate)} 
                            />
                        )
                    };
                })}
            </View>
        )
    }

    return (
        <View style={{flex : 1}}>
            {!loading && <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex : 1, borderWidth : 0}}>
                <LogoHeader size={55} text={`VISITS PLANNED (${meetingData.length})`} isThreeDot={true} isBack={true} isImage={false} />
                <View style={{marginHorizontal : 20, marginVertical : 10}}>
                    <CustomSearchBar text="Search Clients" searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                </View>
                <View style={{marginHorizontal : 20, marginVertical : 10}}>
                    <CustomButtons left={true} icon={icon} text="NEW CLIENT VISIT" isDone={true}  pressHandler={newClientVisit} />
                </View>
                <View style={{flex : 1,}}>
                    <View style={styles.topView}>
                        <TouchableOpacity activeOpacity={0.7} onPressOut={() => changeSelectedTab(0)} style={styles.sectionView}>
                            <Text style={[styles.textStyle, styles.headText]}>Upcoming Visits</Text>
                            <View style={[styles.botLine, {opacity : (selectedTab === 0) ? 1 : 0}]}></View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} onPressOut={() => changeSelectedTab(1)} style={styles.sectionView}>
                            <Text style={[styles.textStyle, styles.headText]}>Past Visits</Text>
                            <View style={[styles.botLine, {opacity : (selectedTab === 1) ? 1 : 0}]}></View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.filterView}>
                            <CustomFilterMenu backgroundColor="#BECCE0" list={builderList} item={builder} setItem={setBuilder}  />
                        </View>
                        <RenderList data = {meetingData.filter((meeting) => compareDates(meeting.startTime) === selectedTab )} />
                    </View>
                </View>

            </ScrollView>}
            {!loading && <BottomNavigationTab />}
            {loading && <Loader />}
        </View>
    );
}

const styles = StyleSheet.create({

    textStyle : {
        fontFamily : "Nunito-Regular",
        letterSpacing : 0.5,
        fontSize : 12,
        color : "#4A4A4A",
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
        marginHorizontal : 20,
    },
    headText : {
        color : "#545454",
        marginVertical : 5,
        fontFamily : "Nunito-SemiBold"
    },
    botLine : {
        borderColor : "#0078E9",
        backgroundColor : "#0078E9",
        borderWidth : 2,
        borderRadius : 20,
        marginTop : 5,
    },
    
    mainView : {
        flex : 1,
        elevation : 10,
        borderColor : "#CEE2F5",
        borderTopWidth : 1,
        backgroundColor : "#E0E7F1",
        padding : 20,
    },
    filterView : {
        width : "45%",
    },
});

export default VisitsPlannedView;