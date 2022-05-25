import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'

import BottomNavigationTab from '../../helpers/bottomNavigationTab';
import CustomArrow from '../../helpers/customArrow';
import CustomButtons from '../../helpers/customButtons';
import LogoHeader from '../../helpers/LogoHeader';
import UpdateCard from '../../helpers/updateCard';
import HorizontalImageScroll from '../../helpers/horizontalImageScroll';
import HorizontalDataScroll from '../../helpers/HorizontalDataScroll';
import CustomIcons from '../../helpers/CustomIcons';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

const ProjectDetailView = () => {

    const icon = <IonIcon name="call-sharp" size={20} color="#FFFFFF" /> 

    //get all this values from fetch api's
    const source = require('../../../android/app/src/main/assets/images/temp_images/Bitmap-1.png');
    const rera_no = "HERA34535D3";      
    const address = "DLF Phase 5, Sector 54, 122002 - Gurgaon";
    const [isFav, setIsFav] = useState(false);

    const [imagesList, setImagesList] = useState([
        {source : require('../../../android/app/src/main/assets/images/temp_images/img.jpg'),   id : 1},
        {source : require('../../../android/app/src/main/assets/images/temp_images/img1.jpeg'), id : 2},
        {source : require('../../../android/app/src/main/assets/images/temp_images/img3.jpg'),  id : 3},
    ]);

    const [managerDetails, setManagerDetails] = useState([
        {name : "Sammer Suri", source : require('../../../android/app/src/main/assets/images/temp_images/dp-1.jpg'), id : 1},
        {name : "Deepak Sangle", source : require('../../../android/app/src/main/assets/images/temp_images/dp-2.png'), id : 2},
        {name : "Naruto Uzumaki", source : require('../../../android/app/src/main/assets/images/temp_images/dp-3.png'), id : 3},
    ]);
    
    const [cardUpdates, setCardUpdates] = useState([
        {title : "Lorem ipsum dolor sit amet", description : "Curabitur porttitor tellus et libero dignissim, commodo vulputate augue condimentum. Etiam id diam elit.", file : "Update-Rate-List.xls", youLiked : true, likes: "345",time : "39 mins", id: 1 },
        {title : "Lorem ipsum dolor sit amet", description : "Curabitur porttitor Curabitur porttitor tellus et libero dignissim, commodo tellus et libero dignissim, commodo vulputate augue condimentum. Etiam id diam elit.", youLiked : false, likes: "345", time : "2 hours", id: 2, images : [require('../../../android/app/src/main/assets/images/temp_images/building1.jpg'), require('../../../android/app/src/main/assets/images/temp_images/building2.jpg')]},
    ]);
    
    const [updateDetails, setUpdateDetails] = useState([
        {title : "General Updates", value : "1546", id : 1},
        {title : "Broker sales Incentives", value : "355", id : 2},
        {title : "Offers for Clients", value : "567", id : 3},
        {title : "News Updates", value : "256", id : 4},
        {title : "Sales Update ", value : "123", id : 5},
        {title : "New Update", value : "729", id : 6},
    ]);

    const [actionsDetails, setActionsDetails] = useState([
        {icon : <AwesomeIcon name="building" size={20} color="#3D6386" />, id : 1, name: "Project info"},
        {icon : <IonIcon name="pricetags" size={20} color="#3D6386" />, id : 2, name: "Pricing"},
        {icon : <MaterialCommunityIcon name="form-select" size={20} color="#3D6386" />, id : 9, name: "Bookmark Form / LOI"},
        {icon : <EntypoIcon name="images" size={20} color="#3D6386" />, id : 3, name: "Plan Layout"},
        {icon : <SimpleIcon name="calculator" size={20} color="#3D6386" />, id : 4, name: "Calculation Sheet"},
        {icon : <SimpleIcon name="calculator" size={20} color="#3D6386" />, id : 7, name: "Calculation Sheet"},
        {icon : <MaterialCommunityIcon name="form-select" size={20} color="#3D6386" />, id : 6, name: "Bookmark Form / LOI"},
        {icon : <MaterialIcon name="people-alt" size={20} color="#3D6386" />, id : 8, name: "Project Team"},
    ]);

    const viewMap = () => {

    }

    const addFav = () => {
        setIsFav(!isFav);
    }

    const backButtonPressed = (index) =>{
        if(currentIndex > 0) setCurrentIndex(currentIndex-1);
    }

    const forwardButtonPressed = () => {
        if(currentIndex < managerDetails.length - 1) setCurrentIndex(currentIndex+1); 
    }
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [leftArrowColor, setLeftArrowColor] = useState("#A6A6A6");

    const [open, setOpen] = useState(false);
    const MAX_ACTION_OPEN = 6;

    const onCall = ()=>{
        
    }

    const clickMore= ()=>{
        setOpen(!open);
    }

    useEffect(()=>{
        if(currentIndex ==0) setLeftArrowColor("#A6A6A6");
        else setLeftArrowColor("#0078E9");
    });

    return (
        <View style={styles.container}>
            <ScrollView nestedScrollEnabled={true} style={{flex : 1}}>
                
                <LogoHeader text={"RERA No. "+ rera_no} isBack={true} isThreeDot={true} source={source} size={75}   />
                
                <View style={styles.allCardsView}>

                    <TouchableOpacity activeOpacity={0.5} style={[styles.cardView, {backgroundColor : "#00B055" }]}>
                        <View style={{marginRight : 50, flex : 1}}>
                            <Text style={[styles.textStyle, styles.heading]}>UPCOMING EVENT</Text>
                            <View horizontal={true}>
                                <Text numberOfLines={1} style={[styles.textStyle, styles.description]}>Golf Estate Phase 2 Launch Party</Text>
                            </View>
                            <Text style={[styles.textStyle, styles.line]}>Radission, Sohna Road</Text>
                            <Text style={[styles.textStyle, styles.line]}>Dec 15, 2020 at 6 p.m</Text>
                        </View>
                        <CustomArrow color="#00B055" />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style={[styles.cardView, {backgroundColor : "#F9D56B" }]}>
                        <View style={{marginRight : 50, flex : 1}}>
                            <Text style={[styles.textStyle, styles.heading, {color : "#8B6B0F"}]}>RUNNING POLL</Text>
                            <View horizontal={true}>
                                <Text numberOfLines={1} style={[styles.textStyle, styles.description, {color : "#202020"}]}>What should be the Pt should be the Pt should be the PLC charges fo…</Text>
                            </View>
                            <Text style={[styles.textStyle, styles.line, {color : "#4A4A4A"}]}>Ends on: Dec 15, 2020</Text>
                        </View>
                        <CustomArrow color="#0078E9" />
                    </TouchableOpacity>

                </View>

                <HorizontalImageScroll size={350} data={imagesList}  />

                <View style={styles.map}>
                    <View style={{flex : 1}}>
                        <Text style={[styles.textStyle, styles.address]}>{address}</Text>
                        <View style={styles.mapView}>
                            <CustomIcons name="location-pin" size={20} color="#0078E9" />
                            <TouchableOpacity activeOpacity={0.6} onPress={viewMap}>
                                <Text style={[styles.textStyle, styles.view]}>View on map</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={addFav} activeOpacity={0.6} style={styles.favView}>
                        {!isFav && <MaterialIcon style={{textAlign : "center"}} name="star-outline" size={40} color="#0078E9"/>}                        
                        {isFav && <MaterialIcon style={{textAlign : "center"}} name="star" size={40} color="#0078E9"/>}                        
                        <Text style={[styles.textStyle, styles.addtoFav]}> Add to Fav </Text>
                    </TouchableOpacity>
                </View>
                
                {managerDetails.map((manager,index)=>{
                    if(index != currentIndex) return ;
                    return(
                        <View key={manager.id}>
                            <View style={styles.manager}>
                                <View style={styles.managerTop}>
                                    <Text style={[styles.textStyle, styles.managerText]}>Relationship Managers ({managerDetails.length})</Text>
                                    <View style={styles.arrowsView}>
                                        <TouchableOpacity onPress={(index) => backButtonPressed(index)}><MaterialIcon style={{marginHorizontal : 10}} name='arrow-back-ios' size={20} color={leftArrowColor} /></TouchableOpacity>
                                        <TouchableOpacity onPress={(index) => forwardButtonPressed(index)}><MaterialIcon style={{marginHorizontal : 10}} name='arrow-forward-ios' size={20} color={"#0078E9"} /></TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.managerBot}>
                                    <View style={styles.infoView}>
                                        <View style={[styles.dpImg, {marginRight : 10}]}>
                                            <Image 
                                                source={manager.source}
                                                resizeMode="cover"
                                                style={styles.dpImg}
                                            />
                                        </View>
                                        <Text style={[styles.textStyle, styles.managername]}>{manager.name}</Text>
                                    </View>
                                    <View style={styles.btnView}>
                                        <CustomButtons left={true} icon={icon} radius={50} width={50} text="Call" isDone={true} margin={8} pressHandler={onCall} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        )
                    })}

                    <View style={styles.actionsView}>
                        <Text style={[styles.textStyle, styles.headingText]}>QUICK ACTION</Text>
                        <View style={styles.actionListView}>
                            {actionsDetails.map((action,index)=>{
                                if(!open && index>=MAX_ACTION_OPEN) return ;
                                return (
                                    <View key={action.id} style={styles.action}>
                                        {action.icon}
                                        <Text style={[styles.textStyle, styles.actionName]}>{action.name}</Text>
                                    </View>
                                )
                            })}
                        </View>

                        <TouchableOpacity onPress={clickMore} activeOpacity={0.5}>
                            <View style={{flexDirection : "row", justifyContent : "center"}}>
                                <View style={styles.moreView}>
                                    <Text style={[styles.textStyle, styles.moreText]}>more</Text>
                                    {!open && <MaterialIcon name="keyboard-arrow-down" size={20} color="#0078E9" />}
                                    {open && <MaterialIcon name="keyboard-arrow-up" size={20} color="#0078E9" />}
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <HorizontalDataScroll data={updateDetails} heading="PROJECT UPDATES"  />

                    <UpdateCard setDetails={setCardUpdates} details={cardUpdates} />

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
    allCardsView : {
        paddingHorizontal : 15,
    },
    cardView : {
        padding : 25,
        borderRadius : 8,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        marginBottom : 20,
    },
    textStyle : {
        fontFamily : "Nunito",
        letterSpacing : 0.5,
        fontSize : 12,
        color : "#FFFFFF",
    },
    heading : {
        fontFamily : "Nunito-Bold",
        color : "#D4E8DE",
        fontSize : 14,
    },
    description : {
        fontFamily : "Nunito-Bold",
        marginVertical : 5,
        fontSize : 13,
    },
    line : {
        fontFamily : "Nunito-SemiBold",
    },
    imgView : {
        marginHorizontal : 15,
        height : 350,
        width : 350,
    },
    imgStyle : {
        height : 350,
        width : 350,
        borderRadius : 10,
    },
    address : {
        color : "#4A4A4A",
        fontSize : 13,
    },
    map : {
        flexDirection : "row",
        justifyContent : "space-between",
        paddingHorizontal : 15,
        paddingVertical : 20,
        alignItems : "center",
    },
    mapView : {
        marginVertical : 5,
        flexDirection : "row",
        alignItems : "center",
    },
    view : {
        color : "#0078E9",
        fontSize : 13,
        marginHorizontal : 10,
    },
    favView : {
        justifyContent : "center",
        borderWidth : 1,
        padding : 5,
        paddingHorizontal : 7,
        borderRadius : 4,
        borderColor : "#EAEDF1",
        backgroundColor : "#FFFFFF",
    },
    addtoFav : {
        color : "#4A4A4A",
        textAlign : "center",
        fontFamily : "Nunito-SemiBold",
        fontSize : 11,
    },
    manager : {
        marginHorizontal : 15,
        borderRadius : 6,
        backgroundColor : "#FFFFFF",
        borderColor : "#E0E7EE",
        borderWidth : 1,
        padding : 20,
        marginBottom : 20,
    },
    managerTop : {
        flexDirection : "row",
        justifyContent : "space-between",

    },  
    managerText : {
        color : "#4A4A4A",
        fontFamily : "Nunito-Bold",
    },
    arrowsView : {
        flexDirection : "row",
    },
    infoView : {
        flexDirection : "row",
        alignItems : "center",
        flex : 1,
    },
    dpImg : {
        borderRadius : 100,
        height : 60,
        width :  60,
    },
    managername : {
        fontFamily : "Nunito-Bold",
        color : "#4A4A4A",
        marginHorizontal : 10,
    },
    btnView : {
        flexDirection : "row",
        justifyContent : "flex-end",
    },
    managerBot : {
        flexDirection : "row",
        justifyContent : "space-between",
        marginVertical : 10,
        alignItems : "center",
    },
    actionsView : {
        paddingHorizontal : 15,
    },
    headingText : {
        marginVertical : 5,
        fontFamily : "Nunito-Bold",
        color : "#4A4A4A",
        marginBottom : 10,
    },
    actionListView : {
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "space-between",
    },
    action : {
        flexDirection : "row",
        width : "48%",
        alignItems : "center",
        borderRadius : 4,
        borderColor : "#BCD5ED",
        backgroundColor : "#E9F0F8",
        borderWidth : 1,
        padding : 15,
        marginBottom : 10,
    },
    actionName : {
        color : "#3E506D",
        fontFamily : "Nunito-SemiBold",
        marginHorizontal : 10,
    },
    moreView : {
        flexDirection : "row",
        alignItems : "center",
        borderRadius : 40,
        borderWidth : 1,
        borderColor : "#DBE5F3",
        padding : 10,
        backgroundColor : "#DBE5F3",
        paddingHorizontal : 20,
    },
    moreText : {
        color : "#0078E9",
        fontFamily : "Nunito-SemiBold",
    },

});
 
export default ProjectDetailView;