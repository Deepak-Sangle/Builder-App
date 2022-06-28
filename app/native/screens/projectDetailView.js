import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'

import BottomNavigationTab from '../../helpers/bottomNavigationTab';
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
import UpcomingEventsCard from '../../helpers/upcomingEventsCard';
import { useSelector } from '../../redux-toolkit/stores';
import { useDispatch } from 'react-redux';
import axiosInstance from '../../Api/AxiosApiInstance';
import Loader from '../../helpers/Loader';

const ProjectDetailView = ({navigation, route}) => {
    const {projectId} = route.params;
    const dispatch = useDispatch();

    const icon = <IonIcon name="call-sharp" size={20} color="#FFFFFF" /> 

    //get all this values from fetch api's
    const [isFav, setIsFav] = useState(false);

    const [managerDetails, setManagerDetails] = useState([
        {name : "Sammer Suri", source : require('../../../android/app/src/main/assets/images/temp_images/dp-1.jpg'), id : 1},
        {name : "Deepak Sangle", source : require('../../../android/app/src/main/assets/images/temp_images/dp-2.png'), id : 2},
        {name : "Naruto Uzumaki", source : require('../../../android/app/src/main/assets/images/temp_images/dp-3.png'), id : 3},
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
    const [rightArrowColor, setRightArrowColor] = useState("#0078E9");
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

    const MAX_ACTION_OPEN = 6;

    const onCall = ()=>{
        
    }

    const clickMore= ()=>{
        setOpen(!open);
    }

    const setArrowColor = () => {
        if(currentIndex ==0) setLeftArrowColor("#A6A6A6");
        else setLeftArrowColor("#0078E9");
        if(currentIndex == managerDetails.length - 1) setRightArrowColor("#A6A6A6");
        else setRightArrowColor("#0078E9");
    }

    useEffect(()=>{
        setArrowColor();
    });

    const getProjectDetails = async () => {
        const response = await axiosInstance.get(`/project/${projectId}`);
        setLoading(false);
        setProjectDetails(response.data);
    }

    useEffect(()=> {
        getProjectDetails();
    }, []);

    const [projectDetails, setProjectDetails] = useState({});
    
    var broadCast = [];
    broadCast = useSelector(state => state.broadCastScreen.data);
  
    var temp = [];
    temp = Object.keys(broadCast);
  
    var updateDetails = [];
    for (var i = 0; i < temp.length; i++) {
      var first = temp[i].split('_');
      updateDetails.push({
        title: first[0] + '\n' + first[1],
        id: i + 1,
        value: broadCast[temp[i]].length,
        origVal: temp[i],
        key: i + 1,
      });
    }
    return (
        <View style={styles.container}>
            {!loading && <ScrollView nestedScrollEnabled={true} style={{flex : 1}}>
                
                <LogoHeader text={"RERA No. "+ projectDetails.reraNumber} isBack={true} isThreeDot={true} source={{uri : projectDetails.logo}} size={75}   />
                
                <View style={styles.allCardsView}>
                    <UpcomingEventsCard textblack={false} arrowColor="#00B055" backgroundColor="#00B055" heading="UPCOMING EVENT" date="Dec 15, 2020 at 6 p.m" address="Radission, Sohna Road" description="Golf Estate Phase 2 Launch Party" />
                    <UpcomingEventsCard textblack={true} arrowColor="#0078E9" backgroundColor="#F9D56B" heading="RUNNING POLL" date="Ends on: Dec 15, 2020" description="What should be the Pt should be the Pt should be the PLC charges" />
                </View>

                {projectDetails.images!=undefined && <HorizontalImageScroll sourceKey="url" size={350} data={projectDetails.images}  />}

                {projectDetails.address && <View style={styles.map}>
                    <View style={{flex : 1}}>
                        <Text style={[styles.textStyle, styles.address]}>{projectDetails.address}</Text>
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
                </View>}
                
                {managerDetails.map((manager,index)=>{
                    if(index != currentIndex) return ;
                    return(
                        <View key={manager.id}>
                            <View style={styles.manager}>
                                <View style={styles.managerTop}>
                                    <Text style={[styles.textStyle, styles.managerText]}>Relationship Managers ({managerDetails.length})</Text>
                                    <View style={styles.arrowsView}>
                                        <TouchableOpacity onPress={(index) => backButtonPressed(index)}><MaterialIcon style={{marginHorizontal : 10}} name='arrow-back-ios' size={20} color={leftArrowColor} /></TouchableOpacity>
                                        <TouchableOpacity onPress={(index) => forwardButtonPressed(index)}><MaterialIcon style={{marginHorizontal : 10}} name='arrow-forward-ios' size={20} color={rightArrowColor} /></TouchableOpacity>
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

            </ScrollView>}
            {!loading && <View>
                <BottomNavigationTab />
            </View>}
            {loading && <Loader />}
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
    textStyle : {
        fontFamily : "Nunito",
        letterSpacing : 0.5,
        fontSize : 12,
        color : "#FFFFFF",
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