import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'

import CustomButtons from '../../helpers/customButtons';
import CustomCompanyList from '../../helpers/customCompanyList';
import LogoHeader from '../../helpers/LogoHeader';
import CustomFilterMenu from '../../helpers/customFilterMenu';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import jwt_decode from "jwt-decode";
import { token} from '../../Constants/projectConstants';
import BottomNavigationTab from '../../helpers/bottomNavigationTab';
import { useDispatch, useSelector } from '../../redux-toolkit/stores';
import { PropertyData } from './clientRegScreen/dummyDataClientReg/PropertyData';
import {createProjectList} from '../../utilities/helperFunctions';
import axiosInstance from '../../Api/AxiosApiInstance';
import Loader from '../../helpers/Loader';

const PreAccessView = ({navigation, route}) => {
    const {builder} = route.params;
    
    const source = {uri : builder.groupLogo!=undefined ? builder.groupLogo : builder.logo};
    const icon = <MaterialIcon name="arrow-forward-ios" size={15} color="#FFFFFF" />

    const dispatch = useDispatch();

    const [projectType, setProjectType] = useState(PropertyData[0].value);
    const [user, setUser] = useState(null);
    const [projectData, setProjectData] = useState([]);
    const [loading, setLoading] = useState(true);

    let projectList = createProjectList(projectData, projectType);

    const onClick = () => {
        navigation.navigate('PlansPricingView');
    }

    const selectedProject = (projectId)=> {
        if(access)
            navigation.navigate('ProjectDetailView', {projectId});
    }

    const getBuildersData = async () => {
        if(builder.groupId!=undefined) {
            const response = await axiosInstance.get(`/project/group/${builder.groupId}`);
            setProjectData(response.data);
        }
        else {
            const response = await axiosInstance.get(`/project/group/${builder.id}`);
            setProjectData(response.data);
        }
        setLoading(false);
    }

    useEffect(()=> {
        setUser(jwt_decode(token));
        getBuildersData();
    }, []);

    const access = user!=undefined ? !user.isTrialEligible : false;

    return (
        <View style={styles.container}>
            <ScrollView style={{flex : 1}} nestedScrollEnabled={true}>
                <LogoHeader isBack={true} isThreeDot={true} source={source} size={75} topPadding={20}  />
                {!access && <View>
                    <View style={styles.accessView}>
                        <Icon style={styles.minusStyle} name='minuscircle' color="#E84242" size={25} />
                        <Text style={[styles.textStyle,styles.accessText]}>You do not have access</Text>
                    </View>
                </View>}
                <View style={styles.projectView}>
                    <CustomFilterMenu  list={PropertyData} item={projectType} setItem={setProjectType}  />
                    <View style={[styles.flatListView, {height : access ? 625 : 500,}]}>
                        {!loading && projectList.length>0 && <CustomCompanyList pressHandler={(projectId) => selectedProject(projectId)} numOfRows={access ? 5 : 4} height={125} text="New Launch" data={projectList} />}
                        {!loading && projectList.length==0 && <Text style={[styles.textStyle, styles.noData]}>No data available</Text>}
                        {loading && <Loader />}
                    </View>
                </View>
                {!access && <View style={styles.plansView}>
                    <Text style={[styles.gainText, styles.textStyle]}>To gain access, check</Text>
                    <View style={styles.btnView}>
                        <CustomButtons right={true} icon={icon} margin={10} text="PLANS & PRICING" isDone={true} pressHandler={onClick}  />
                    </View>
                </View>}
                {!access && <View style={styles.codeView}>
                    <Text style={styles.textStyle}>Or if you have access code from builder?</Text>
                    <TouchableOpacity><Text style={styles.clickText}> Click Here</Text></TouchableOpacity>
                </View>}
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
        justifyContent : "space-between",
    },
    accessView : {
        flexDirection : "row",
        backgroundColor : "#F2EBEB",
        paddingVertical : 13,
        justifyContent : "center",
        alignItems : 'center',
    },
    textStyle : {
        fontFamily : "Nunito-Regular",
        letterSpacing : 0.5,
        fontSize : 13,
        color : "#4A4A4A",
    },
    accessText : {
        fontFamily : "Nunito-SemiBold",
        textAlign : "center",
        color : "#B21313",
        marginHorizontal : 5,
    },
    minusStyle : {
        marginHorizontal : 5,
        flexDirection : "row",
        alignSelf : "center",
        paddingTop : 2,
        textAlign : "center",
    },
    projectView : {
        flex : 1,
        paddingHorizontal : 20,
    },
    flatListView : {
        marginTop : 10,
        backgroundColor : "#FFFFFF",
    },
    plansView : {
        flexDirection : "row",
        alignItems : "center",
        padding : 20,
        justifyContent : "flex-start",
        backgroundColor : "#E0E7F1",
    },
    gainText : {
        marginHorizontal : 10,
    },
    btnView : {
        width : 200,
    },
    codeView : {
        flexDirection : "row",
        padding : 20,
        alignItems : "center",
        backgroundColor : "#D6DEEA",
    },
    clickText : {
        color : "#0078E9",
    },
    noData : {
        margin : 20,
        color : "red",
        fontSize : 15,
        textAlign : "center",

    }
})

export default PreAccessView;