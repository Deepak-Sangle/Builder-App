import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Dot from 'react-native-vector-icons/Entypo';
import Timeline from 'react-native-timeline-flatlist';

export default function ClientCard({data}) {
  const isReg = data.status.reg;
  const isBook = data.status.booking;

  const localData = [];
  localData.push({title: `Visit Date: ${data.status.visiting}`});

  if (isReg && isBook) {
    localData.push({title: `Registration Date: ${data.status.reg}`});
    localData.push({title: `Booking Date: ${data.status.booking}`});
  } else if (isReg && !isBook) {
    localData.push({title: `Registration Date: ${data.status.reg}`});
  } else if (isBook && !isReg) {
    localData.push({title: `Booking Date: ${data.status.booking}`});
  }

  return (
    <View style={styles.card} key={data.key}>
      <View style={styles.part1}>
        <View>
          <Text style={styles.clientCardName}>
            {data.info}
            {'\n'}
          </Text>
          <Text style={styles.clientCardBuildInfo}>{data.moreInfo}</Text>
        </View>
        <View style={styles.clientDot}>
          <Dot name="dots-three-vertical" size={20} />
        </View>
      </View>
      <View style={styles.part2}>
        <Timeline
          data={localData}
          circleSize={10}
          circleColor="#0078e9"
          style={styles.part22}
          titleStyle={{
            marginTop: -15,
            fontSize: 14,
            fontFamily: 'Nunito-SemiBold',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'column',
  },
  part1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  part2: {
    backgroundColor: '#e7e7e7',
    padding: 10,
  },
  part22: {
    marginLeft: '-17%',
    marginTop: '2%',
  },
  clientDot: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  clientCardName: {
    color: '#000',
    fontFamily: 'Nunito-Bold',
  },
  clientCardBuildInfo: {
    fontFamily: 'Nunito-Regular',
  },
});
