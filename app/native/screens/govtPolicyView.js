import React, { useEffect, useState } from 'react';
import { Linking, Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import BottomNavigationTab from '../../helpers/bottomNavigationTab';
import CustomSearchBar from '../../helpers/customSearchBar';
import LogoHeader from '../../helpers/LogoHeader';
import CustomFilterMenu from '../../helpers/customFilterMenu';
import { Divider } from 'react-native-paper';

const GovtPolicyView = () => {
    
    const [searchQuery, setSearchQuery] = useState("");
    
    const [category, setCategory] = useState('all_category');

    const [categoryList, setCategoryList] = useState([
        {label : "All Categories", value : 'all_category',},
        {label : "Category 1", value : 'category1',},
        {label : "Category 2", value : 'category2',},
    ]);
    
    const [policyList, setPolicyList] = useState([
        {heading : "DTCP allows extra construction in stilt parking areas in Gurugram, Haryana.", id : 1, source : require("../../../android/app/src/main/assets/images/temp_images/Bitmap-3.png"),},
        {heading : "DTCP allows extra construction in stilt parking areas in Gurugram, Haryana.", id : 2,},
        {heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime molestias facilis quis officia?", id : 3,},  
        {heading : "DTCP allows extra construction in stilt.", id : 4, source : require("../../../android/app/src/main/assets/images/temp_images/Bitmap-1.png"),},
        {heading : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero, deserunt, fugit dolor quis ex animi veritatis aut, eos mollitia non reprehenderit soluta quos accusantium. Quis animi consequuntur harum ", id : 5,},
    ]);
    
    const size = policyList.length;

    return (
        <View style={{flex : 1,}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <LogoHeader size={55} text="GOVT. POLICIIES" isThreeDot={true} isBack={true} isImage={false} />
                
                <View style={styles.searchView}>
                    <CustomFilterMenu list={categoryList} item={category} setItem={setCategory} backgroundColor="#FFFFFF" />
                    <CustomSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} text="Search Policies" />
                </View>
            
                <View>
                    {policyList.map((policy, index)=> {
                        return (
                            <View key={policy.id} >
                                <View style={styles.policyView}>
                                    <View style={{flex : 3}}>
                                        <Text numberOfLines={2} style={[styles.textStyle, styles.headingText]}>{policy.heading}</Text>
                                        <TouchableOpacity activeOpacity={0.5}><Text style={[styles.textStyle, styles.readText]}>Real Full Policy</Text></TouchableOpacity>
                                    </View>
                                    {policy.source!=undefined && <View style={styles.imgView}>
                                        <Image 
                                            source={policy.source}
                                            style={styles.img}
                                            resizeMode='contain'
                                        />
                                    </View>}
                                </View>
                                {index != size-1 && <Divider />}
                            </View>
                        )
                    })}
                </View>

            </ScrollView>
            
            <View>
                <BottomNavigationTab />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle : {
        color : "#4A4A4A",
        letterSpacing : 0.5,
        fontFamily : "Nunito-Regular",
        fontSize : 12,
    },
    searchView : {
        backgroundColor : "#E4EBF4",
        borderRadius : 6,
        marginHorizontal : 20,
        marginVertical : 20,
        padding : 10,
        paddingHorizontal : 20,
        zIndex : +1,
    },
    policyView : {
        flexDirection : "row",
        padding : 20,
    },
    headingText : {
        fontFamily : "Nunito-Bold",
        marginBottom : 10,
        marginRight : 10,
    },
    readText : {
        marginBottom : 10,
        color : "#0078E9",
    },
    imgView : {
        flex : 2,
        height : 100,
    },
    img : {
        width : "100%",
        height : "100%",
    }

});
 
export default GovtPolicyView;