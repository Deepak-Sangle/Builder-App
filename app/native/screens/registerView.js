import React from 'react';
import {Text, View, StyleSheet, TextInput, ScrollView} from 'react-native'
import {useForm, Controller} from 'react-hook-form'
import CustomButtons from '../../helpers/customButtons';
import LogoHeader from '../../helpers/LogoHeader';

const RegisterView = () => { 
  
    const CustomInputView = (props) => {
        const label = props.label;
        const placeholder = props.placeholder ? props.placeholder : '';
        const keyboardType = props.keyboardType ? props.keyboardType : 'default'; 
        const name = props.name;

        return (
            <View style={styles.form}>
                <Text style={[styles.label, styles.textStyle]}>{label}</Text>
                <Controller 
                    control={control}
                    name={name}
                    rules={{required: true}}
                    render={({field : {onChange, value}})=>(
                        <TextInput
                            placeholder={placeholder}
                            keyboardType={keyboardType}
                            placeholderTextColor="#A6A6A6"
                            style = {styles.textBox}
                            onChangeText = {onChange}
                        />
                    )}
                />
            </View>
        )
    }

    function termspage() {

    }

    const { control, handleSubmit, setValue } = useForm({
        defaultValues : {
            'full-name' : '',
            'company-name' : '' ,
            'email-id' : '',
            'country-code' : '91',
            'phone-no' : ''
        }
    });

    function onSubmit(data) {
        console.log(data);
    }
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <LogoHeader isHeader={true} size={75}/>
                <View style={[styles.createView]}>
                    <Text style={[styles.createText, styles.textStyle]}>Create New Account</Text>
                </View>
                <View>
                    <CustomInputView label="Full Name" name='full-name' />
                    <CustomInputView label="Company Name" name='company-name'/>
                    <CustomInputView label="Email ID" placeholder="Enter your official email address" name='email-id' />
                    <View style={styles.form}>
                        <Text style={[styles.label, styles.textStyle]}>Mobile Number</Text>
                        <View style={styles.phnoView}>    
                            <View style={styles.phno_first}>
                                <TextInput style={[styles.textBox, styles.phno_plus]}>+</TextInput>
                                <Controller 
                                    control={control}
                                    name='country-code'
                                    rules={{required: true}}
                                    render = {({field : {onChange, value}})=>(
                                        <TextInput
                                        keyboardType="numeric"
                                        maxLength={2}
                                        placeholder="91"
                                        style = {[styles.textBox, styles.phno_1]}
                                        />
                                    )}
                                />
                            </View>
                            <Controller
                                control={control}
                                name='phone-no'
                                rules={{required: true}}
                                render = {({field : {onChange, value}})=>(
                                    <TextInput
                                        keyboardType="numeric"
                                        maxLength={10}
                                        onChangeText={onChange}
                                        style = {[styles.textBox, styles.phno_2]}
                                    />
                                )}
                            />
                        </View>
                    </View>
                    <View style={styles.form}>
                        <CustomButtons text="REGISTER" isDone={true} pressHandler={handleSubmit(onSubmit)}/>
                    </View>
                    <View style={[styles.createView, styles.termsView]}>
                        <Text style={[styles.textStyle, styles.termsText]}>By registering, I agree to builders broadcast’s
                        <Text style={{color: '#008AF4'}} onPress={termspage}> terms {"&"} conditions </Text>
                        {"&"}
                        <Text style={{color: '#008AF4'}} onPress={termspage}> privacy policy </Text>
                        </Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}
 
const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginBottom : 20,
    },
    textStyle : {
        fontFamily : "Nunito",
        letterSpacing : 0.6,
        color : "#4A4A4A",
    },
    createView : {
        marginTop : 30,
        marginHorizontal : 40,
    },
    form : {
        marginHorizontal: 40,
        marginTop: 30,
    },
    label : {
        fontSize : 12,
        fontWeight: "900",
    },
    createText : {
        fontSize : 22,
        textAlign : "center",
        fontWeight : "900",
        marginBottom : 20,
    },
    textBox : {
        borderBottomWidth : 1,
        borderColor : "#BECCE0",
        paddingHorizontal : 0,
        paddingVertical : 2,
        color: "#3E506D",
        fontFamily : "Nunito-SemiBold",
        letterSpacing: 0.6,
        fontSize : 15,
    },
    phnoView : {
        marginVertical : 10,
        flexDirection : "row",
        justifyContent: "space-between",
    },
    phno_first : {
        flex : 1,
        flexDirection : "row",
    },
    phno_1 : {
        width : 40,
    },
    phno_plus : {
        width : 15,
    },
    phno_2 : {
        width : 250,
    },
    termsText : {
        color : "#757575",
        textAlign : "center",
        fontSize: 12,
    },
    termsView : {
        marginTop: 10,
    }

})

export default RegisterView;