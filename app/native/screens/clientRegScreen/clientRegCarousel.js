import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {RadioButton} from 'react-native-paper';

export default function ClientRegCarousel({data}) {
  const [checked, setChecked] = React.useState('first');
  return (
    <ScrollView horizontal={true}>
      <View style={styles.externalCarouselCont}>
        {data.map(item => {
          return (
            <View style={styles.carouselCont} key={item.key}>
              <Image style={styles.imageCompCarousel} source={item.image} />
              <RadioButton
                value={item.value}
                status={checked === `${item.value}` ? 'checked' : 'unchecked'}
                onPress={() => setChecked(`${item.value}`)}
                color="#0078e9"
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  externalCarouselCont: {
    flexDirection: 'row',
    marginBottom: 45,
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
