import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

import CustomButtons from '../../helpers/customButtons';
import CustomCompanyList from '../../helpers/customCompanyList';
import LogoHeader from '../../helpers/LogoHeader';
import CustomFilterMenu from '../../helpers/customFilterMenu';

import Icon from 'react-native-vector-icons/AntDesign';
import BottomNavigationTab from '../../helpers/bottomNavigationTab';

const PreAccessView = () => {
    const source = require('../../../android/app/src/main/assets/images/companyLogos/Bitmap.jpg');

    const [projectTypeList, setprojectTypeList] = useState([
        {label : "Residential Projects", value : "residential_projects"},
        {label : "Management Projects", value : "management_projects"},
        {label : "Construction Projects", value : "construction_projects"},
        {label : "Design Projects", value : "design_projects"},
    ]);

    const [projectType, setProjectType] = useState("residential_projects");

    const [projectList, setProjectList] = useState([
        {image_url : require("../../../android/app/src/main/assets/images/companyLogos/Bitmap-1.jpg"), id: 1, isNew : false},
        {image_url : require("../../../android/app/src/main/assets/images/companyLogos/Bitmap-2.jpg"), id: 2, isNew : false},
        {image_url : require("../../../android/app/src/main/assets/images/companyLogos/Bitmap-3.jpg"), id: 3, isNew : true },
        {image_url : require("../../../android/app/src/main/assets/images/companyLogos/Bitmap-4.png"), id: 4, isNew : false},
        {image_url : require("../../../android/app/src/main/assets/images/companyLogos/Bitmap-5.jpg"), id: 5, isNew : false},
        {image_url : require("../../../android/app/src/main/assets/images/companyLogos/Bitmap.jpg"),   id: 6, isNew : false},
        {image_url : require("../../../android/app/src/main/assets/images/companyLogos/Bitmap-3.jpg"), id: 7, isNew : false },
        {image_url : require("../../../android/app/src/main/assets/images/companyLogos/Bitmap-3.jpg"), id: 8, isNew : false },
        {image_url : require("../../../android/app/src/main/assets/images/companyLogos/Bitmap-1.jpg"), id: 9, isNew : false},
    ]);

    const onClick = () => {

    }

    return (
        <View style={styles.container}>
            <LogoHeader source={source} size={75}   />
            <View>
                <View style={styles.accessView}>
                    <Icon style={styles.minusStyle} name='minuscircle' color="#E84242" size={25} />
                    <Text style={[styles.textStyle,styles.accessText]}>You do not have access</Text>
                </View>
            </View>
            <View style={styles.projectView}>
                <CustomFilterMenu  list={projectTypeList} item={projectType} setItem={setProjectType}  />
                <View style={styles.flatListView}>
                    <CustomCompanyList height={125} text="New Launch" data={projectList} />
                </View>
            </View>
            <View style={styles.plansView}>
                <Text style={[styles.gainText, styles.textStyle]}>To gain access, check</Text>
                <View style={styles.btnView}>
                    <CustomButtons isArrow={true} margin={3} text="PLANS & PRICING" isDone={true} pressHandler={onClick}  />
                </View>
            </View>
            <View style={styles.codeView}>
                <Text style={styles.textStyle}>Or if you have access code from builder?</Text>
                <TouchableOpacity><Text style={styles.clickText}> Click Here</Text></TouchableOpacity>
            </View>
            <BottomNavigationTab />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
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
        flex : 1,
        backgroundColor : "#FFFFFF",
        // height : 375,
    },
    plansView : {
        flexDirection : "row",
        alignItems : "center",
        padding : 20,
        backgroundColor : "#E0E7F1",
    },
    gainText : {
        marginHorizontal : 10,
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
    
})

export default PreAccessView;