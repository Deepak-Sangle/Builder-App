import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native'

import EntypoIcons from 'react-native-vector-icons/Entypo';

const ImageCorousel = (props) => {
    const heading = props.heading ;
    const imageList = props.imageList;

    const [width, setWidth] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const findLayout = (event)=> {
        const {width} = event.nativeEvent.layout;
        setWidth(width);
    };

    const setIndex = (event) => {
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;
        const selection = Math.floor(contentOffset/viewSize);
        setSelectedIndex(selection);
    }

    return (
        <View style={styles.offersView}>
            <Text style={[styles.textStyle, styles.headers]}>{heading}</Text>
            
            <View onLayout={findLayout} style={styles.imagesView}>
                <ScrollView pagingEnabled horizontal onMomentumScrollEnd={setIndex}>
                    {imageList.map((img)=> {
                        return (
                            <View key={img.id} style={[styles.imgStyle, styles.imgView, {width : width}]}>
                                <Image 
                                    source={img.source}
                                    resizeMode='cover'
                                    style={[styles.imgStyle, {width : width}]}
                                />
                            </View>
                            )
                        })}
                </ScrollView>
            </View>
            
            <View>
                <View style={styles.dotsView}>
                    {imageList.map((img, index)=>{
                        if(index!=selectedIndex) return <EntypoIcons style={styles.dotIcon} key={img.id} size={30} color='#9E9E9E' name='dot-single' />
                        else return <EntypoIcons style={styles.dotIcon} key={img.id} size={30} color='#0078E9' name='dot-single' />
                    })}
                </View>
            </View>                        
        </View>
    );
}

const styles = StyleSheet.create({
    offersView : {
        marginVertical : 10,
    },
    textStyle : {
        fontFamily : "Nunito",
        fontSize : 12,
        letterSpacing : 0.5,
    },
    headers : {
        fontFamily : "Nunito-Bold",
        color : "#545454",
        marginHorizontal : 15,
    },
    imagesView : {
        height : 350, 
        marginTop : 15,
        marginHorizontal : 15,
    },
    imgStyle : {
        height : "100%",
    },
    dotsView : {
        flexDirection : "row",
        justifyContent : "center",
    },
    dotIcon : {
        marginHorizontal : -8,
    },
})
 
export default ImageCorousel;