import React, { useEffect, useState } from 'react';
import { Linking, Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import BottomNavigationTab from '../../helpers/bottomNavigationTab';
import CustomSearchBar from '../../helpers/customSearchBar';
import LogoHeader from '../../helpers/LogoHeader';

const NewsView = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const NewsCard = (props) => {
        const source = props.source;
        const headline = props.headline;
        const time = props.time;
        const imageSource = props.imageSource;

        return (
            <TouchableOpacity activeOpacity={0.5} style={styles.newsCardView}>
                <View style={styles.leftView}>
                    <Image 
                        source={imageSource}
                        resizeMode='cover'
                        style={styles.imgView}
                    />
                </View>
                <View style={styles.rightView}>
                    <View style={styles.logoView}>
                        <Image 
                            source={source}
                            resizeMode='contain'
                            style={styles.logo}
                        />
                    </View>
                    <Text style={[styles.textView, styles.heading]}>{headline}</Text>
                    <Text style={[styles.textView, styles.time]}>{time} ago</Text>
                    
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{flex : 1,}}>
            <ScrollView>
                <LogoHeader size={55} text="NEWS" isThreeDot={true} isBack={true} isImage={false} />

                <View style={styles.searchBarView}>
                    <CustomSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} text="Search News" />
                </View>

                <View>
                    <NewsCard 
                        source = {require('../../../android/app/src/main/assets/images/temp_images/News2.png')}  
                        imageSource = {require('../../../android/app/src/main/assets/images/temp_images/building1.jpg')}  
                        headline = "Lorem ipsum dolor sit amet piserish."
                        time = "2 hrs"
                    />
                    <NewsCard 
                        source = {require('../../../android/app/src/main/assets/images/temp_images/News1.png')}  
                        imageSource = {require('../../../android/app/src/main/assets/images/temp_images/building2.jpg')}  
                        headline = "Lorem ipsum dolor sit amet piserish."
                        time = "5 mins"
                    />
                    <NewsCard 
                        source = {require('../../../android/app/src/main/assets/images/temp_images/News2.png')}  
                        imageSource = {require('../../../android/app/src/main/assets/images/temp_images/building3.jpg')}  
                        headline = "Lorem ipsum dolor sit amet piserish."
                        time = "3 days"
                    />
                    <NewsCard 
                        source = {require('../../../android/app/src/main/assets/images/temp_images/News1.png')}  
                        imageSource = {require('../../../android/app/src/main/assets/images/temp_images/building1.jpg')}  
                        headline = "Lorem ipsum dolor sit amet piserish."
                        time = "2 hrs"
                    />

                    
                </View>

                

            </ScrollView>
            <View>
                <BottomNavigationTab />
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    searchBarView : {
        marginHorizontal : 20,
    },
    newsCardView : {
        margin : 20,
        flexDirection : "row",
        justifyContent :"space-between",
        height : 150,
    },
    textView : {
        color : "#4A4A4A",
        letterSpacing : 0.5,
        fontFamily : "Nunito-Regular",
        fontSize : 12,
    },
    leftView : {
        flex : 2.5,
    },
    rightView : {
        justifyContent :"space-around",
        paddingHorizontal : 10,
        flex : 3
    },
    imgView : {
        borderRadius : 4,
        width : "100%",
        height : "100%",
    },
    logoView : {
        height : 70,
        justifyContent : "center",
        marginVertical : 5
    },
    logo : {
        aspectRatio : 1,
        height : "140%",
    },
    heading : {
        fontFamily : "Nunito-Bold",
        fontSize : 14,
        marginVertical : 5,
    },
    time : {
        marginVertical : 5,
        color : "#A6A6A6",
    }

});

export default NewsView;