import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native'

const HorizontalImageScroll = (props) => {
    const dimensions = props.size;
    const imagesList = props.data;
    const resizeMode = props.resizeMode ? props.resizeMode : 'cover'; 

    const setDimesnions = {
        width : dimensions,
        height : dimensions,
    }

    return (
        <ScrollView horizontal={true}>
            {imagesList.map((img)=>{
                return (
                    <View key={img.id} style={[styles.imgView, setDimesnions]}>
                        <Image 
                            source={img.source}
                            resizeMode={resizeMode}
                            style={[styles.imgStyle, setDimesnions]}    
                        />
                    </View>
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