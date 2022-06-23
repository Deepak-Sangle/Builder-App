import React from 'react';
import { useEffect } from 'react';
import {StyleSheet, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';

export default function ClientRegCarousel({data, builder, setBuilder}) {
  
  useEffect(()=> {
    if(data!==undefined && data.length){
      setBuilder(data[0].groupId);
    }
  },[]);

  return (
    <ScrollView horizontal={true}>
      <View style={styles.externalCarouselCont}>
        {data.map((item, i) => {
          return (
            <TouchableOpacity activeOpacity={0.7} onPress={()=> setBuilder(item.groupId)} style={styles.carouselCont} key={i}>
              <Image style={styles.imageCompCarousel} source={{uri : item.groupLogo}} />
              <RadioButton
                value={item.groupId}
                status={builder === item.groupId ? 'checked' : 'unchecked'}
                onPress={() => setBuilder(item.groupId)}
                color="#0078e9"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  externalCarouselCont: {
    flexDirection: 'row',
    borderBottomWidth : 1,
    borderColor : "#CEE2F5",
    paddingBottom : 20,
  },
  carouselCont: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#e6e6e6',
    width: 140,
  },
  imageCompCarousel: {
    resizeMode: 'contain',
    height: 80,
    width: 80,
  },
});
