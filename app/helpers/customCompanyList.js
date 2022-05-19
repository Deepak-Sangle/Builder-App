import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo'

const CustomCompanyList = (props) => {
    const data = props.data;
    const setData = props.setData;
    const text = props.text;
    const size = data.length;
    const numofSelection = props.numofSelection;
    const setNumofSelection = props.setNumofSelection;

    if(size%2){
        data.push({});
    }
    
    const renderList = ({item, index})=> {
        
        const borderStyle = {
            borderBottomWidth : ((index>=size-2) ? 0 : 1),
            borderRightWidth : (index%2) ? 0 : 1, 
        }

        const tickStyle = {
            backgroundColor : item.isSelected ? "#6BBB3E" : "#EEEEEE",
        }

        const onPressHandler = ()=>{
            if(item.isAccess) return ;
            if(item.isSelected)
                setNumofSelection(numofSelection-1);
            else
                setNumofSelection(numofSelection+1);
            item.isSelected = !item.isSelected;
        }

        return (
            <TouchableOpacity onPress={onPressHandler} style={[styles.touchableView, borderStyle]}>
                {!item.isAccess && item.id && <View style={[styles.iconView, tickStyle]}>
                    {item.isSelected && <Icon name="check" size={20} color="#FFFFFF" />}
                    {!item.isSelected && <Icon name="check" size={20} color="#EEEEEE" />}
                </View>}
                <View style={styles.imgViewStyle}>
                    <Image 
                        source={item.image_url}
                        style={styles.imgStyle}
                        resizeMode = 'contain'
                    />
                    {/* <Image 
                        source={item.image_url}
                        style={styles.imgStyle}
                        resizeMode = 'contain'
                    /> */}
                </View>
                <View style={styles.numView}>
                    {item.num_of_projects && <Text style={styles.numText}>({item.num_of_projects} PROJECTS)</Text>}
                </View>
                {item.isAccess && <View style={styles.accessView}>
                    <Text style={styles.accessText}> {text} </Text>
                </View>}
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList 
                numColumns={2}
                data={data}
                keyExtractor = {item => item.id}
                style={styles.flatListView}
                renderItem={renderList}
                nestedScrollEnabled={true}
            />
        </View>
    );
}
 
const styles = StyleSheet.create({
    container : {
        flex : 1,
        borderWidth : 1,
        borderColor : "#E6EBF3",
        borderRadius : 5,
    },
    iconView : {
        zIndex : 1,
        position : "absolute",
        left : 0,
        top : 0,
        padding : 5,
        backgroundColor : "#EEEEEE",
    },
    imgStyle : {
        maxHeight : 80,
        maxWidth: 150,
    },
    touchableView : {
        flex : 1,
        justifyContent : "space-around",
        alignItems :"center",
        padding: 20,
        height : 175,
        borderColor : "#E6EBF3",
    },
    flatListView : {

    },
    numView : {
    },
    numText : {
        color :"#A6A6A6",
        fontFamily : "Nunito-SemiBold",
        marginVertical : 10,
    },
    accessView : {
        backgroundColor : "#C4ECC0",
        borderRadius : 30,
        marginVertical : 10,
    },
    accessText :{ 
        fontFamily : "Nunito-SemiBold",
        color : "#429B38",
        margin : 5,
        fontSize : 11,
    },
});

export default CustomCompanyList;