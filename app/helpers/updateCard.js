import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'
import { Divider } from 'react-native-paper';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import CustomIcons from './CustomIcons';

const UpdateCard = (props) => {
    const completeData = props.details;
    const setCompleteData = props.setDetails;

    const onLike = (index)=> {
        let temp_array = completeData.slice();
        temp_array[index].youLiked = !temp_array[index].youLiked;
        setCompleteData(temp_array);
    }

    const onShare = ()=> {

    }

    useEffect(()=>{

    }, [completeData])

    return (
        <View>
            {completeData.map((data, index)=>{
                const isFile = data.file != undefined ? true : false;
                const isImages = data.images != undefined ? true : false;
                const isCompanyLogo = data.companyLogo != undefined ? true : false ;

                return (
                    <View key={data.id} style={styles.container}>
                        <View style={styles.topView}>
                            {isCompanyLogo && <Image 
                                source={data.companyLogo}
                                resizeMode="contain"
                                style={styles.logoImg}
                            />}
                            <View style={styles.textView}>
                                {data.name &&<Text style={[styles.textStyle,styles.nameText]}>{data.name}</Text>}
                                <Text style={[styles.textStyle,styles.timeText]}>{data.time} ago</Text>
                            </View>
                        </View>
                        
                        <Divider />
                        
                        {isImages && <ScrollView style={{margin : 20, marginRight : 0}} horizontal={true}>
                            {data.images.map((img,index)=>{
                                return(
                                    <View key={index} style={styles.img}>
                                        <Image 
                                            source={img} 
                                            resizeMode='cover'
                                            style={styles.img}
                                        />
                                    </View>
                                )
                            })}
                        </ScrollView>}
                        
                        <Text style={[styles.textStyle,styles.headingText]}>{data.title}</Text>
                        
                        <Text style={[styles.textStyle,styles.descriptionText]}>{data.description}</Text>
                        
                        {isFile && <TouchableOpacity activeOpacity={0.5} style={styles.fileView}>
                            <EntypoIcon style={styles.attachmentIcon} name='attachment' size={20} color='#0078E9' />
                            <Text style={[styles.textStyle, styles.file]}>{data.file}</Text>
                        </TouchableOpacity>}

                        <View style={styles.bottomView}>
                            <View style={styles.likeView}>
                                <TouchableOpacity onPress={()=> onLike(index)} activeOpacity={0.5}>
                                    {data.youLiked && <CustomIcons name='like-active' style={styles.likeIcon} size={25} color='#0078E9' />}
                                    {/* {data.youLiked && <AntDesignIcon style={styles.likeIcon} name='like1' size={25} color='#0078E9' />} */}
                                    {!data.youLiked && <CustomIcons name='like-inactive' style={styles.likeIcon} size={25} color='#000000' />}
                                    {/* {!data.youLiked && <AntDesignIcon style={styles.likeIcon} name='like2' size={25} color='#0078E9' />} */}
                                </TouchableOpacity>

                                {data.youLiked && <Text style={[styles.textStyle,styles.likeText]}>You {'&'} {data.likes} Liked this</Text>}
                                {!data.youLiked && <Text style={[styles.textStyle,styles.likeText]}><Text style={{color : "#008AF4"}}>Like </Text>({data.likes})</Text>}
                            </View>

                            <TouchableOpacity onPress={onShare} activeOpacity={0.5} style={styles.shareView}>
                                <EntypoIcon style={styles.shareIcon} name='share' size={25} color='#202020' />
                                <Text style={[styles.textStyle, styles.shareText]}>Share</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })}
        </View>
        
    );
}
 
const styles = StyleSheet.create({
    container : {
        backgroundColor : "#FFFFFF",
        elevation : 2,
        marginVertical : 10,
    },
    textStyle : {
        fontSize : 12,
        fontFamily : "Nunito",
        letterSpacing : 0.5,
    },
    topView : {
        flexDirection : "row",
        alignItems : "center",
    },
    nameText : {
        marginLeft : 20,
        marginBottom : 10,
        color : "#4A4A4A",
        fontFamily : "Nunito-Bold",
    },
    textView : {
        marginVertical : 20,
    },
    timeText : {
        marginLeft : 20,
        color : "#969696",
    },
    logoImg : {
        margin : 20,
        marginRight : 0,
        width : 80,
        height : 40,
    },
    headingText : {
        color : "#4A4A4A",
        fontFamily : "Nunito-Bold",
        margin : 20,
        marginVertical : 10,
    },
    descriptionText : {
        color : "#949494",
        marginRight : 50,
        margin : 20,
        marginVertical : 0,
    },
    fileView : {
        flexDirection : "row",
        backgroundColor : "#F5F8FC",
        borderRadius : 4,
        padding : 15,
        marginHorizontal : 20,
        marginVertical : 10,
    },
    file : {
        color : "#3B3B3B",
        fontFamily : "Nunito-Italic",
        marginLeft : 20,
    },
    attachmentIcon : {
        marginLeft : 30,
    },
    likeText : {
        color : "#7F7F7F",
    },
    likeView : {
        flexDirection : "row",
        alignItems : "center",
    },
    likeIcon : {
        marginHorizontal : 10,
    },
    bottomView : {
        flexDirection : "row",
        margin : 20,
        justifyContent : "space-between",
    },
    shareView : {
        flexDirection : "row",
        alignItems : "center",
    },
    shareIcon : {
        marginHorizontal : 10,
    },
    shareText : {
        color : "#0078E9",
        marginHorizontal : 10,
    },
    img : {
        height : 200,
        width : 200,
        marginRight : 10,
    }
});

export default UpdateCard;