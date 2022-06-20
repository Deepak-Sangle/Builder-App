import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, Image,TouchableOpacity, ScrollView} from 'react-native'

const HorizontalImageScroll = (props) => {
    const dimensions = props.size;
    const imagesList = props.data;
    const resizeMode = props.resizeMode ? props.resizeMode : 'cover'; 
    const navigation = props.navigation;
    const opacity = (navigation==undefined) ? 1 : 0.5;
    const access = props.access;

    const setDimesnions = {
        width : dimensions,
        height : dimensions,
    }

    const pressedImage = () => {
        if(navigation!=undefined)
            navigation.navigate('PreAccessView', {access});    
            
    }

    return (
        <ScrollView horizontal={true}>
            {imagesList.map((img)=>{
                return (
                    <TouchableOpacity onPressOut={pressedImage} activeOpacity={opacity} key={img.id} style={[styles.imgView, setDimesnions]}>
                        <Image 
                            source={img.source}
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