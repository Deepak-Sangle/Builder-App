import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { RadioButton } from 'react-native-paper';

const CustomFlatList = (props) => {
    const data = props.data;
    let itemID = props.itemID;
    let setItemID = props.setItemID;
    const text = props.text ;

    const pressHandler = (id) =>{
        setItemID(id);
    }
    
    const RenderEachKey = (item) => {
        const itemData = [];
        for (const [key, value] of Object.entries(item)) {
            if(key!="id") itemData.push(value); 
        }
        return (
            <View style={styles.listText}>
                {itemData.map((val)=> {
                   return <Text style={styles.eachText} key={val}> {val} </Text>
                })}
            </View>
        )
    }

    const renderList =  ({item}) => {

        return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.listView]} onPress={()=> pressHandler(item.id)}>
            <View style={styles.listAlign}>
                {RenderEachKey(item)}
                <View style={[styles.checkView]}>
                    <View>
                        <RadioButton
                            value={item.id}
                            status={ itemID === item.id ? 'checked' : 'unchecked' }
                            onPress={() => setItemID(item.id)}
                            color="green"
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        )
    }

    return (
        <View style={[styles.BoxView]}>
            <FlatList 
                data={data}
                keyExtractor = {item => item.id}
                renderItem={renderList}
                style={styles.BoxView}
                />

            { (!text=="") && <Text style={[styles.otherBox]}>
                <Text style={[styles.listText]}>{text}</Text>
            </Text>}
        </View>
    );
}
 
const styles = StyleSheet.create({
    BoxView :{
        flex: 1,
        borderColor: "#E6EBF3",
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: "rgba(255,255,255,0.71)",
    },
    listView : {
        borderColor: "#E6EBF3",
        borderBottomWidth: 1,
    },
    listAlign : {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
    },
    otherBox :{
        padding: 20,
        fontFamily: "Nunito-BlackItalic"
    },
    checkView :{
        padding: 10,
        justifyContent : "center",
    },
    listText :{
        padding: 20,
    },
    eachText : {
        fontSize: 14,
        fontFamily: "Nunito-Medium",
        color: "#545454",
        margin: 2,
    }
})

export default CustomFlatList;