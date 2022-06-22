import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ClientDetails from './ClientDetails';
import CheckboxAndBtn from './ClientDetailsBottomPart';
import ClientRegCarousel from './clientRegCarousel';
import {deviceWidth} from '../../../Constants/projectConstants';
import {useSelector, useDispatch} from 'react-redux';
import LogoHeader from '../../../helpers/LogoHeader';
import BottomNavigationTab from '../../../helpers/bottomNavigationTab';
import { registerClient, addProjects, addBuilders } from '../../../redux-toolkit/slices/clientRegScreenSlice';
import ErrorDialog from '../../../helpers/dialogBox';
import CustomFilterMenu from '../../../helpers/customFilterMenu';
import { useEffect } from 'react';
import { getProjectArray } from '../../../utilities/helperFunctions';
import Loader from '../../../helpers/Loader';

export default function ClientRegScreen({navigation}) {
  
  const dispatch = useDispatch();

  const getDetails = useSelector(state => state.clientRegScreen);

  const [broker, setBroker] = useState();
  const [propertyId, setPropertyId] = useState('1');
  const [propertySpec, setPropertySpec] = useState(`Select a Property`);
  const [builder, setBuilder] = useState();
  const [rm, setRm] = useState();
  const [projectId, setProjectId] = useState();
  const [name, setName] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [showDialog, setShowDialog] = useState(false);
  const [projectList, setProjectList] = useState()

  const numb = "9146361134";

  const sendRequest = () => {
    const newNumber = numb.slice(0,6) + contactNumber;
    const data = {
      builder,
      broker,
      projectId,
      name,
      contactNumber : newNumber,
      relationManager : rm
    }
    dispatch(registerClient(data));
    const status = getDetails!==undefined ? getDetails.status : null;
    console.log(data);
    
    if(status===200 || status===201){
      navigation.navigate('SlideView');
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
    if(projectList===undefined) setPropertySpec(`Select a Property`);
    else {
      const project = projectList.find((prj)=> {
        return projectId === prj._id;
      });
      if(project===undefined) setPropertySpec(`Select a Property`);
      else setPropertySpec(`Property Spec (${project.area.value} ${project.area.unit})`);
    }
  }

  return (
    <View style={{flex : 1,}}>
      {!loading && <ScrollView style={{flex : 1,}}>
        <LogoHeader size={55} text="REGISTER A WALK-IN CLIENT" isThreeDot={true} isBack={true} isImage={false} />
        <View style={styles.eventsCont}>
          <Text style={styles.carouselHeader}>Select builder</Text>
          <ClientRegCarousel builder={builder} setBuilder={setBuilder} data={getDetails.builder} />
          <View style={styles.mainView}>
            <View style={{marginVertical : -5}}>
              <CustomFilterMenu placeholder={"Select Property"} onPress={changeProperty} item={propertyId} setItem={setPropertyId} list={getDetails.property}  />
            </View>
            <View style={{marginVertical : -5}}>
              <CustomFilterMenu placeholder={"Select Project"} onPress={changeProject} item={projectId} setItem={setProjectId} list={getProjectArray(projectList)}  />
            </View>
            <View style={[{marginVertical : 15}, styles.specView]}>
              <Text style={[styles.textStyle]}>{propertySpec}</Text>
            </View>
            <View style={{marginVertical : -5}}>
              <CustomFilterMenu placeholder={"Select RM"} item={rm} setItem={setRm} list={getDetails.rm}  />
            </View>
            <ClientDetails name={name} setName={setName} actualNumber={numb.slice(0,6)} contactNumber={contactNumber} setContactNumber={setContactNumber} />
          </View>
          <CheckboxAndBtn text="Another broker is involved" btnText="SEND REGISTER REQUEST" pressHandler={sendRequest} navigation={navigation} />
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
    width: deviceWidth,
  },
  carouselHeader: {
    marginTop: 40,
    marginBottom: 20,
    fontFamily: 'Nunito-Bold',
    color : "#4A4A4A",
  },
  mainView : {
    paddingHorizontal : 60, 
    backgroundColor : "#FFFFFF",
    paddingVertical : 20,
  },
  specView : {
    borderColor: "#BECCE0",
    borderWidth : 1,
    borderRadius : 5,
    backgroundColor : "#DFE7F2",
    padding : 15,
  },
  textStyle : {
    fontFamily: "Nunito",
    letterSpacing: 0.6,
    color: "#4A4A4A",
  }
});
