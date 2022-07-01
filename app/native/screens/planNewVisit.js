import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ClientDetails from './clientRegScreen/ClientDetails';
import CheckboxAndBtn from './clientRegScreen/ClientDetailsBottomPart';
import ClientRegCarousel from './clientRegScreen/clientRegCarousel';
import {useSelector, useDispatch} from 'react-redux';
import LogoHeader from '../../helpers/LogoHeader';
import BottomNavigationTab from '../../helpers/bottomNavigationTab';
import ErrorDialog from '../../helpers/dialogBox';
import CustomFilterMenu from '../../helpers/customFilterMenu';
import ClientVisitTime from './clientRegScreen/ClientVisitTime';
import { getDay, getProjectArray } from '../../utilities/helperFunctions';
import { addBuilders,registerClientVisit, addProjects } from '../../redux-toolkit/slices/clientRegScreenSlice';
import Loader from '../../helpers/Loader';
import jwt_decode from "jwt-decode";
import {token, projectTypes} from '../../Constants/projectConstants';

const PlanNewVisit = ({navigation}) => {

    const dispatch = useDispatch();

    const getDetails = useSelector(state => state.clientRegScreen);
    
    const [builder, setBuilder] = useState();
    const [propertyId, setPropertyId] = useState(projectTypes[0]);
    const [projectId, setProjectId] = useState();
    const [name, setName] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [propertySubType, setPropertySubType ] = useState();
    const [showDialog, setShowDialog] = useState(false);
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [projectList, setProjectList] = useState()
    const [checked, setChecked] = useState(false);
    const [user, setUser] = useState(null);

    const [heading, setHeading] = useState();
    const [err, setErr] = useState();

    const sendRequest = () => {
        const newNumber = user.phone.slice(0,9) + contactNumber;
        const dayOfWeek = getDay(startTime);
        //If youu want the validation in frontend keep it
        if(newNumber!==user.phone){
            setErr(`Phone number is incorrect`);
            setHeading(`Could not Register`);
            setShowDialog(true);
            return;
        }
        else {
          setShowDialog(false);
        }
        const data = {
          builderId : builder,
          broker : user.userId,
          projectId,
          name,
          startTime,
          meetingDate : startTime,
          // endTime,
          contactNumber : newNumber,
          meetingType:"CLIENTVISIT",
          dayOfWeek,
          projectSubType : propertySubType,
        }
        for(const key in data) {
          if(data[key]===undefined){
            setErr(`Please enter ${key}`);
            setHeading(`Could not Register`);
            setShowDialog(true);
            return;
          }
        }
        if(checked){
          addToCalendar();
        }
        console.log(data);
        dispatch(registerClientVisit(data));
        const status = getDetails.status;
        console.log(status);
        if(status===200 || status===201){
          navigation.navigate('MyClient');
        }
        else{
          setShowDialog(true);
          setHeading(`Could not Register`);
          setErr(`Something went wrong`);
        }
      }
      
    useEffect(()=> {
      dispatch(addProjects(setProjectList));
      dispatch(addBuilders());
      setUser(jwt_decode(token));
    },[]);

    useEffect(()=> {
      setPropertyId(projectTypes[0]);
      setProjectId();
    }, [builder])
    
    let loading = true;
    loading = getDetails.loading;

    const changeProperty = () => {
      for(let i=0;i<projectTypes.length;i++){
        if(propertyId===projectTypes[i]){
          setProjectList(getDetails.project[projectTypes[i]]);
        }
      }
    }

    const addToCalendar = () => {

    }

    useEffect(()=> {
      setProjectId();
      setPropertySubType();
    }, [builder])

    return (
      <View style={{flex : 1,}}>
        {!loading && <ScrollView style={{flex : 1,}}>
          <LogoHeader size={55} text="PLAN NEW VISIT" isThreeDot={true} isBack={true} isImage={false} />
          <View style={styles.eventsCont}>
            <Text style={styles.carouselHeader}>Select builder</Text>
            <ClientRegCarousel builder={builder} setBuilder={setBuilder} data={getDetails.builder} />
            <View style={{padding : 20, backgroundColor : "#FFFFFF"}}>
              <View style={styles.mainView}>
              <View style={{marginVertical : -5}}>
                <CustomFilterMenu placeholder={"Select Property"} onPress={changeProperty} item={propertyId} setItem={setPropertyId} list={getDetails.property}  />
              </View>
              <View style={{marginVertical : -5}}>
                <CustomFilterMenu placeholder={"Select Project"}  item={projectId} setItem={setProjectId} list={getProjectArray(projectList, builder)}  />
              </View>
              <View style={{marginVertical : -5}}>
                <CustomFilterMenu placeholder={"Select Property Type"} disabled={projectId ? false : true} item={propertySubType} setItem={setPropertySubType} list={getDetails.propertySubType}  />
              </View>
              <ClientDetails 
                name={name} 
                setName={setName} 
                setContactNumber={setContactNumber} 
              />
              <ClientVisitTime 
                setStartTime={setStartTime} 
                setEndTime={setEndTime}  
              />
              </View>
            </View>
            <CheckboxAndBtn 
              checked={checked} 
              setChecked={setChecked} 
              text="Add to Google Calendar" 
              btnText="SEND VISIT REQUEST" 
              pressHandler={sendRequest}
           />
          </View>
        </ScrollView>}
        {!loading && <BottomNavigationTab />}
        {!loading && showDialog && <ErrorDialog visible={showDialog} setVisible={setShowDialog} heading={heading} err={err} />}
        {loading && <Loader />}
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
      marginTop: 50,
      textAlign: 'center',
      fontFamily: 'Nunito-Bold',
    },
    eventsCont: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    carouselHeader: {
      marginTop: 40,
      marginBottom: 20,
      fontFamily: 'Nunito-Bold',
      color : "#4A4A4A"
    },
    mainView : {
      paddingHorizontal : 30, 
      backgroundColor : "#FFFFFF",
      paddingVertical : 20,
    },
});

export default PlanNewVisit;