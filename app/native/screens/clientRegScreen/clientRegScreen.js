import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ClientDetails from './ClientDetails';
import CheckboxAndBtn from './ClientDetailsBottomPart';
import ClientRegCarousel from './clientRegCarousel';
import {deviceWidth, token, projectTypes} from '../../../Constants/projectConstants';
import {useSelector, useDispatch} from 'react-redux';
import LogoHeader from '../../../helpers/LogoHeader';
import BottomNavigationTab from '../../../helpers/bottomNavigationTab';
import { registerClient, addProjects, addBuilders } from '../../../redux-toolkit/slices/clientRegScreenSlice';
import ErrorDialog from '../../../helpers/dialogBox';
import CustomFilterMenu from '../../../helpers/customFilterMenu';
import { useEffect } from 'react';
import { getProjectArray } from '../../../utilities/helperFunctions';
import Loader from '../../../helpers/Loader';
import jwt_decode from "jwt-decode";

export default function ClientRegScreen({navigation}) {
  
  const dispatch = useDispatch();

  const getDetails = useSelector(state => state.clientRegScreen);

  const [propertyId, setPropertyId] = useState(projectTypes[0]);
  const [propertySpec, setPropertySpec] = useState(`Select a Property`);
  const [builder, setBuilder] = useState();
  const [rm, setRm] = useState();
  const [projectId, setProjectId] = useState();
  const [name, setName] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [showDialog, setShowDialog] = useState(false);
  const [projectList, setProjectList] = useState()
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState(null);

  const sendRequest = () => {
    const newNumber = user.phone.slice(3,9) + contactNumber;
    //If youu want the validation in frontend keep it
    if(newNumber!==user.phone){
        setErr(`Phone number is incorrect`);
        setHeading(`Could not Register`);
        setShowDialog(true);
        return;
    }
    const data = {
      builderId : builder,
      broker : user.userId,
      projectId,
      name,
      contactNumber : newNumber,
    }
    for(const key in data) {
      if(data[key]===undefined){
        setErr(`Please enter the correct ${key}`);
        setHeading(`Invalid ${key}`);
        setShowDialog(true);
        return;
      }
    }

    dispatch(registerClient(data));
    const status = getDetails.status;
    console.log(data);
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

  let loading = true && user!==null;
  loading = getDetails.loading && user!==null;

  const changeProperty = () => {
    for(let i=0;i<projectTypes.length;i++){
      if(propertyId===projectTypes[i]){
        setProjectList(getDetails.project[projectTypes[i]]);
      }
    }
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

  useEffect(()=> {
    setPropertyId(projectTypes[0]);
    setProjectId();
    setRm();
  }, [builder])

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
              <CustomFilterMenu placeholder={"Select Project"} onPress={changeProject} item={projectId} setItem={setProjectId} list={getProjectArray(projectList, builder)}  />
            </View>
            <View style={[{marginVertical : 15}, styles.specView]}>
              <Text style={[styles.textStyle]}>{propertySpec}</Text>
            </View>
            <View style={{marginVertical : -5}}>
              <CustomFilterMenu disabled={projectId ? false : true} placeholder={"Select RM"} item={rm} setItem={setRm} list={getDetails.rm}  />
            </View>
            <ClientDetails 
              name={name} 
              setName={setName} 
              setContactNumber={setContactNumber} />
          </View>
          <CheckboxAndBtn 
            checked={checked} 
            setChecked={setChecked} 
            text="Another broker is involved" 
            btnText="SEND REGISTER REQUEST" 
            pressHandler={sendRequest} 
          />
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
    borderTopWidth : 1,
    borderColor : "#CEE2F5"
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
