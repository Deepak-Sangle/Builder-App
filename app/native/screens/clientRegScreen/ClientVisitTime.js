import React, {useEffect, useRef} from 'react';
import { useState } from 'react';
import {StyleSheet, View, Text, TextInput, Dimensions} from 'react-native';
import CustomFilterMenu from '../../../helpers/customFilterMenu';
import {months} from '../../../Constants/projectConstants';
import { getDateArray, getYearsArray, getHoursArray, getMinutesArray, getAmArray } from '../../../utilities/helperFunctions';

export default function ClientVisitTime(props) {

  const setStartTime = props.setStartTime;
  const setEndTime = props.setEndTime;

  const d = new Date();

  const [month, setMonth] = useState(d.getMonth());
  const [year, setYear] = useState(d.getFullYear());
  const [date, setDate] = useState(d.getDate());
  const [hours, setHours] = useState(d.getHours() > 12 ? d.getHours()-12 : d.getHours());
  const [minutes, setMinutes] = useState(d.getMinutes());
  const [am, setAm] = useState(d.getHours()>12 ? 1 : 0);

  const dateList = getDateArray(month, year);

  useEffect(()=> {
    if(date > dateList.length) setDate(dateList.length);
  }, [month, year]);

  useEffect(()=> {
    const hh = (am===0) ? hours : hours+12;
    const d = new Date(year, month, date+1, hh-18, minutes-30, 0);
    const isoDate = d.toISOString();
    setStartTime(isoDate);
  });

  return (
    <View>
      <View style={styles.clientDetailsPart1}>
        <Text style={styles.clientDetailsText}>DATE {'&'} TIME</Text>
      </View>
      <View style={styles.clientDetailsPart2}>
        <Text style={[styles.clientDetailsText, {color : "#3E506D"}]}>Select Date</Text>
        <View style={{flexDirection : "row"}}>
          <View style={styles.setTime}>
            <CustomFilterMenu list={getYearsArray()} item={year} setItem={setYear} backgroundColor={"#FFFFFF"} />
          </View>
          <View style={styles.setTime}>
            <CustomFilterMenu list={months} item={month} setItem={setMonth} backgroundColor={"#FFFFFF"} />
          </View>
          <View style={styles.setTime}>
            <CustomFilterMenu list={dateList} item={date} setItem={setDate} backgroundColor={"#FFFFFF"} />
          </View>
        </View>

        <Text style={[styles.clientDetailsText, {color : "#3E506D"}]}>Select Time</Text>
        <View style={{flexDirection : "row"}}>
          <View style={styles.setTime}>
            <CustomFilterMenu down={true} list={getHoursArray()} item={hours} setItem={setHours} backgroundColor={"#FFFFFF"} />
          </View>
          <View style={styles.setTime}>
            <CustomFilterMenu down={true} list={getMinutesArray()} item={minutes} setItem={setMinutes} backgroundColor={"#FFFFFF"} />
          </View>
          <View style={styles.setTime}>
            <CustomFilterMenu down={true} list={getAmArray()} item={am} setItem={setAm} backgroundColor={"#FFFFFF"} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  clientDetailsPart1: {
    marginTop: 20,
    marginBottom: 8,
  },
  clientDetailsText: {
    fontFamily: 'Nunito-Bold',
    color : "#A6A6A6",
    marginBottom : 10,
  },
  clientDetailsPart2: {
    backgroundColor: '#dbe5f3',
    padding: 20,
    borderRadius: 6,
  },
  clientDetailsTextInput1: {
    padding: 0,
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 0.3,
    fontSize: 17,
  },
  contactNoClientDetails: {
    flex : 1,
    fontSize: 17,
  },
  fourDigTxt: {
    marginTop: 10,
    color: '#768497',
    fontFamily: 'Nunito-Regular',
  },
  setTime :{
    flex : 1,
    marginRight : 5
  },
});
