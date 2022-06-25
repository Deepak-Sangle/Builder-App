import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import LogoHeader from '../../helpers/LogoHeader';

import BottomNavigationTab from '../../helpers/bottomNavigationTab';
import CustomSearchBar from '../../helpers/customSearchBar';
import ImageCorousel from '../../helpers/imageCarousel';
import HorizontalImageScroll from '../../helpers/horizontalImageScroll';
import HorizontalDataScroll from '../../helpers/HorizontalDataScroll';
import {Divider} from 'react-native-paper';
import UpdateCard from '../../helpers/updateCard';
import UpcomingEventsCard from '../../helpers/upcomingEventsCard';
import BroadcastView from './broadCastView';

const DashBoardView = ({navigation, route}) => {
  const access = route.params != undefined ? route.params : false;

  const [searchQuery, setSearchQuery] = useState('');

  const [imageList, setImageList] = useState([
    {
      source: require('../../../android/app/src/main/assets/images/temp_images/building1.jpg'),
      id: 1,
    },
    {
      source: require('../../../android/app/src/main/assets/images/temp_images/building2.jpg'),
      id: 2,
    },
    {
      source: require('../../../android/app/src/main/assets/images/temp_images/building3.jpg'),
      id: 3,
    },
  ]);

  const IMAGE_SIZE = imageList.length;
  const TIME_INTERVAL = 1000;

  const changeImageView = () => {
    setInterval(() => {
      if (selectedIndex <= IMAGE_SIZE - 1) setSelectedIndex(selectedIndex + 1);
      else setSelectedIndex(0);
    }, TIME_INTERVAL);
  };

  const [buildersImage, setBuildersImage] = useState([
    {
      source: require('../../../android/app/src/main/assets/images/temp_images/Bitmap-4.png'),
      id: 4,
    },
    {
      source: require('../../../android/app/src/main/assets/images/temp_images/Bitmap-5.png'),
      id: 5,
    },
    {
      source: require('../../../android/app/src/main/assets/images/temp_images/Bitmap.png'),
      id: 6,
    },
    {
      source: require('../../../android/app/src/main/assets/images/temp_images/Bitmap-1.png'),
      id: 1,
    },
    {
      source: require('../../../android/app/src/main/assets/images/temp_images/Bitmap-2.png'),
      id: 2,
    },
    {
      source: require('../../../android/app/src/main/assets/images/temp_images/Bitmap-3.png'),
      id: 3,
    },
  ]);

  useEffect(() => {
    // changeImageView();    //Need to implement this :((
  });

  const BUILDERS_SIZE = buildersImage.length;

  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true} style={styles.container}>
        <LogoHeader topPadding={30} isThreeDot={true} size={55} />

        <View style={styles.searchBar}>
          <CustomSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            text="Search for builder or properties"
          />
        </View>

        {access && (
          <View style={styles.allCardsView}>
            <UpcomingEventsCard
              textblack={false}
              arrowColor="#00B055"
              backgroundColor="#00B055"
              heading="UPCOMING EVENT"
              date="Dec 15, 2020 at 6 p.m"
              address="Radission, Sohna Road"
              description="Golf Estate Phase 2 Launch Party"
            />
            <UpcomingEventsCard
              textblack={true}
              arrowColor="#0078E9"
              backgroundColor="#F9D56B"
              heading="RUNNING POLL"
              date="Ends on: Dec 15, 2020"
              description="What should be the Pt should be the Pt should be the PLC charges"
            />
          </View>
        )}

        <ImageCorousel imageList={imageList} heading="TOP OFFERS" />

        <View style={{marginVertical: 20}}>
          <Text style={[styles.textStyle, styles.headers, {marginBottom: 20}]}>
            BUILDERS ONBOARD
          </Text>
          <HorizontalImageScroll
            access={access}
            navigation={navigation}
            resizeMode="contain"
            data={buildersImage}
            size={100}
          />
        </View>

        <Divider />
        <BroadcastView bottomNav={false} />
      </ScrollView>
      <View>
        <BottomNavigationTab />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    margin: 15,
  },
  allCardsView: {
    paddingHorizontal: 15,
  },
  offersView: {
    marginVertical: 10,
  },
  textStyle: {
    fontFamily: 'Nunito',
    fontSize: 12,
    letterSpacing: 0.5,
  },
  headers: {
    fontFamily: 'Nunito-Bold',
    color: '#545454',
    marginHorizontal: 15,
  },
});

export default DashBoardView;
