import React from 'react';
import {View, StyleSheet,} from 'react-native'
import { Dialog,Paragraph, Portal } from 'react-native-paper';
import CustomButtons from '../../helpers/customButtons';

const DialogBox = (props) => {
    const visible = props.visible;
    const setVisible = props.setVisible;
    const city = props.city;

    const PressedNo = () => setVisible(false);
    const PressedYes = () => {
        props.navigation.navigate('SelectCompanyView');
        setVisible(false)
    }
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={PressedNo}>
                <Dialog.Title style={styles.title}> ARE YOU SURE YOU WANT TO CHOOSE {city.toUpperCase()} </Dialog.Title>
                <Dialog.Content>
                  <Paragraph style={styles.description}>(You will see the builders and projects of this particular city)</Paragraph>
                </Dialog.Content>
                <View style={styles.Buttons}>
                    <CustomButtons width={45} text="YES" isDone={true} pressHandler={PressedYes}/>
                    <CustomButtons width={45} text="CANCEL" isDone={false} pressHandler={PressedNo}/>
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
        marginBottom: 10,
        justifyContent: "space-around",
        flexDirection: "row",
    },

})
 
export default DialogBox;