import React, { useState } from 'react';
import {Text, View, StyleSheet,} from 'react-native'
import { Dialog, Button,Paragraph, Portal } from 'react-native-paper';

const DialogBox = (props) => {
    const visible = props.visible;
    const setVisible = props.setVisible;
    const city = props.city;
    console.log(city);
    const showDialog = () => setVisible(true);  
    const hideDialog = () => setVisible(false);
  
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title style={styles.title}> ARE YOU SURE YOU WANT TO CHOOSE {city.toUpperCase()} </Dialog.Title>
                <Dialog.Content>
                  <Paragraph style={styles.description}>(You will see the builders and projects of this particular city)</Paragraph>
                </Dialog.Content>
                <View style={styles.Buttons}>
                    <Button contentStyle={styles.btntext} style={[styles.btn, styles.btn_1]} mode='contained' onPress={hideDialog}>
                        <Text style={styles.btntext_1}>YES</Text>
                    </Button>
                    <Button contentStyle={styles.btntext} style={[styles.btn, styles.btn_2]} mode='outlined' onPress={hideDialog}>
                        <Text style={styles.btntext_2}>Cancel</Text>
                    </Button>
                </View>
            </Dialog>
        </Portal>
    );
}

const styles = StyleSheet.create({
    title :{
        textAlign: "center",
        fontFamily: "Nunito-Bold",
        color: "#757575",
        fontSize: 14
    },
    description :{
        textAlign: "center",
        fontFamily : "Nunito",
        fontSize: 11,
    },
    Buttons :{
        justifyContent: "center",
        flexDirection: "row",
    },
    btn :{
        width: "40%",
        margin: 10,
        marginTop: 0,
    },
    btntext : {
        margin: 8,
    },
    btn_1 : {
        backgroundColor: "#0078E9",
    },
    btn_2 : {
        borderColor: "#0078E9",
        borderWidth: 1
    },
    btntext_1 : {
        color: "#FFFFFF",
        fontFamily: "Nunito-Bold",
    },
    btntext_2 : {
        color : "#0078E9",
        fontFamily: "Nunito-Bold",
    }

})
 
export default DialogBox;