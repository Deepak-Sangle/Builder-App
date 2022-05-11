import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { RadioButton } from 'react-native-paper';

const CustomFlatList = (props) => {
    const data = props.data;
    let itemID = props.itemID;
    let setItemID = props.setItemID;

    const pressHandler = (id) =>{
        setItemID(id);
    }
    
    const renderList =  ({item}) => {
        return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.listView]} onPress={()=> pressHandler(item.id)}>
            <View style={styles.listAlign}>
                <Text style={[styles.listText]}>{item.title}</Text>
                <Text style={[styles.checkText]}>
                    <RadioButton
                        value={item.id}
                        status={ itemID === item.id ? 'checked' : 'unchecked' }
                        onPress={() => setItemID(item.id)}
                        color="green"
                    />
                </Text>
            </View>
        </TouchableOpacity>
        )
    }

    return (
        <FlatList 
            data={data}
            keyExtractor = {item => item.id}
            renderItem={renderList}
            style={styles.listBox}
        />
    );
}
 
const styles = StyleSheet.create({
    listBox :{
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
    checkText :{
        padding: 10,
        // paddingVertical: 15,
    },
    listText :{
        fontSize: 14,
        fontFamily: "Nunito-Regular",
        padding: 20,
        color: "#545454",
    },
})

export default CustomFlatList;