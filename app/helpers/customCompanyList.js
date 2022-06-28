import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo'
import CustomGradient from './customGradient';

const CustomCompanyList = (props) => {
    const data = props.data;
    const setData = props.setData;
    const text = props.text;
    const size = data.length;
    const numofSelection = props.numofSelection;
    const setNumofSelection = props.setNumofSelection;
    const height = props.height ? props.height : 175;
    const isTouchable = props.isTouchable ? props.isTouchable : false;
    const pressHandler = props.pressHandler;

    if(size%2){
        data.push({});
    }
    
    const renderList = ({item, index})=> {
        const borderStyle = {
            borderBottomWidth : ((index>=size-2) ? 0 : 1),
            borderRightWidth : (index%2) ? 0 : 1, 
            height : height,
        }

        const tickStyle = {
            backgroundColor : item.isSelected ? "#6BBB3E" : "#EEEEEE",
        }

        const onPressHandler = ()=>{
            if(pressHandler!=undefined) pressHandler(item.id);
            if(!isTouchable) return ;
            if(item.isTag) return ;
            if(item.isSelected)
                setNumofSelection(numofSelection-1);
            else
                setNumofSelection(numofSelection+1);
            item.isSelected = !item.isSelected;
            setData(data);
        }
        return (
            <TouchableOpacity activeOpacity={isTouchable ? 0.5 : 1} onPress={onPressHandler} style={[styles.touchableView, borderStyle]}>
                <View style={styles.isNewTag}>
                    <CustomGradient isSmall={true} text={item.isNew ? text : ''}/>
                </View>
                {isTouchable && !item.isTag && item.id && <View style={[styles.iconView, tickStyle]}>
                    {item.isSelected && <Icon name="check" size={20} color="#FFFFFF" />}
                    {!item.isSelected && <Icon name="check" size={20} color="#EEEEEE" />}
                </View>}
                <View style={styles.imgViewStyle}>
                    <Image 
                        source={{uri : item.image_url}}
                        style={styles.imgStyle}
                        resizeMode = 'contain'
                        // defaultSource={{uri : "https://media.istockphoto.com/vectors/black-linear-photo-camera-like-no-image-available-vector-id1055079680"}}  
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
                {item.isTag && <View style={styles.tagView}>
                    <Text style={styles.tagText}> {text} </Text>
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
        height : 80,
        width: 150,
    },
    touchableView : {
        flex : 1,
        justifyContent : "space-around",
        alignItems :"center",
        padding: 20,
        borderColor : "#E6EBF3",
    },
    isNewTag : {
        position : "absolute",
        top : 0,
        right : 0,
    },
    numText : {
        color :"#A6A6A6",
        fontFamily : "Nunito-SemiBold",
        marginVertical : 10,
    },
    tagView : {
        backgroundColor : "#C4ECC0",
        borderRadius : 30,
        marginVertical : 10,
    },
    tagText :{ 
        fontFamily : "Nunito-SemiBold",
        color : "#429B38",
        margin : 5,
        fontSize : 11,
    },
});

export default CustomCompanyList;