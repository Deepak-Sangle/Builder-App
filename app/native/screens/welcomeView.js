import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomButtons from '../../helpers/customButtons';
import LogoHeader from '../../helpers/LogoHeader';
import {useSelector} from 'react-redux';

const WelcomeView = ({navigation}) => {
  const name = useSelector(state => state.walkInScreen.name); //Assuming you getting the user name from database

  const onStart = ()=> {
    navigation.navigate('LoginView')
  }
  const checkPlans = () => {
    navigation.navigate('PlansPricingView');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View>
            <LogoHeader isHeader={false} size={75} />
          </View>
          <View style={styles.circleView}>
            <View style={styles.bigcircle}></View>
          </View>
          <View>
            <Text style={[styles.congo, styles.textStyle]}>
              Congratulations, {name}!
            </Text>
            <Text style={[styles.trial, styles.textStyle]}>
              You’ve got unconditional 30-day free trial
            </Text>
            <Text style={[styles.access, styles.textStyle]}>
              You will have unlimited access to all projects of builders in your
              city for 30 days.
            </Text>
            <View style={{paddingHorizontal: 40, paddingVertical: 20}}>
              <CustomButtons
                text="START FREE TRIAL"
                isDone={true}
                pressHandler={onStart}
              />
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity onPressOut={checkPlans}>
            <Text style={[styles.priceText, styles.textStyle]}>
              Check Plans {'&'} Pricings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  circleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  bigcircle: {
    width: 250,
    height: 250,
    backgroundColor: '#D8D8D8',
    borderRadius: 200,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Nunito',
    marginBottom: 20,
  },
  congo: {
    color: '#429B38',
    fontSize: 25,
  },
  trial: {
    color: '#4A4A4A',
    fontSize: 15,
    fontWeight: 'bold',
  },
  access: {
    color: '#696969',
    margin: 20,
    marginHorizontal: 40,
  },
  priceText: {
    color: '#0078E9',
  },
});

export default WelcomeView;
