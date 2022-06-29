import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'

import CustomButtons from '../../helpers/customButtons';
import CustomCompanyList from '../../helpers/customCompanyList';
import LogoHeader from '../../helpers/LogoHeader';
import CustomFilterMenu from '../../helpers/customFilterMenu';

import Icon from 'react-native-vector-icons/AntDesign';
import BottomNavigationTab from '../../helpers/bottomNavigationTab';
import CustomSearchBar from '../../helpers/customSearchBar';
import CustomGradient from '../../helpers/customGradient';

import { useSelector } from '../../redux-toolkit/stores';

const BuildersView = ({navigation}) => {
    
    const locationList = useSelector(state => state.walkInScreen.builderViewLoc);

    const [location, setLocation] = useState(locationList[0].value);

    const [selectedTab, setSelectedTab] = useState(0);

    const [searchQuery, setSearchQuery] = useState("");

    const allBuilders = useSelector(state => state.dashboardScreen.allBuilders);
    const myBuilders = useSelector(state => state.dashboardScreen.data);

    // const company = (selectedTab===0) ? allBuilders : myBuilders ; 

    const [data, setData] = useState([
        {title : "All Builders", value : allBuilders.length, id : 1},
        {title : "Connected Builders", value : myBuilders.length, id : 2},
        {title : "Favorite Projects", value : 0, id : 3},
    ]);


    const [company,setCompany] = useState([
        {image_url : 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/a48647e2-d478-415e-b0bf-3ed2fbc6811d/logo/', num_of_projects : 18, id: 1, isTag : true},
        {image_url : 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/2cf1b0ea-5783-431c-8d91-a97b8c4ce41b/logo/1655357093', num_of_projects : 12, id: 2, isTag : false},
        {image_url : 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/2cf1b0ea-5783-431c-8d91-a97b8c4ce41b/logo/1655357093', num_of_projects : 12, id: 3, isTag : false},
        {image_url : 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/a48647e2-d478-415e-b0bf-3ed2fbc6811d/logo/', num_of_projects : 18, id: 4, isTag : true},
        {image_url : 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/2cf1b0ea-5783-431c-8d91-a97b8c4ce41b/logo/1655357093', num_of_projects : 12, id: 5, isTag : false},
        {image_url : 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/2cf1b0ea-5783-431c-8d91-a97b8c4ce41b/logo/1655357093', num_of_projects : 18, id: 7, isTag : false},
        {image_url : 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/a48647e2-d478-415e-b0bf-3ed2fbc6811d/logo/', num_of_projects : 18, id: 8, isTag : false},
        {image_url : 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/2cf1b0ea-5783-431c-8d91-a97b8c4ce41b/logo/1655357093', num_of_projects : 12, id: 9, isTag : false},
        {image_url : 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/a48647e2-d478-415e-b0bf-3ed2fbc6811d/logo/', num_of_projects : 12, id: 10, isTag : false},
        {image_url : 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/2cf1b0ea-5783-431c-8d91-a97b8c4ce41b/logo/1655357093', num_of_projects : 18, id: 4, isTag : true},
    ]);

    const onProjectPressed = () => {
        navigation.navigate('PreAccessView', {builder : '2cf1b0ea-5783-431c-8d91-a97b8c4ce41b'});       //TODO - Deepak - hardcoded for now, will change later
    }

    const BuildersTab = ()=>{ 
        return(
            <View style={styles.allBuildersView}>
                {data.map((val, index)=>{
                    const BoxStyle = {
                        backgroundColor : selectedTab===index ? "#0078E9" : "#FFFFFF",
                        borderColor : selectedTab===index ? "#0078E9" : "#B5C5DC",
                    }
                    return(
                        <TouchableOpacity activeOpacity={1} onPressOut={()=> setSelectedTab(index)} key={val.id}  style={styles.buildercomplete}>
                            <View style={[styles.eachbuilderView, BoxStyle]}>
                                <Text style={[styles.textStyle, styles.builderText, {color : selectedTab===index ? "#FFFFFF" : "#545454"}]} >{val.title}</Text>
                                <View style={{flexDirection : "row", alignItems : "center"}}>
                                    <Text style={[styles.textStyle, styles.builderValue, {color : selectedTab===index ? "#FFFFFF" : "#545454"}]}>{val.value}</Text>
                                    {index===0 && <View style={{marginHorizontal : 8}}>
                                        <CustomGradient fontSize={8} isSmall={true} text="1 NEW" />
                                    </View>}
                                </View>
                            </View>
                            {selectedTab===index && <View style={styles.arrowView}>
                                <Icon style={styles.arrowdown} name='caretdown' size={30} color='#0078E9' />
                            </View>}
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

    return (
        <View style={{flex : 1,}}>
            <ScrollView >
                <LogoHeader size={55} text="BUILDERS" textTop={true} isThreeDot={true} isBack={true} isImage={false} />
                <View style={styles.searchBar}>
                    <CustomFilterMenu backgroundColor="#FFFFFF" radius={30} isIcon={true} list={locationList} item={location} setItem={setLocation} />
                </View>
                <View style={styles.builderScrollView}>
                    <BuildersTab />
                </View>
                <View style={styles.searchBarView}>
                    <CustomSearchBar text="Search builders or project" searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </View>
                <View style={styles.companylist}>
                    <CustomCompanyList pressHandler={onProjectPressed} data={company} text="CONNECTED"/>
                </View>
            </ScrollView>
            <View>
                <BottomNavigationTab />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    builderScrollView : {
        margin : 10,
    },
    textStyle : {
        fontFamily : "Nunito-SemiBold",
        letterSpacing : 0.5,
        fontSize : 12,
        color : "#545454",
    },
    searchBar : {
        marginHorizontal : 100,
        marginTop : -20,
    },
    allBuildersView : {
        flexDirection : "row",
    },
    builderText : {
        lineHeight : 18,
    },
    builderValue : {
        fontFamily : "Nunito-Bold",
        justifyContent : "space-between",
        fontSize : 14,  
    },
    buildercomplete : {
        flex : 1,
        justifyContent : "space-between",
        height : 100,
        marginHorizontal : 10,
    },
    arrowdown : {
        marginTop : -15,
    },
    arrowView : {
        alignItems : "center",
    },
    eachbuilderView : {
        height : 100,
        borderRadius : 6,
        backgroundColor : "#FFFFFF",
        borderRadius : 6,
        borderWidth : 1,
        borderColor : "#B5C5DC",
        padding : 15,
        justifyContent : "space-between",
    },
    searchBarView : {
        marginHorizontal : 20,
        marginVertical : 30,
    },
    companylist : {
        backgroundColor : "white",
        // height : 525,
        marginHorizontal : 20,
        flex : 1,
    },
});

export default BuildersView;