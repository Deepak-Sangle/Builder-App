import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Dot from 'react-native-vector-icons/Entypo';

const radius = 10;

export default function UpcomingCard({data}) {
  return (
    <View style={styles.card} key={data.key}>
      <View style={styles.cc1}>
        <View style={styles.textCardComp}>
          <Text style={styles.cc1date}>{data.date}</Text>
          <Text style={styles.cc1text}>
            {data.day}
            {'\n'}
          </Text>
          <Text style={styles.cc1text}>
            {data.time}
            {'\n'}
          </Text>
        </View>
      </View>
      <View style={styles.cc2}>
        <View style={styles.textCardComp}>
          <Text style={styles.cc2name}>{data.name}</Text>
          <Text>
            {data.info}
            {'\n'}
          </Text>
          <Text style={styles.cc2name}>{data.type}</Text>
          <Text>{data.rm}</Text>
          <Text style={styles.cc2approval}>{data.approvedOn}</Text>
        </View>
      </View>
      <View style={styles.cc3}>
        <Dot name="dots-three-vertical" size={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 20,
    marginVertical: 20,
    height: 150,
    flexDirection: 'row',
  },
  cc1: {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    backgroundColor: '#429b38',
    padding: 10,
    width: '27%',
  },
  nocc1: {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    backgroundColor: 'aqua',
    padding: 10,
  },
  cc1text: {
    color: '#fff',
  },
  cc1date: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textCardComp: {
    marginVertical: 8,
  },
  cc2: {
    padding: 10,
  },
  cc2name: {
    fontWeight: 'bold',
    color: '#000',
  },
  cc2approval: {
    color: '#C0C0C0',
  },
  cc3: {
    marginVertical: 45,
  },
});
