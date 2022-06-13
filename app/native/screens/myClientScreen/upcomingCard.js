import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Dot from 'react-native-vector-icons/Entypo';

const radius = 10;

export default function UpcomingCard({data}) {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  // var year = new Date().getFullYear();

  const getMonthFromString = mon => {
    return new Date(Date.parse(mon + ' 1, 2012')).getMonth() + 1;
  };

  var dataDate = parseInt(data.date.substring(0, 2));
  var temp = data.date.substring(3);
  var dataMonth = getMonthFromString(temp);
  var isTrue;
  var dayy;
  var isTrueCSS;
  var isTrueDate;
  var isTrueDay;
  // console.log('date' + dataDate);
  // console.log('moth' + dataMonth);
  if (dataDate == date && dataMonth == month) {
    isTrue = true;
    dayy = 'Today';
    isTrueCSS = styles.cc1Yes;
    isTrueDate = styles.cc1dateYes;
    isTrueDay = styles.cc1textYes;
  } else {
    isTrue = false;
    dayy = data.day;
    isTrueCSS = styles.cc1No;
    isTrueDate = styles.cc1dateNo;
    isTrueDay = styles.cc1textNo;
  }

  return (
    <View style={styles.card} key={data.key}>
      <View style={isTrueCSS}>
        <View style={styles.textCardComp}>
          <Text style={isTrueDate}>{data.date}</Text>
          <Text style={isTrueDay}>
            {dayy}
            {'\n'}
          </Text>
          <Text style={isTrueDay}>
            {data.time}
            {'\n'}
          </Text>
        </View>
      </View>
      <View style={styles.cc2}>
        <View style={styles.textCardComp}>
          <Text style={styles.cc2name}>{data.name}</Text>
          <Text style={styles.cc2buildingInfoAndRm}>
            {data.info}
            {'\n'}
          </Text>
          <Text style={styles.cc2name}>{data.type}</Text>
          <Text style={styles.cc2buildingInfoAndRm}>{data.rm}</Text>
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
  cc1Yes: {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    backgroundColor: '#429b38',
    padding: 10,
    width: '27%',
  },
  cc1No: {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    backgroundColor: '#ffffff',
    padding: 10,
    width: '27%',
    borderRightWidth: 0.5,
    borderColor: '#d9d9d9',
  },
  nocc1: {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    backgroundColor: 'aqua',
    padding: 10,
  },
  cc1textYes: {
    color: '#fff',
    fontFamily: 'Nunito-SemiBold',
  },
  cc1textNo: {
    color: '#000',
    fontFamily: 'Nunito-SemiBold',
  },
  cc1dateYes: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
  },
  cc1dateNo: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
  },
  textCardComp: {
    marginVertical: 8,
  },
  cc2: {
    padding: 10,
  },
  cc2name: {
    color: '#000',
    fontFamily: 'Nunito-Bold',
  },
  cc2approval: {
    color: '#C0C0C0',
    fontFamily: 'Nunito-Regular',
  },
  cc3: {
    marginVertical: 45,
  },
  cc2buildingInfoAndRm: {
    fontFamily: 'Nunito-SemiBold',
  },
});
