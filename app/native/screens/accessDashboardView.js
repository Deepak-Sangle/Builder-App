import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native'

import CustomButtons from '../../helpers/customButtons';
import CustomCompanyList from '../../helpers/customCompanyList';
import LogoHeader from '../../helpers/LogoHeader';
import CustomFilterMenu from '../../helpers/customFilterMenu';

import EntypoIcons from 'react-native-vector-icons/Entypo';

import BottomNavigationTab from '../../helpers/bottomNavigationTab';
import CustomSearchBar from '../../helpers/customSearchBar';
import ImageCorousel from '../../helpers/imageCarousel';
import HorizontalImageScroll from '../../helpers/horizontalImageScroll';
import HorizontalDataScroll from '../../helpers/HorizontalDataScroll';
import { Divider } from 'react-native-paper';
import UpdateCard from '../../helpers/updateCard';

const DashBoardView = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const [imageList, setImageList] = useState([
        {source : require("../../../android/app/src/main/assets/images/temp_images/building1.jpg"), id: 1,},
        {source : require("../../../android/app/src/main/assets/images/temp_images/building2.jpg"), id: 2,},
        {source : require("../../../android/app/src/main/assets/images/temp_images/building3.jpg"), id: 3, },
    ]);

    const IMAGE_SIZE = imageList.length ;
    const TIME_INTERVAL = 1000;

    const changeImageView = () => {
        setInterval(() => {
            if(selectedIndex <= IMAGE_SIZE - 1)
                setSelectedIndex(selectedIndex+1);
            else setSelectedIndex(0);
        }, TIME_INTERVAL);
    };

    const [buildersImage, setBuildersImage] = useState([
        {source : require("../../../android/app/src/main/assets/images/temp_images/Bitmap-4.png"), id: 4},
        {source : require("../../../android/app/src/main/assets/images/temp_images/Bitmap-5.png"), id: 5},
        {source : require("../../../android/app/src/main/assets/images/temp_images/Bitmap.png"),   id: 6},  
        {source : require("../../../android/app/src/main/assets/images/temp_images/Bitmap-1.png"), id: 1},
        {source : require("../../../android/app/src/main/assets/images/temp_images/Bitmap-2.png"), id: 2},
        {source : require("../../../android/app/src/main/assets/images/temp_images/Bitmap-3.png"), id: 3},
    ]);
    
    const [updateDetails, setUpdateDetails] = useState([
        {title : "General Updates", value : "1546", id : 1},
        {title : "Broker sales Incentives", value : "355", id : 2},
        {title : "Offers for Clients", value : "567", id : 3},
        {title : "News Updates", value : "256", id : 4},
        {title : "Sales Update ", value : "123", id : 5},
        {title : "New Update", value : "729", id : 6},
    ]);


    const [cardUpdates, setCardUpdates] = useState([
        {title : "Lorem ipsum dolor sit amet", name : "M3M Sierra 68", companyLogo : require('../../../android/app/src/main/assets/images/temp_images/Bitmap-5.png'), description : "Curabitur porttitor tellus et libero dignissim, commodo vulputate augue condimentum. Etiam id diam elit.", file : "Update-Rate-List.xls", youLiked : true, likes: "35",time : "39 mins", id: 1 },
        {title : "Lorem ipsum dolor sit amet", name : "M3M 65 Avenue", companyLogo : require('../../../android/app/src/main/assets/images/temp_images/Bitmap-4.png'), description : "Curabitur porttitor Curabitur porttitor tellus et libero dignissim, commodo tellus et libero dignissim, commodo vulputate augue condimentum. Etiam id diam elit.", youLiked : false, likes: "25", time : "2 hours", id: 2, images : [require('../../../android/app/src/main/assets/images/temp_images/building1.jpg'), require('../../../android/app/src/main/assets/images/temp_images/building2.jpg')]},
        {title : "Lorem ipsum dolor sit lorem iipsum volar morghulis amet", name : "M3M 65 Avenue", description : "Curabitur porttitor Curabitur porttitor tellus et libero dignissim, commodo tellus et libero dignissim, commodo vulputate augue condimentum. Etiam id diam elit.", youLiked : false, likes: "345", time : "2 hours", id: 3, },
    ]);
    
    useEffect(()=>{
        // changeImageView();    //Need to implement this :((
    })

    const BUILDERS_SIZE = buildersImage.length;

    return (
        <View style={styles.container}>
            <ScrollView nestedScrollEnabled={true} style={styles.container}>
                <LogoHeader topPadding={30} isThreeDot={true} size={55} />            
                
                <View style={styles.searchBar}>
                    <CustomSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} text="Search for builder or properties" />
                </View>
                
                <ImageCorousel imageList={imageList} heading="TOP OFFERS" />

                <View style={{marginVertical : 20}}>
                    <Text style={[styles.textStyle, styles.headers, {marginBottom : 20}]}>BUILDERS ONBOARD</Text>
                    <HorizontalImageScroll resizeMode="contain" data={buildersImage} size={100} />
                </View>

                <Divider />

                <View style={{marginVertical : 20}}>
                    <HorizontalDataScroll data={updateDetails} heading="PROJECT UPDATES" />
                </View>

                <View>
                    <UpdateCard details={cardUpdates} setDetails={setCardUpdates} />
                </View>

            </ScrollView>
            <View>
                <BottomNavigationTab />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    searchBar : {
        margin : 15,
    },
    offersView : {
        marginVertical : 10,
    },
    textStyle : {
        fontFamily : "Nunito",
        fontSize : 12,
        letterSpacing : 0.5,
    },
    headers : {
        fontFamily : "Nunito-Bold",
        color : "#545454",
        marginHorizontal : 15,
    },

    
});

export default DashBoardView;