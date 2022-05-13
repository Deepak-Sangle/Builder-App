import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet,} from 'react-native'
import { Divider } from 'react-native-paper';
import CustomFlatList from '../../helpers/customFlatList';
import CustomButtons from '../../helpers/customButtons';

const SelectCompanyView = () => {
    //Assuming you will get the company data from the database

    const [company, setCompany] = useState([
        {name : "Asset Advisor India", address : "FF10, Ninex Mall, Sohna Road, Sector 49,", city: "Gurugram", id : 1},
        {name : "Asset Advisor India Pvt. Ltd.", address : "B3-590, Greenwood, Sector 46,", city: "Gurugram", id : 2},
    ]);
    const size = company.length;
    const name = "Asset Advisor India";         //Assuming this as props

    const [companyID, setCompanyID] = useState('');

    useEffect(()=>{
        company.push({name : "None of the above", id : "0"});
    }, [])

    const onSubmit = () => {
        const company = companyID;
    }

    return (
        <View style={styles.boxView}>
            <View style={styles.foundCompanyView}>
                <Text style={styles.foundCompanyText}>We found {size} companies with the name {name}</Text>
            </View>
            <View style = {styles.selectView}>
                <Text style = {styles.selectText}>Please select your company</Text>
            </View>
            <Divider />
            <CustomFlatList text="" data={company} itemID = {companyID} setItemID = {setCompanyID} />
            <View style={{margin: 15, marginTop: 0}}>
                <CustomButtons text="DONE" isDone={true} pressHandler={onSubmit}  />
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    debugginBorder : {
        borderWidth : 2,
        borderColor : "red",
    },
    boxView : {
        flex : 1,
        backgroundColor : "white",
    },
    foundCompanyText : {
        color : "#4A4A4A",
        fontSize : 17,
        textAlign : "center",
        fontFamily : "Nunito-Bold",
        letterSpacing : 0.4,
        padding: 25,
        lineHeight: 30,
    },
    foundCompanyView : {
        backgroundColor : "#E0E7F1",
    },
    selectView : {

    },
    selectText : {
        padding : 20,
        color : "#A6A6A6",
        fontFamily : "Nunito", 
        fontSize : 12,
        letterSpacing : 0.5,
    },



});

export default SelectCompanyView;