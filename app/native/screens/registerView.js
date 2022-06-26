import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LogoHeader from '../../helpers/LogoHeader';
import {registerAccount} from '../../redux-toolkit/slices/walkInScreensSlice';
import {useState} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import deviceWidth from '../../Constants/projectConstants';
import Dialog from 'react-native-dialog';

const RegisterView = ({navigation}) => {
  function termspage() {}

  const [user, setUser] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(false);
  const [mandatory, setMandatory] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);
    if (user && email && password && mobile && company) {
      let payload = {
        fullName: user,
        companyName: company,
        email: email,
        phoneNumber: mobile,
        password: password,
        userType: 'broker',
      };

      const response = await registerAccount(payload);
      console.log(response);
      if (response === 200 || response === 201) {
        console.log('success');
        setIsLoading(false);
        navigation.navigate('OtpView');
      } else if (response === 400) {
        console.log('warning');
        setIsLoading(false);
        setWarning(true);
      } else {
        console.log('error');
        setIsLoading(false);
        setError(true);
      }
    } else {
      console.log('All fields are needed');
      setIsLoading(false);
      setMandatory(true);
    }
  };

  const handleCancel = () => {
    setWarning(false);
    setError(false);
    setMandatory(false);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{marginVertical: 30}}>
          <LogoHeader isHeader={true} size={70} />
        </View>
        <View style={[styles.createView]}>
          <Text style={[styles.createText, styles.textStyle]}>
            Create New Account
          </Text>
        </View>
        <View>
          <View style={styles.form}>
            <Text style={[styles.label, styles.textStyle]}>Full Name</Text>

            <TextInput
              style={styles.textBox}
              onChangeText={val => setUser(val)}
            />
            <Text style={[styles.label, styles.textStyle, styles.textMargin]}>
              Company Name
            </Text>

            <TextInput
              style={styles.textBox}
              onChangeText={val => setCompany(val)}
            />
            <Text style={[styles.label, styles.textStyle, styles.textMargin]}>
              Email
            </Text>

            <TextInput
              style={styles.textBox}
              onChangeText={val => setEmail(val)}
            />
            <Text style={[styles.label, styles.textStyle, styles.textMargin]}>
              Password
            </Text>

            <TextInput
              style={styles.textBox}
              onChangeText={val => setPassword(val)}
            />
          </View>
          <View style={styles.form}>
            <Text style={[styles.label, styles.textStyle]}>Mobile Number</Text>
            <View style={styles.phnoView}>
              <View style={styles.phno_first}>
                <TextInput style={[styles.textBox, styles.phno_plus]}>
                  +
                </TextInput>

                <TextInput
                  keyboardType="numeric"
                  maxLength={2}
                  placeholder="91"
                  style={[styles.textBox, styles.phno_1]}
                />
              </View>

              <TextInput
                keyboardType="numeric"
                maxLength={10}
                onChangeText={val => setMobile(val)}
                style={[styles.textBox, styles.phno_2]}
              />
            </View>
          </View>

          <View style={styles.form}>
            <TouchableOpacity onPress={() => handleRegister()}>
              {isLoading ? (
                <ActivityIndicator
                  size="small"
                  color="#fff"
                  style={styles.saveChangeLoaderView}
                />
              ) : (
                <Text style={styles.saveChangesBtn}>REGISTER</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={[styles.createView, styles.termsView]}>
            <Text style={[styles.textStyle, styles.termsText]}>
              By registering, I agree to builders broadcast’s
              <Text style={{color: '#008AF4'}} onPress={termspage}>
                {' '}
                terms {'&'} conditions{' '}
              </Text>
              {'&'}
              <Text style={{color: '#008AF4'}} onPress={termspage}>
                {' '}
                privacy policy{' '}
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Dialog.Container visible={warning}>
          <Dialog.Title>Warning</Dialog.Title>
          <Dialog.Description>Take Care from next time</Dialog.Description>
          <Dialog.Button label="Close" onPress={handleCancel} />
        </Dialog.Container>
      </View>
      <View>
        <Dialog.Container visible={error}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Description>Something went wrong</Dialog.Description>
          <Dialog.Button label="Try Again" onPress={handleCancel} />
        </Dialog.Container>
      </View>
      <View>
        <Dialog.Container visible={mandatory}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Description>All fields are required</Dialog.Description>
          <Dialog.Button label="Cancel" onPress={handleCancel} />
        </Dialog.Container>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  textStyle: {
    fontFamily: 'Nunito',
    letterSpacing: 0.6,
    color: '#4A4A4A',
  },
  createView: {
    marginTop: 30,
    marginHorizontal: 40,
  },
  form: {
    marginHorizontal: 40,
    marginTop: 30,
  },
  label: {
    fontSize: 12,
    fontWeight: '900',
  },
  textMargin: {
    marginTop: 10,
  },
  createText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '900',
    marginBottom: 20,
  },
  textBox: {
    borderBottomWidth: 1,
    borderColor: '#BECCE0',
    paddingHorizontal: 0,
    paddingVertical: 2,
    color: '#3E506D',
    fontFamily: 'Nunito-SemiBold',
    letterSpacing: 0.6,
    fontSize: 15,
  },
  phnoView: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  phno_first: {
    flex: 1,
    flexDirection: 'row',
  },
  phno_1: {
    width: 40,
  },
  phno_plus: {
    width: 15,
  },
  phno_2: {
    width: 250,
  },
  termsText: {
    color: '#757575',
    textAlign: 'center',
    fontSize: 12,
  },
  termsView: {
    marginTop: 10,
  },
  saveChangeLoaderView: {
    alignSelf: 'center',
    width: deviceWidth - 35,
    padding: 15,
    backgroundColor: '#0078e9',
    borderRadius: 5,
    textAlign: 'center',
  },
  saveChangesBtn: {
    alignSelf: 'center',
    width: deviceWidth - 35,
    padding: 15,
    textAlign: 'center',
    backgroundColor: '#0078e9',
    borderRadius: 5,
    fontFamily: 'Nunito-Bold',
    color: '#fff',
  },
});

export default RegisterView;
