import React from 'react';
import { useState } from 'react';
import {StyleSheet, View, Dimensions, TextInput, Text} from 'react-native';
import CustomFilterMenu from '../../../helpers/customFilterMenu';
import Dropdown from '../myClientScreen/Dropdown';

export default function ClientRegFields({property, project, rmD, projectId, setProjectId}) {

  const [propertyId, setPropertyId] = useState();
  const [rmd, setRmd] = useState();

  return (
    <View style={{marginHorizontal : 20,}}>
      <CustomFilterMenu item={propertyId} setItem={setPropertyId} list={property}  />
      <CustomFilterMenu item={projectId} setItem={setProjectId} list={project}  />
      <Text style={styles.regText}>Property spec(3 BHK - 3425 sqft)</Text>
      <CustomFilterMenu item={rmd} setItem={setRmd} list={rmD}  />
    </View>
  );
}

const styles = StyleSheet.create({
  dropDowns: {
    marginTop: 15,
    backgroundColor: '#dbe5f3',
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 50,
  },
  regText: {
    marginTop: 15,
    backgroundColor: '#dbe5f3',
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 50,
    fontFamily: 'Nunito-SemiBold',
    padding: 15,
    fontSize: 16,
  },
});
