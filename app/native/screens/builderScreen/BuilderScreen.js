import React, {useEffect, useState} from 'react';
import {
  Linking,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import deviceWidth from '../../../Constants/projectConstants';
import AllBuilders from './AllBuilders';
import ConnectedBuilders from './ConnectedBuilders';
import FavProj from './FavProj';
import SearchComp from './SearchAllBuilder';
import DropdownBuilder from './DropdownBuilder';
import {useDispatch, useSelector} from 'react-redux';
import {addBuilderData} from '../../../redux-toolkit/slices/buildersScreenSlice';

const BuilderScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addBuilderData());
  }, []);

  let builderData = [];
  builderData = useSelector(state => state.builderScreen.data);

  const [selectedMemberID, setSelectedMemberID] = useState(1);

  const TabInfo = props => {
    const name = props.name;
    const id = props.id;
    const count = props.count;
    // const isAdmin = props.isAdmin;

    const colorTheme = {
      backgroundColor: selectedMemberID == id ? '#0078E9' : '#FFFFFF',
    };

    const nameColor = {
      color: selectedMemberID != id ? '#000' : '#FFFFFF',
    };

    const countColor = {
      color: selectedMemberID != id ? '#000' : '#FFFFFF',
    };

    // const adminColor = {
    //   color: selectedMemberID == id ? '#0078E9' : '#FFFFFF',
    //   backgroundColor: selectedMemberID != id ? '#0078E9' : '#FFFFFF',
    // };

    return (
      <View>
        <TouchableOpacity
          onPress={() => setSelectedMemberID(id)}
          style={[styles.roundView, colorTheme]}
          activeOpacity={0.5}>
          <View style={styles.textView}>
            <Text style={[styles.textStyle, styles.nameText, nameColor]}>
              {name}
            </Text>
            <Text style={[styles.textStyle, styles.nameText, countColor]}>
              {count}
            </Text>
            {/* {isAdmin && (
              <Text style={[styles.textStyle, styles.adminText, adminColor]}>
                ADMIN
              </Text>
            )} */}
          </View>
        </TouchableOpacity>
        {selectedMemberID == id && (
          <MaterialIcons
            style={styles.arrowdown}
            name="arrow-drop-down"
            size={50}
            color="#0078E9"
          />
        )}
      </View>
    );
  };

  const ScreenToBeRendered = ({index}) => {
    if (index == 1) {
      return <SearchComp data={builderData} />;
    } else if (index == 2) {
      return <ConnectedBuilders />;
    } else {
      return <FavProj />;
    }
  };

  return (
    <View style={styles.mainView}>
      <ScrollView>
        <DropdownBuilder data={builderData} />
        <View style={styles.membersView}>
          {/* <ScrollView horizontal style={{marginHorizontal: 30}}> */}
          <TabInfo
            name={`All ${'\n'}Builders`}
            count={builderData.length}
            id={1}
            key={1}
          />
          <TabInfo
            name={`Connected ${'\n'}Builders`}
            count={0}
            id={2}
            key={2}
          />
          <TabInfo
            name={`Favourite ${'\n'}Projects`}
            count={0}
            id={3}
            key={3}
          />
          {/* </ScrollView> */}
        </View>

        <ScreenToBeRendered index={selectedMemberID} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  roundView: {
    borderRadius: 5,
    borderColor: '#0078E9',
    borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    margin: 10,
    width: 100,
    height: 80,
  },
  mainView: {
    width: deviceWidth - 40,
    alignSelf: 'center',
    height: '100%',
  },
  membersView: {
    flexDirection: 'row',
  },
  textView: {
    alignItems: 'flex-start',
  },
  textStyle: {
    fontFamily: 'Nunito-Regular',
    letterSpacing: 0.5,
    fontSize: 12,
    color: '#4A4A4A',
  },
  nameText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
    marginBottom: 3,
  },
  // adminText: {
  //   fontSize: 10,
  //   fontFamily: 'Nunito-SemiBold',
  //   padding: 3,
  //   borderRadius: 2,
  // },
  arrowdown: {
    position: 'absolute',
    bottom: -15,
    left: 35,
  },
});

export default BuilderScreen;
