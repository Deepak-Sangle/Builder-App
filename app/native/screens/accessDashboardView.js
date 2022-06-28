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
import { addDashboardData, getAllBuilders, getAllSubscriptions } from '../../redux-toolkit/slices/dashboardScreenSlice';
import { useDispatch } from '../../redux-toolkit/stores';
import { useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
import { token} from '../../Constants/projectConstants';
import Loader from '../../helpers/Loader';
import Icons from 'react-native-vector-icons/Entypo';
import CustomButtons from '../../helpers/customButtons';

const DashBoardView = ({navigation}) => {
  const dispatch = useDispatch();
  
  const [searchQuery, setSearchQuery] = useState('');

  const [user, setUser] = useState(null);

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

  useEffect(()=> {
    setUser(jwt_decode(token));
    dispatch(addDashboardData());
    dispatch(getAllBuilders());
    dispatch(getAllSubscriptions());
  }, []);

  let builders = [], allBuilders = [], subscriptions = [], loading=true;
  builders = useSelector(state => state.dashboardScreen.data);
  allBuilders = useSelector(state => state.dashboardScreen.allBuilders);
  subscriptions = useSelector(state => state.dashboardScreen.subscriptions);
  // loading = useSelector(state => state.dashboardScreen.loading);
  
  let access;
  access = (user!=null && subscriptions!=undefined) ? ( (user.isTrialEligible || subscriptions.length > 0) ? true : false ) : false;
  
  useEffect(() => {
    // changeImageView();    //Need to implement this :((
  });

  const BUILDERS_SIZE = access ? builders.length : allBuilders.length;

  const checkPlans = () => {
    navigation.navigate('PlansPricingView');
  }

  const rightIcon = <Icons name='chevron-right' size={20} color='#0078E9' />

  return (
    <View style={styles.container}>
      {!loading && <ScrollView nestedScrollEnabled={true} style={styles.container}>
        <LogoHeader topPadding={30} isThreeDot={true} size={55} />

        <View style={styles.searchBar}>
          <CustomSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            text="Search for builder or properties"
          />
        </View>

        {!access && (
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
        {access && <View style={styles.expiredView}>
          <View style={styles.topView}>
            <View style={styles.circle}><Icons name='cross' color='#B92A36' size={20} /></View>
            <View style={styles.rightView}>
              <Text style={[styles.textStyle, styles.overText]}>30 days trial is over</Text>
              <Text style={[styles.textStyle, styles.continueText]}>If you wish to continue the experience, please check our plans.</Text>
              <CustomButtons width={60} borderColor='#B92A36' text="Plans & Pricing" pressHandler={checkPlans} icon={rightIcon} right={true} />
            </View>
          </View>
        </View>

        }
        <ImageCorousel imageList={imageList} heading="TOP OFFERS" />

        <View style={{marginVertical: 20}}>
          <Text style={[styles.textStyle, styles.headers, {marginBottom: 20}]}>
            BUILDERS ONBOARD ({BUILDERS_SIZE})
          </Text>
          <HorizontalImageScroll
            access={access}
            navigation={navigation}
            resizeMode="contain"
            data={access ? builders : allBuilders}
            sourceKey={access ? "groupLogo" : "logo"}
            size={100}
          />
        </View>

        <Divider />
        <BroadcastView bottomNav={false} />
      </ScrollView>}
      {!loading && <View>
        <BottomNavigationTab />
      </View>}
      {loading && <Loader />}
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
  expiredView : {
    borderRadius : 8,
    backgroundColor : "#B92A36",
    padding : 20,
    marginHorizontal : 15,
  },
  topView : {
    flexDirection : "row",
  },
  circle : {
    padding : 5,
    borderRadius : 50,
    backgroundColor : "#FFFFFF",
    width : 30,
    height : 30,
  },
  rightView : {
    marginHorizontal : 20,
  },
  overText : {
    color : "#EEA5AB",
    fontFamily : "Nunito-Bold",
  },
  continueText : {
    fontFamily : "Nunito-SemiBold",
    fontSize : 13,
    color : "#FFFFFF",
    marginVertical : 10,
  }
});

export default DashBoardView;
