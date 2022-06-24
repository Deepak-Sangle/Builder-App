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
  }, []);

  var broadCast = [];
  broadCast = useSelector(state => state.broadCastScreen.data);

  var temp = [];
  temp = Object.keys(broadCast);

  var updateDetails = [];
  for (var i = 0; i < temp.length; i++) {
    var first = temp[i].split('_');
    updateDetails.push({
      title: first[0] + '\n' + first[1],
      id: i + 1,
      value: broadCast[temp[i]].length,
      origVal: temp[i],
      key: i + 1,
    });
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View>
          {broadCast.length != 0 && (
            <View style={{marginVertical: 20}}>
              <HorizontalDataScroll
                data={updateDetails}
                heading="PROJECT UPDATES"
                broadCast={broadCast}
              />
            </View>
          )}
        </View>
      </ScrollView>
      {bottomNav == false ? (
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

// const [cardUpdates, setCardUpdates] = useState([
//   {
//     title: 'Lorem ipsum dolor sit amet',
//     name: 'M3M Sierra 68',
//     companyLogo: require('../../../android/app/src/main/assets/images/temp_images/Bitmap-5.png'),
//     description:
//       'Curabitur porttitor tellus et libero dignissim, commodo vulputate augue condimentum. Etiam id diam elit.',
//     file: 'Update-Rate-List.xls',
//     youLiked: true,
//     likes: '35',
//     time: '39 mins',
//     id: 1,
//   },
//   {
//     title: 'Lorem ipsum dolor sit amet',
//     name: 'M3M 65 Avenue',
//     companyLogo: require('../../../android/app/src/main/assets/images/temp_images/Bitmap-4.png'),
//     description:
//       'Curabitur porttitor Curabitur porttitor tellus et libero dignissim, commodo tellus et libero dignissim, commodo vulputate augue condimentum. Etiam id diam elit.',
//     youLiked: false,
//     likes: '25',
//     time: '2 hours',
//     id: 2,
//     images: [
//       require('../../../android/app/src/main/assets/images/temp_images/building1.jpg'),
//       require('../../../android/app/src/main/assets/images/temp_images/building2.jpg'),
//     ],
//   },
//   {
//     title: 'Lorem ipsum dolor sit lorem iipsum volar morghulis amet',
//     name: 'M3M 65 Avenue',
//     description:
//       'Curabitur porttitor Curabitur porttitor tellus et libero dignissim, commodo tellus et libero dignissim, commodo vulputate augue condimentum. Etiam id diam elit.',
//     youLiked: false,
//     likes: '345',
//     time: '2 hours',
//     id: 3,
//   },
// ]);
