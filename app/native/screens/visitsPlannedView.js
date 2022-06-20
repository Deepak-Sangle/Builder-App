import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import LogoHeader from '../../helpers/LogoHeader';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import BottomNavigationTab from '../../helpers/bottomNavigationTab';
import CustomSearchBar from '../../helpers/customSearchBar';
import CustomButtons from '../../helpers/customButtons';
import EachDayMeetingCards from '../../helpers/eachDayMeetingCards';
import CustomFilterMenu from '../../helpers/customFilterMenu';

const VisitsPlannedView = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTab, setSelectedTab] = useState(0);

    const icon = <EntypoIcons name="plus" size={25} color="#FFFFFF" />

    const newClientVisi = ()=> {

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

    return (
        <View style={{flex : 1}}>
            <ScrollView style={{flex : 1}}>
                <LogoHeader size={55} text="VISITS PLANNED (23)" isThreeDot={true} isBack={true} isImage={false} />
                <View style={{marginHorizontal : 20, marginVertical : 10}}>
                    <CustomSearchBar text="Search Clients" searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                </View>
                <View style={{marginHorizontal : 20, marginVertical : 10}}>
                    <CustomButtons left={true} icon={icon} text="NEW CLIENT VISIT" isDone={true}  pressHandler={newClientVisi} />
                </View>

                <View>
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
                        <EachDayMeetingCards date="08" day="Today" month="Dec" />
                        <EachDayMeetingCards date="12" day="Wed" month="Dec" />
                        <EachDayMeetingCards date="14" day="Fri" month="Dec" />
                    </View>
                </View>

            </ScrollView>
            <BottomNavigationTab />
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