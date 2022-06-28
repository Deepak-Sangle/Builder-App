import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import HorizontalDataScroll from '../../helpers/HorizontalDataScroll';
import UpdateCard from '../../helpers/updateCard';
import BottomNavigationTab from '../../helpers/bottomNavigationTab';
import {addBroadcastData} from '../../redux-toolkit/slices/broadCastScreenSlice';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';

export default function BroadcastView({bottomNav}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addBroadcastData());
  }, [broadCast]);

  var broadCast = [];
  broadCast = useSelector(state => state.broadCastScreen.data);

  var updateDetails = [
    {
      id: 1,
      key: 1,
      title: 'General Updates',
      value: `${
        'GENERAL_UPDATES' in broadCast ? broadCast['GENERAL_UPDATES'].length : 0
      }`,
      origVal: 'GENERAL_UPDATES',
    },
    {
      id: 2,
      key: 2,
      title: 'Offer for Brokers',
      value: `${
        'OFFER_BROKERS' in broadCast ? broadCast['OFFER_BROKERS'].length : 0
      }`,
      origVal: 'OFFER_BROKERS',
    },
    {
      id: 3,
      key: 3,
      title: 'Offer for Clients',
      value: `${
        'OFFER_BUYERS' in broadCast ? broadCast['OFFER_BUYERS'].length : 0
      }`,
      origVal: 'OFFER_BUYERS',
    },
    {
      id: 4,
      key: 4,
      title: 'Broker sales Incentives',
      value: `${
        'SALES_BROKER' in broadCast ? broadCast['SALES_BROKER'].length : 0
      }`,
      origVal: 'SALES_BROKER',
    },
    {
      id: 5,
      key: 5,
      title: 'News Update',
      value: `${
        'NEWS_UPDATE' in broadCast ? broadCast['NEWS_UPDATE'].length : 0
      }`,
      origVal: 'NEWS_UPDATE',
    },
  ];

  // for (var i = 0; i < temp.length; i++) {
  //   var first = temp[i].split('_');
  //   updateDetails.push({
  //     title: first[0] + '\n' + first[1],
  //     id: i + 1,
  //     value: broadCast[temp[i]].length,
  //     origVal: temp[i],
  //     key: i + 1,
  //   });
  // }

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View>
          <View style={{marginVertical: 20}}>
            <HorizontalDataScroll
              data={updateDetails}
              heading="PROJECT UPDATES"
              broadCast={broadCast}
            />
          </View>
        </View>
      </ScrollView>
      {bottomNav === false ? (
        <></>
      ) : (
        <View>
          <BottomNavigationTab />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
