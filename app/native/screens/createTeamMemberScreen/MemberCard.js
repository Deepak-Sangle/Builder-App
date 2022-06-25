import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Contacts from 'react-native-contacts';
import {PermissionsAndroid} from 'react-native';
import {addTeamMem} from '../../../redux-toolkit/slices/createTeamMemSlice';
import Contact from 'react-native-vector-icons/AntDesign';
import deviceWidth from '../../../Constants/projectConstants';
import Dialog from 'react-native-dialog';

export default function MemberCard() {
  const [checked, setChecked] = useState(false);
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(false);
  const [del, setDel] = useState(false);

  const handleSaveChange = async () => {
    if (mobile == '' && email == '') {
      console.log('enter atleast email or phone');
      return;
    }
    let payload = {
      fullName: fullName,
      phoneNumber: mobile,
      email: email,
    };
    setIsLoading(true);
    const response = await addTeamMem(payload);
    console.log(response);
    if (response === 200 || response === 201) {
      console.log('success');
      setIsLoading(false);
      setSuccess(true);
    } else if (response === 400) {
      console.log('warning');
      setIsLoading(false);
      setWarning(true);
    } else {
      console.log('error');
      setIsLoading(false);
      setError(true);
    }
  };

  const handleCancel = () => {
    setSuccess(false);
    setWarning(false);
    setError(false);
  };

  return (
    <View style={{marginHorizontal: 20}}>
      {/* <View>
        <Button title="Show dialog" />
      </View> */}
      <View style={styles.createMemCont}>
        <Text style={styles.createMemText}>Full Name</Text>
        <TextInput
          style={styles.createMemTextInput1}
          onChangeText={val => setMobile(val)}
        />
        <Text style={styles.createMemText}>Mobile Number</Text>
        <View style={styles.mobNConIconView}>
          <TextInput
            style={styles.createMemTextInput1}
            keyboardType={'phone-pad'}
            onChangeText={val => setFullName(val)}
          />
          <TouchableOpacity>
            <Contact name="contacts" color="#0078e9" size={30} />
          </TouchableOpacity>
        </View>
        <Text style={styles.createMemText}>Email</Text>
        <TextInput
          style={styles.createMemTextInput1}
          onChangeText={val => setEmail(val)}
        />
        <View style={styles.checkBoxView}>
          <View>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color="#0078e9"
            />
          </View>
          <View style={styles.checkBoxTextView}>
            <Text style={styles.checkBoxText}>Can view team data</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleSaveChange()}>
        {isLoading ? (
          <ActivityIndicator
            size="small"
            color="#fff"
            style={styles.saveChangeLoaderView}
          />
        ) : (
          <Text style={styles.saveChangesBtn}>SAVE CHANGES</Text>
        )}
        <View>
          <Dialog.Container visible={success}>
            <Dialog.Title>Bingo!</Dialog.Title>
            <Dialog.Description>Edit was successful</Dialog.Description>
            <Dialog.Button label="Close" onPress={handleCancel} />
          </Dialog.Container>
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
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  clientDetailsPart1: {
    marginTop: 20,
    marginBottom: 8,
  },
  createMemText: {
    fontFamily: 'Nunito-Bold',
    color: '#5e5e5e',
  },
  createMemCont: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 6,
    elevation: 2,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 10,
    marginTop: 20,
    alignSelf: 'center',
    width: deviceWidth - 35,
  },
  createMemTextInput1: {
    padding: 0,
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 1.5,
    fontSize: 17,
    width: '90%',
    borderBottomColor: '#0078e91d',
  },
  contactNoClientDetails: {
    width: '7%',
    fontSize: 17,
  },
  checkBoxView: {
    flexDirection: 'row',
  },
  checkBoxTextView: {
    justifyContent: 'center',
  },
  checkBoxText: {
    color: '#5e5e5e',
    fontFamily: 'Nunito-SemiBold',
  },
  mobNConIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveChangesBtn: {
    padding: 15,
    textAlign: 'center',
    backgroundColor: '#0078e9',
    color: '#fff',
    borderRadius: 5,
    borderColor: '#0078e9',
    fontFamily: 'Nunito-Bold',
    alignSelf: 'center',
    marginTop: '10%',
    width: deviceWidth - 35,
  },
  saveChangeLoaderView: {
    alignSelf: 'center',
    width: deviceWidth - 35,
    padding: 15,
    marginTop: '15%',
    backgroundColor: '#0078e9',
    borderRadius: 5,
  },
});

//   const handleContacts = () => {
//     PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
//       title: 'Contacts',
//       message: 'This app would like to view your contacts.',
//       buttonPositive: 'Please accept bare mortal',
//     }).then(
//       Contacts.getAll()
//         .then(contacts => {
//           // work with contacts
//           console.log(contacts);
//         })
//         .catch(e => {
//           console.log(e);
//         }),
//     );
//   };

//   const showAlert = (title, msg) =>
//     Alert.alert(
//       title,
//       msg,
//       [
//         {
//           text: 'Cancel',
//           onPress: () => Alert.alert('Cancel Pressed'),
//           style: 'cancel',
//         },
//       ],
//       {
//         cancelable: true,
//         onDismiss: () =>
//           Alert.alert(
//             'This alert was dismissed by tapping outside of the alert dialog.',
//           ),
//       },
//     );

// if (response === 200 || response === 201) {
//   //   showAlert('Sucess', 'Sucessfully Added Member');
//   //setIsLoading(false);
//   //   dispatch(addMeetings());
//   //   handleClose();
//   console.log('success');
// } else if (response === 400) {
//   //   let errorMessage = 'Meeting Exists in Database.';
//   //   showNotification(errorMessage, notificationType.ERROR);
//   //   setIsLoading(false);
//   //   showAlert('Error', 'Member already exist');
//   console.log('warning');
// } else {
//   //   let errorMessage = 'Something went wrong';
//   //   showNotification(errorMessage, notificationType.ERROR);
//   //   setIsLoading(false);
//   //   showAlert('Error', 'Something went wrong');
//   console.log('error');
// }
