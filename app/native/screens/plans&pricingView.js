import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Divider} from 'react-native-paper';
import LogoHeader from '../../helpers/LogoHeader';
import CustomArrow from '../../helpers/customArrow';
import CustomGradient from '../../helpers/customGradient';
import {useSelector} from 'react-redux';
import CreateTeamCard from '../../helpers/createTeamCard';

const PlansPricingView = ({navigation}) => {
  const priceNPlan = useSelector(state => state.walkInScreen.planAndPrice);

  const BuilderplanCard = props => {
    const tag = props.tag;
    const heading = props.heading;
    const price = props.price;
    const price_durn = props.price_durn;
    const description = props.description;
    const pressHandler = props.pressHandler;

    return (
      <View style={styles.cardView}>
        <CustomGradient text={tag} />

        <View style={styles.cardTop}>
          <View style={{marginHorizontal: 10}}>
            <Text style={[styles.textStyle, styles.headingStyle]}>
              {heading}
            </Text>
            <Text style={[styles.textStyle, styles.priceStyle]}>
              Rs. {price}/<Text style={styles.peryearText}>{price_durn}</Text>
            </Text>
          </View>
          <View>
            <CustomArrow
              pressHandler={pressHandler}
              color="#FFFFFF"
              borderWidth={6}
              borderColor="#D0E8FF"
              backgroundColor="#0078E9"
            />
          </View>
        </View>

        <Divider />

        <View style={styles.cardBot}>
          <Text style={[styles.textStyle, styles.descriptionStyle]}>
            {description}
          </Text>
        </View>
      </View>
    );
  };

  var tagg;

  const onPlanPressed = (index)=> {
    if(index==0) navigation.navigate('BuilderPlanView');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <LogoHeader size={55} />

        <View style={styles.plansView}>
          <Text style={[styles.textStyle, styles.plansText]}>
            Plans {'&'} Pricing
          </Text>
        </View>

        <View style={styles.scrollView}>
          {priceNPlan.map((item, index) => {
            if (item.tag != null) tagg = item.tag;
            else tagg = '';
            return (
              <View style={styles.planCardView} key={item.key}>
                <BuilderplanCard
                  pressHandler={()=> onPlanPressed(index)}
                  tag={tagg}
                  heading={item.heading}
                  price={item.price}
                  price_durn={item.price_durn}
                  description={item.desc}
                />
              </View>
            );
          })}
          {/* <BuilderplanCard pressHandler={onPress_perBuilder} tag="" heading="Per Builder Plan" price="2990" price_durn="year/builder" description={text_1}/>
                    </View>
                    <View style={styles.planCardView}>
                        <BuilderplanCard pressHandler={onPress_allAccess} tag="Best seller" heading="All Access Plan" price="19990" price_durn="year" description={text_2}/>
                    </View> */}
        </View>
          <CreateTeamCard backgroundColor="#EAEDF1" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  plansView: {
    marginVertical: 30,
  },
  textStyle: {
    fontFamily: 'Nunito-Regular',
    color: '#4A4A4A',
    letterSpacing: 0.5,
    fontSize: 12,
  },
  plansText: {
    textAlign: 'center',
    fontSize: 24,
  },
  scrollView: {
    flex: 1,
    marginBottom: 30,
  },
  planCardView: {
    margin: 20,
    marginHorizontal: 40,
  },
  cardView: {
    borderRadius: 8,
    shadowOffset: {width: 0, height: 4},
    // shadowColor : "rgba(190,190,190,0.5)",
    elevation: 7,
    shadowRadius: 7,
    shadowOpacity: 0,
    backgroundColor: '#FFFFFF',
  },
  cardTop: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBot: {
    margin: 20,
  },
  tagView: {
    flexDirection: 'row',
  },
  tagText: {
    color: '#1E1E1E',
    padding: 10,
    paddingHorizontal: 20,
  },
  tagGradient: {
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  headingStyle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 15,
    color: '#0078E9',
  },
  priceStyle: {
    color: '#3E506D',
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
  },
  descriptionStyle: {
    marginHorizontal: 10,
  },
});

export default PlansPricingView;
