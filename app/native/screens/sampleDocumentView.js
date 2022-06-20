import React, { useEffect, useState } from 'react';
import { Linking, Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import BottomNavigationTab from '../../helpers/bottomNavigationTab';
import CustomSearchBar from '../../helpers/customSearchBar';
import LogoHeader from '../../helpers/LogoHeader';
import CustomFilterMenu from '../../helpers/customFilterMenu';
import { Divider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';   

const SampleDocumentView = () => {
    
    const [searchQuery, setSearchQuery] = useState("");
    
    const [category, setCategory] = useState('all_category');

    const [categoryList, setCategoryList] = useState([
        {label : "All Categories", value : 'all_category',},
        {label : "Category 1", value : 'category1',},
        {label : "Category 2", value : 'category2',},
    ]);
    
    const [documentList, setDocumentList] = useState([
        {heading : "DTCP allows extra construction in stilt parking areas in Gurugram, Haryana.", id : 1, file : "smth.docx" },
        {heading : "DTCP allows extra construction in stilt parking areas in Gurugram, Haryana.", id : 2, file : "smth.pdf" },
        {heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime molestias facilis quis officia?", id : 3, file : "smth.pdf" },  
        {heading : "DTCP allows extra construction in stilt.", id : 4, file : "smth.docx"  },
        {heading : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero, deserunt, fugit dolor quis ex animi veritatis aut, eos mollitia non reprehenderit soluta quos accusantium. Quis animi consequuntur harum ", id : 5, file : "smth.pdf" },
    ]);
    
    const size = documentList.length;

    return (
        <View style={{flex : 1,}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <LogoHeader size={55} text="SAMPLE DOCUMENTS/DEED" isThreeDot={true} isBack={true} isImage={false} />
                
                <View style={styles.searchView}>
                    <CustomFilterMenu list={categoryList} item={category} setItem={setCategory} backgroundColor="#FFFFFF" />
                    <CustomSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} text="Search Documents" />
                </View>
            
                <View>
                    {documentList.map((document, index)=> {
                        const fileExtension = document.file.split('.').pop(); 
                        return (
                            <View key={document.id} >
                                <View style={styles.docView}>
                                    <View>
                                        {fileExtension == 'docx' && 
                                            <View style={{flexDirection : "row", alignItems : "center"}}>
                                                <MaterialIcons name='microsoft-word' size={35} color='#2C7BD5' />
                                                <Text style={[styles.textStyle, {marginHorizontal : 10}]}>WORD DOCUMENT</Text>
                                            </View>
                                        }
                                        {fileExtension == 'pdf' && 
                                            <View style={{flexDirection : "row", alignItems : "center"}}>
                                                <MaterialIcons name='file-pdf-box' size={35} color='#F67369' />
                                                <Text style={[styles.textStyle, {marginHorizontal : 10}]}>PDF</Text>
                                            </View>
                                        }
                                    </View>
                                    <Text numberOfLines={2} style={[styles.textStyle, styles.headingText]}>{document.heading}</Text>
                                    <TouchableOpacity activeOpacity={0.5}><Text style={[styles.textStyle, styles.downloadText]}>Download Document</Text></TouchableOpacity>
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
    headingText : {
        fontFamily : "Nunito-Bold",
        marginBottom : 10,
        marginRight : 10,
    },
    downloadText : {
        marginBottom : 10,
        color : "#0078E9",
    },
    docView : {
        flex : 3, 
        padding : 20
    },
});
 
export default SampleDocumentView;