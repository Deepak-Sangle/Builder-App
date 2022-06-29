import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomButtons from '../../helpers/customButtons';
import CustomCompanyList from '../../helpers/customCompanyList';
import LogoHeader from '../../helpers/LogoHeader';
import CustomFilterMenu from '../../helpers/customFilterMenu';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const BuilderPlanView = ({navigation}) => {
  const locList = useSelector(state => state.walkInScreen.builderViewLoc);

  const [locationList, setLocationList] = useState(locList);

  const [location, setLocation] = useState('gurugram');

  const [company, setCompany] = useState([
    {
      image_url: 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/a48647e2-d478-415e-b0bf-3ed2fbc6811d/logo/',
      num_of_projects: 18,
      id: 1,
      isSelected: false,
      isTag: true,
    },
    {
      image_url: 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/a48647e2-d478-415e-b0bf-3ed2fbc6811d/logo/',
      num_of_projects: 12,
      id: 2,
      isSelected: false,
      isTag: false,
    },
    {
      image_url: 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/a48647e2-d478-415e-b0bf-3ed2fbc6811d/logo/',
      num_of_projects: 12,
      id: 3,
      isSelected: false,
      isTag: false,
    },
    {
      image_url: 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/2cf1b0ea-5783-431c-8d91-a97b8c4ce41b/logo/1655357093',
      num_of_projects: 18,
      id: 4,
      isSelected: false,
      isTag: true,
    },
    {
      image_url: 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/2cf1b0ea-5783-431c-8d91-a97b8c4ce41b/logo/1655357093',
      num_of_projects: 12,
      id: 5,
      isSelected: false,
      isTag: false,
    },
    {
      image_url: 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/a48647e2-d478-415e-b0bf-3ed2fbc6811d/logo/',
      num_of_projects: 18,
      id: 6,
      isSelected: false,
      isTag: false,
    },
    {
      image_url: 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/2cf1b0ea-5783-431c-8d91-a97b8c4ce41b/logo/1655357093',
      num_of_projects: 18,
      id: 7,
      isSelected: false,
      isTag: false,
    },
    {
      image_url: 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/a48647e2-d478-415e-b0bf-3ed2fbc6811d/logo/',
      num_of_projects: 18,
      id: 8,
      isSelected: false,
      isTag: false,
    },
    {
      image_url: 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/2cf1b0ea-5783-431c-8d91-a97b8c4ce41b/logo/1655357093',
      num_of_projects: 12,
      id: 9,
      isSelected: false,
      isTag: false,
    },
    {
      image_url: 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/a48647e2-d478-415e-b0bf-3ed2fbc6811d/logo/',
      num_of_projects: 12,
      id: 10,
      isSelected: false,
      isTag: false,
    },
    {
      image_url: 'https://s3.ap-south-1.amazonaws.com/web.buildersbroadcast.com/web.buildersbroadcast.com/2cf1b0ea-5783-431c-8d91-a97b8c4ce41b/logo/1655357093',
      num_of_projects: 18,
      id: 4,
      isSelected: false,
      isTag: true,
    },
  ]);

  const [numofCompany, setNumofCompany] = useState(0);

  const onPay = () => {
    company.map(val => {
      if (val.isSelected) val.isTag = true;
      val.isSelected = false;
    });
    setNumofCompany(0);
    console.log(company);
    navigation.navigate('PaymentView');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <LogoHeader size={55} />
        <View style={styles.searchBar}>
          <CustomFilterMenu
            backgroundColor="#FFFFFF"
            radius={30}
            isIcon={true}
            list={locationList}
            item={location}
            setItem={setLocation}
          />
        </View>
        <View>
          <Text style={[styles.textStyle, styles.selectBuilders]}>
            Select builders you would like to gain access for ({company.length}){' '}
          </Text>
          <View style={styles.comingSoonText}>
            <LinearGradient
              style={styles.gradientView}
              colors={['#F0DC57', '#DDB62C']}>
              <Text style={[styles.textStyle, styles.comingSoon]}>
                Coming Soon! Private Builder Floors
              </Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.companylist}>
          <CustomCompanyList
            isTouchable={true}
            numofSelection={numofCompany}
            setNumofSelection={setNumofCompany}
            data={company}
            setData={setCompany}
            text="APPROVED ACCESS"
          />
        </View>
        <View>
          <Text style={styles.priceText}>Rs. 1990 x {numofCompany}</Text>
        </View>
        <View style={styles.payBtnView}>
          <CustomButtons text="PAY" isDone={true} pressHandler={onPay} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  searchBar: {
    marginHorizontal: 80,
  },
  textStyle: {
    marginVertical: 10,
    letterSpacing: 0.5,
    color: '#4A4A4A',
  },
  selectBuilders: {
    fontFamily: 'Nunito-SemiBold',
  },
  comingSoonText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  gradientView: {
    padding: 5,
    borderRadius: 5,
  },
  comingSoon: {
    fontFamily: 'Nunito-BoldItalic',
    fontSize: 12,
    marginVertical: 0,
  },
  companylist: {
    backgroundColor: 'white',
    height: 525,
  },
  payBtnView: {
    marginBottom: 20,
  },
  priceText: {
    color: '#3E506D',
    fontFamily: 'Nunito-Bold',
    letterSpacing: 0.5,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default BuilderPlanView;
