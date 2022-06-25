import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LogoHeader from '../../helpers/LogoHeader';
import CustomIcons from '../../helpers/CustomIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import deviceWidth from '../../Constants/projectConstants';

const LoginScreenView = ({navigation}) => {
  const [isScanning, setIsScanning] = useState(false);
  const [isScanned, setIsScanned] = useState(false);

  const signUpNow = () => {
    navigation.navigate('RegisterView');
  };

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.container}>
      <LogoHeader topPadding={60} isHeader={true} size={70} />
      <View style={styles.mainView}>
        <Text style={[styles.textStyle, styles.welcome]}>Welcome</Text>
        <Text style={[styles.textStyle, styles.please]}>
          Please login to continue
        </Text>
        <View style={styles.createMemCont}>
          <Text style={styles.createMemText}>Email or Phone Number</Text>
          <TextInput
            style={styles.createMemTextInput1}
            onChangeText={val => setUser(val)}
          />
          <Text style={styles.createMemText}>Password</Text>
          <TextInput
            style={styles.createMemTextInput1}
            onChangeText={val => setPass(val)}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('LoginView')}>
          <Text style={[styles.textStyle, styles.password]}>
            Use Face Id to login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DashBoardView')}>
          <Text style={styles.loginBtn}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[styles.botView, {opacity: !isScanning && !isScanned ? 1 : 0}]}>
        <Text style={styles.textStyle}>Don’t have an account? </Text>
        <TouchableOpacity onPressOut={signUpNow} activeOpacity={0.5}>
          <Text style={[styles.textStyle, {color: '#00A9FF'}]}>
            Sign up now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  loginBtn: {
    marginTop: 10,
    padding: 15,
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: '#0078e9',
    color: '#fff',
    borderRadius: 5,
    borderColor: '#0078e9',
    fontFamily: 'Nunito-Bold',
    width: deviceWidth - 60,
  },
  textStyle: {
    color: '#757575',
    fontFamily: 'Nunito-SemiBold',
    letterSpacing: 0.5,
    fontSize: 12,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  welcome: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 22,
    color: '#696969',
    marginVertical: 7,
  },
  please: {
    fontFamily: 'Nunito-Regular',
    marginVertical: 8,
  },
  logoView: {
    marginHorizontal: 10,
  },
  faceView: {
    backgroundColor: '#FFFDFD',
    borderRadius: 6,
    elevation: 3,
    padding: 20,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  useFace: {
    color: '#5E5E5E',
    fontFamily: 'Nunito-Bold',
    marginHorizontal: 10,
  },
  password: {
    color: '#008AF4',
    marginVertical: 10,
  },
  botView: {
    borderColor: '#BECCE0',
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#E0E7F1',
    padding: 35,
  },
  createMemCont: {
    padding: 20,
    borderRadius: 6,
    marginBottom: 10,
    marginTop: 20,
    alignSelf: 'center',
    width: deviceWidth - 60,
  },
  createMemTextInput1: {
    borderBottomWidth: 1,
    borderColor: '#BECCE0',
    paddingHorizontal: 0,
    paddingVertical: 2,
    color: '#3E506D',
    fontFamily: 'Nunito-SemiBold',
    letterSpacing: 0.6,
    fontSize: 15,
  },
  createMemText: {
    fontFamily: 'Nunito-Bold',
    color: '#696969',
    marginTop: 15,
  },
});

export default LoginScreenView;
