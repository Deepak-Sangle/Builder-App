import React, { useEffect, useCallback, useState } from 'react';
import { Linking, Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import DropDownPicker from 'react-native-dropdown-picker';
import { Switch } from 'react-native-paper';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import CustomButtons from '../../helpers/customButtons';
import LogoHeader from '../../helpers/LogoHeader';

const CompleteProfileView = () => {

    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            'company_type': '',
            'address': '',
            'state': '',
            'pan' : '',
            'gst': '',
            'rera': ''
        }
    });

    const onSubmit = (data) => {
        data['rera'] = reraSwitch;
        data['state'] = state;
        data['company_type'] = company;
        console.log(data);
    }

    const UploadPANRedirect = () => {

    }

    const UploadGSTRedirect = () => {

    }

    const LinkedInRedirect = ()=> {

    }

    const [open_1, setOpen_1] = useState(false);
    const [company, setCompany] = useState(null);
    const [companyList, setCompanyList] = useState([
        { label: 'Partnership', value: 'partnership' },
        { label: 'Public Company', value: 'public-company' },
        { label: 'Private Company', value: 'private-company' },
    ]);

    const [open_2, setOpen_2] = useState(false);
    const [state, setState] = useState(null);
    const [stateList, setStateList] = useState([
        { label: 'Maharashtra', value: 'maharashtra' },
        { label: 'Haryana', value: 'haryana' },
        { label: 'Goa', value: 'goa' },
        { label: 'Kerela', value: 'kerela' },
        { label: 'Punjab', value: 'punjab' },
    ]);

    const [reraSwitch, setReraSwitch ] = useState(false);
    const onToggleSwitch = ()=> setReraSwitch(!reraSwitch);

    return (
        <ScrollView>    
            <View style={styles.mainView}>
                <View style={[styles.container]}>
                    <LogoHeader isHeader={false} size={75} />
                    <Text style={styles.title}>Please complete your profile</Text>
                    <Text style={styles.describtion}>Completed profile helps you get connected to builders faster.</Text>
                </View>
                <View style={styles.container}>

                    <View style={styles.inputView}>
                        <Text style={[styles.textStyle, styles.label]}>Company Type</Text>
                        <View>
                            <DropDownPicker
                                listMode='SCROLLVIEW'
                                showTickIcon={false}
                                open={open_1}
                                value={company}
                                items={companyList}
                                setOpen={(val)=> {setOpen_1(val); if(val) setOpen_2(false);}}
                                setValue={setCompany}
                                style={styles.dropmenu}
                                textStyle={[styles.droptext, styles.dropdownAdjust]}
                                listItemLabelStyle={styles.listtext}
                                dropDownContainerStyle={styles.dropdown}
                            />
                        </View>
                    </View>

                    <View style={styles.inputView}>
                        <Text style={[styles.textStyle, styles.label]}>Company address</Text>
                        <View>
                            <Controller
                                control={control}
                                name="address"
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={styles.textBox}
                                        onFocus={()=> {setOpen_1(false); setOpen_2(false);}}
                                        textContentType="fullStreetAddress"
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                        </View>
                    </View>

                    <View style={styles.inputView}>
                        <Text style={[styles.textStyle, styles.label]}>State</Text>
                        <View>
                            <DropDownPicker
                                listMode='SCROLLVIEW'
                                showTickIcon={false}
                                open={open_2}
                                value={state}
                                items={stateList}
                                setOpen={(val)=> {setOpen_2(val); if(val) setOpen_1(false);}}
                                setValue={setState}
                                style={[styles.dropmenu]}
                                textStyle={[styles.droptext, styles.dropdownAdjust]}
                                listItemLabelStyle={styles.listtext}
                                dropDownContainerStyle={styles.dropdown}
                            />
                        </View>
                    </View>


                    <View style={styles.inputView}>
                        <Text style={[styles.textStyle, styles.label]}>PAN Number</Text>
                        <View>
                            <Controller
                                control={control}
                                name="pan"
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        onFocus={()=> {setOpen_1(false); setOpen_2(false);}}
                                        style={styles.textBox}
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                            <TouchableOpacity onPress={UploadPANRedirect}>
                                <Text style={styles.uploadimg}>Upload</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.inputView}>
                        <Text style={[styles.textStyle, styles.label]}>Company GST Number</Text>
                        <View>
                            <Controller
                                control={control}
                                name="gst"
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        onFocus={()=> {setOpen_1(false); setOpen_2(false);}}
                                        style={styles.textBox}
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                            <TouchableOpacity onPress={UploadGSTRedirect}>
                                <Text style={styles.uploadimg}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.inputView}>
                        <Text style={[styles.textStyle, styles.label]}>RERA Registered</Text>
                        <Switch 
                            value={reraSwitch} 
                            style={styles.rightBtns} 
                            onValueChange={onToggleSwitch} 
                            thumbColor="#FFFFFF" 
                            trackColor={{ false: "#BECCE0", true: "#9BB1D0" }}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={[styles.textStyle, styles.label]}>Connect LinkedIn Profile <Text style={{color : "#A6A6A6"}}>(Optional)</Text></Text>
                        <TouchableOpacity onPress={LinkedInRedirect} >
                            <EntypoIcon name='linkedin-with-circle' size={20} color="grey" style={[styles.rightBtns]} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={[styles.btnView, styles.container]}>
                    <CustomButtons text="SUBMIT" isDone={true} pressHandler={handleSubmit(onSubmit)} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexGrow: 1,
    },
    container: {
        marginHorizontal: 50,
    },
    icon: {
        textAlign: "center",
        paddingVertical: 10,
        marginVertical: 10,
    },
    title: {
        textAlign: "center",
        fontFamily: "Nunito-SemiBold",
        color: "#545454",
        fontSize: 22,
        margin: 7,
        marginTop : 20,
        letterSpacing: 0.5,
    },
    describtion: {
        textAlign: "center",
        fontFamily: "Nunito-Regular",
        color: "#4A4A4A",
        fontSize: 13,
        margin: 7,
        letterSpacing: 0.5,
        marginBottom: 20,
    },
    inputView: {
        marginVertical: 20,
    },
    textBox: {
        borderBottomWidth: 1,
        borderColor: "#BECCE0",
        paddingHorizontal: 0,
        paddingVertical: 2,
        color: "#3E506D",
        letterSpacing: 0.6,
        fontSize: 14,
        fontFamily: "Nunito-SemiBold",
        flex : 1,
    },
    dropmenu: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#BECCE0",
        borderRadius: 0,
        backgroundColor : "#F5F8FC",
    },
    dropdown: {
        borderRadius: 0,
        borderColor: "#BECCE0",
        borderWidth: 1,
        borderBottomWidth : 0,
    },
    droptext: {
        fontFamily: "Nunito-SemiBold",
        letterSpacing: 0.6,
        color: "#3E506D",
    },
    listtext: {
        borderBottomWidth: 1,
        borderColor: "#BECCE0",
        padding : 10,
    },
    dropdownAdjust : {
        margin: -10, 
    },
    label: {
        fontSize: 12,
        fontFamily: "Nunito-Medium",
    },
    textStyle: {
        fontFamily: "Nunito",
        letterSpacing: 0.6,
        color: "#4A4A4A",
    },
    uploadimg : {
        color : "#0078E9",
        backgroundColor : "#E3ECF6",
        position : "absolute",
        right: 0,
        bottom: 10,
        borderRadius : 5,
        padding : 5,
        paddingHorizontal : 8,
        textAlign : "center",
    },
    rightBtns : {
        position : "absolute",
        right: 0,
        bottom : 0,
    },
    btnView: {
        marginVertical: 20,
    },
});

export default CompleteProfileView;