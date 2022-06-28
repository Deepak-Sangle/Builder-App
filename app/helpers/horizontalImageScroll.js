import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, Image,TouchableOpacity, ScrollView} from 'react-native'

const HorizontalImageScroll = (props) => {
    const dimensions = props.size;
    const imagesList = props.data;
    const resizeMode = props.resizeMode ? props.resizeMode : 'cover'; 
    const navigation = props.navigation;
    const opacity = (navigation==undefined) ? 1 : 0.5;
    const access = props.access;
    const sourceKey = props.sourceKey;

    const setDimesnions = {
        width : dimensions,
        aspectRatio : 1,
    }

    const pressedImage = (builder) => {
        if(navigation!=undefined)
            navigation.navigate('PreAccessView', {builder});    
    }

    return (
        <ScrollView horizontal={true}>
            {imagesList.map((img, index)=>{
                return (
                    <TouchableOpacity onPress={() => pressedImage(img)} activeOpacity={opacity} key={index} style={[styles.imgView, setDimesnions]}>
                        <Image 
                            source={{uri : img[sourceKey]}}
                            resizeMode={resizeMode}
                            style={[styles.imgStyle, setDimesnions]}    
                        />
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    imgView : {
        marginHorizontal : 15,
    },
    imgStyle : {
        borderRadius : 10,
    },
})
export default HorizontalImageScroll;