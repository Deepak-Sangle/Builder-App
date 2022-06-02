import React, { useEffect, useState } from 'react';
import { Linking, Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import BottomNavigationTab from '../../helpers/bottomNavigationTab';
import CustomFilterMenu from '../../helpers/customFilterMenu';
import LogoHeader from '../../helpers/LogoHeader';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Divider } from 'react-native-paper';

const CircleRateView = () => {

    const [city, setCity] = useState("gurugram");
    
    const [cityList, setCityList] = useState([
        {label : "Gurugram", value : "gurugram"},
        {label : "New Delhi", value : "delhi"},
        {label : "Mumbai", value : "mumbai"},
    ]);

    const [rateList, setRateList] = useState([
        {title : "Collector Rate 2nd Phase 2019-20 Sub-Technical jbhagffuifsdiosgfhgsfjfsghjgfhgfhlgfshg", id : 1, },
        {title : "Collector Rate 2nd Phase 2019-20 -Tehsil", id : 2, },
        {title : "Collector Rate 2nd Tehsil Pataudi", id : 6, },
        {title : "Collector Rate 2nd Phase 2019- Suburban area dsfsadgtetrhy", id : 4, },
        {title : "Collector Rate 2nd Tehsil Pataudi", id : 5, },
        {title : "Collector Rate 2nd Phase 2021-22", id : 7, },
        {title : "Collector Rate 2nd Phase 2019-20 -Tehsil", id : 3, },
        {title : "Collector Rate 2nd Phase 2019- Suburban area", id : 8, },
    ]);

    return (
        <View style={{flex : 1,}}>
            <ScrollView nestedScrollEnabled>
                <LogoHeader size={55} text="CIRCLE RATE" isThreeDot={true} isBack={true} isImage={false} />

                <View style={styles.textView}>
                    <Text style={[styles.textStyle, {textAlign : "center"}]}>Circle rates refer to the minimum rate notified by the government through the registrar or sub registrar office of Gurgaon for registration of property transactions.</Text>
                </View>

                <View style={styles.searchView}>
                    <Text style={[styles.textStyle, styles.selectText]}>Select city to see its circle rates</Text>
                    <CustomFilterMenu list={cityList} item={city} setItem={setCity} backgroundColor="#FFFFFF" />
                </View>

                <View>
                    {rateList.map((rate,index)=> {
                        return (
                            <View key={rate.id}>
                                <TouchableOpacity activeOpacity={0.5} style={styles.fileView} >
                                    <View>
                                        <Icons name='file-pdf' color = '#3E506D' size={30} />
                                    </View>
                                    <View>
                                        <Text numberOfLines={1} style={[styles.textStyle, styles.filename]}>{rate.title}</Text>
                                    </View>
                                </TouchableOpacity>
                                {(index!=rateList.length-1) && <Divider  />}
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
    textView : {
        marginHorizontal : 20,
        marginVertical : 10,
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
    selectText : {
        textAlign : "center",
        marginVertical : 10,
    },
    fileView : {
        paddingHorizontal : 20,
        paddingVertical : 15,
        alignItems : "center",
        flexDirection : "row",
    },
    filename : {
        marginHorizontal : 15,
        color : "#0078E9",
    }
});

export default CircleRateView;