import React, { useEffect, useState, useRef } from 'react';
import {Text, View, StyleSheet, TextInput, Pressable} from 'react-native'
import CustomButtons from '../../helpers/customButtons';

const OtpView = () => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);

    const [otpArray, setOtpArray] = useState([]);

    const ref_array = [inputRef1, inputRef2, inputRef3, inputRef4];

    const RESEND_TIME_LIMIT = 30;    
    const [resendTime, setResendTime] = useState(30);

    const onOtpChange = (index) => {
        return (value) => {
            if (isNaN(Number(value))) {
                return;
            }
            const otpArrayCpy = otpArray.concat();
            otpArrayCpy[index] = value;
            setOtpArray(otpArrayCpy);
            if (value !== '') {
                if (index === 0) {
                    inputRef2.current.focus();
                } else if (index === 1) {
                    inputRef3.current.focus();
                } else if (index === 2) {
                    inputRef4.current.focus();
                }
            }
        };
    };

    const onOTPKeyPress = (index) => {
        return ({ nativeEvent: { key: value } }) => {
            if (value === 'Backspace' && otpArray[index] === '') {
                if (index === 1) {
                    inputRef1.current.focus();
                } else if (index === 2) {
                    inputRef2.current.focus();
                } else if (index === 3) {
                    inputRef3.current.focus();
                }
                if (index > 0) {
                    const otpArrayCpy = otpArray.concat();
                    otpArrayCpy[index - 1] = '';
                    setOtpArray(otpArrayCpy);
                }
            }
        };
    };
    
    useEffect(() => {
        const resendOtpTimer = setInterval(() => {
            if (resendTime > 0) {
                setResendTime(resendTime - 1);
            }
            else clearInterval(resendOtpTimer);
        }, 1000);
        return ()=> {
            clearInterval(resendOtpTimer);
        }
    }, [resendTime]);

    function onSubmit() {

    }

    function resendOtp(){
        setResendTime(RESEND_TIME_LIMIT);
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.enterotp}>Enter OTP</Text>
                <Text style={styles.text}>One time password has been sent to</Text>
                <Text style={[styles.phno, styles.text]}>+91 9876543210</Text>
                <View style={styles.inputView}>
                    {ref_array.map((inputRef, i) => (
                    <TextInput
                        value={otpArray[i]}
                        onChangeText={onOtpChange(i)}
                        onKeyPress={onOTPKeyPress(i)}
                        keyboardType="numeric"
                        maxLength={1}
                        key={i}
                        ref={inputRef}
                        autoFocus={i === 0 ? true : undefined}
                        style = {styles.inputBox}
                    />
                    ))}
                </View>
                <View style={{marginVertical: 25}}>
                    <CustomButtons text="VERIFY" isDone={false} pressHandler={onSubmit}/>
                </View>
                <View style={styles.resendView}>
                    {resendTime>0 && <Text style={styles.resendText}>You can resend code in 00:{resendTime>9 ? resendTime: "0"+ resendTime}</Text>}
                    {!resendTime>0 && 
                    <Pressable onPressOut={resendOtp}>
                        <Text style={styles.resendText}>Resend OTP</Text>
                    </Pressable>}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#0078E9",
        justifyContent: "flex-end",
    },
    box : {
        margin: 50,
        flex: 1,
        marginTop: 200,
        // marginBottom: 400,
    },
    enterotp : {
        fontFamily : "Nunito-Medium",
        color : "#FFFFFF",
        letterSpacing : 0.5,
        fontSize: 24,
        paddingVertical: 15,
    },
    text : {
        fontFamily : "Nunito",
        fontSize : 13,
        letterSpacing : 0.5,
        color : "#FFFFFF",
        paddingBottom: 3,
    },
    phno : {
        fontWeight: "bold",
    },
    inputView : {
        marginTop : 20,
        flexDirection : "row",
    },
    inputBox : {
        borderBottomWidth : 1,
        width : 70,
        marginRight: 10,
        borderColor : "#BECCE0",
        textAlign: "center",
        color : "#FFFFFF",
        fontSize: 20,
    },
    resendView : {
        marginVertical: 10,
    },
    resendText : {
        textAlign : "center",
        color : "#FFFFFF",
    }
});
 
export default OtpView;