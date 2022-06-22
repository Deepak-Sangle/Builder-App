import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ClientDetails from './clientRegScreen/ClientDetails';
import CheckboxAndBtn from './clientRegScreen/ClientDetailsBottomPart';
import ClientRegCarousel from './clientRegScreen/clientRegCarousel';
import {useSelector, useDispatch} from 'react-redux';
import LogoHeader from '../../helpers/LogoHeader';
import BottomNavigationTab from '../../helpers/bottomNavigationTab';
import ErrorDialog from '../../helpers/dialogBox';
import { registerClientVisit } from '../../redux-toolkit/slices/clientRegScreenSlice';
import CustomFilterMenu from '../../helpers/customFilterMenu';
import ClientVisitTime from './clientRegScreen/ClientVisitTime';
import { getDay, getProjectArray } from '../../utilities/helperFunctions';
import { addBuilders, addProjects } from '../../redux-toolkit/slices/clientRegScreenSlice';
import Loader from '../../helpers/Loader';

const PlanNewVisit = ({navigation}) => {

    const dispatch = useDispatch();

    const getDetails = useSelector(state => state.clientRegScreen);
    
    const [broker, setBroker] = useState();
    const [builder, setBuilder] = useState();
    const [propertyId, setPropertyId] = useState("1");
    const [projectId, setProjectId] = useState();
    const [name, setName] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [showDialog, setShowDialog] = useState(false);
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [projectList, setProjectList] = useState()

    const sendRequest = () => {
      const newNumber = numb.slice(0,6) + contactNumber;
      const dayOfWeek = getDay(startTime);
        const data = {
          builder,
          broker,
          projectId,
          name,
          startTime,
          endTime,
          contactNumber : newNumber,
          meetingType:"CLIENTVISIT",
          dayOfWeek,
        }
        console.log(data);
        dispatch(registerClientVisit(data));
        const status = getDetails!==undefined ? getDetails.status : null;
    
        if(status===200 || status===201){
          // navigation.navigate('MyClient');
        }
        else{
          setShowDialog(true);
        }
      }
      
    useEffect(()=> {
      dispatch(addProjects(setProjectList));
      dispatch(addBuilders());
    },[]);
    
    let loading = true;
    loading = getDetails.loading;

    
  const changeProperty = () => {
    if(propertyId==='1') setProjectList(getDetails.project.residential);
    else if(propertyId==='2') setProjectList(getDetails.project.commercial);
    else setProjectList(getDetails.project.institutional);
  }

  const changeProject = () => {
    if(projectList===undefined) {
      
    }
    else {
      const project = projectList.find((prj)=> {
        return projectId === prj._id;
      });

    }
  }

  const numb = "9146361134";

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
                <CustomFilterMenu placeholder={"Select Project"} onPress={changeProject} item={projectId} setItem={setProjectId} list={getProjectArray(projectList)}  />
              </View>
              <ClientDetails name={name} setName={setName} actualNumber={numb.slice(0,6)}  contactNumber={contactNumber} setContactNumber={setContactNumber} />
              <ClientVisitTime setStartTime={setStartTime} setEndTime={setEndTime}  />
              </View>
            </View>
            <CheckboxAndBtn text="Add to Google Calendar" btnText="SEND VISIT REQUEST" pressHandler={sendRequest} navigation={navigation} />
          </View>
        </ScrollView>}
        {!loading && <BottomNavigationTab />}
        {!loading && showDialog && <ErrorDialog visible={showDialog} setVisible={setShowDialog} heading="Could not Register" err="Something went wrong" />}
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