import React from "react";
import {View, StyleSheet, Text} from 'react-native'
import CustomButtons from "../../helpers/customButtons";

const PaymentView = ({navigation}) => {

    const onPayment = ()=> {
        navigation.navigate('CompleteProfileView');
    }

    return (
        <View>
            <Text style={styles.paymentText}>Payment Screen</Text>
            <View style={{marginHorizontal : 30, marginVertical : 100}}>
                <CustomButtons text="AFTER PAYMENT" isDone={true} pressHandler={onPayment} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    paymentText : {
        color : "#429B38",
        fontSize : 24,
        fontFamily : "Nunito-SemiBold",
        textAlign : "center",
        marginVertical : 200,
    },

});

export default PaymentView;