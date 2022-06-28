import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Divider} from 'react-native-paper';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import CustomIcons from './CustomIcons';
import {
  shareContent,
  viewContent,
  likeContent,
  dislikeContent,
  addBroadcastData,
  getShareData,
} from '../redux-toolkit/slices/broadCastScreenSlice';
import {useDispatch, useSelector} from 'react-redux';

const UpdateCard = props => {
  const completeData = props.details;
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getShareData());
  // }, []);

  return (
    <View>
      <ScrollView style={{flex: 1}}>
        {completeData.length != 0 ? (
          completeData.map((data, index) => {
            //const isFile = data.file != undefined ? true : false;
            const isImages = data.content.length != 0 ? true : false;
            const isProfilePic = data.profilePic != null ? true : false;
            const refId = data._id;

            const createdAt = data.createdAt;
            const currentdate = new Date();

            let currDay = currentdate.getDate();
            let currMonth = currentdate.getMonth() + 1;
            let currYear = currentdate.getFullYear();
            let currTime = currentdate.getHours();

            let yearCreated = createdAt.substring(0, 4);
            let monthCreated = createdAt.substring(5, 7);
            let dayCreated = createdAt.substring(8, 10);
            let hourCreated = createdAt.substring(11, 13);

            let final;

            if (yearCreated == currYear) {
              if (currMonth == monthCreated) {
                if (currDay == dayCreated) {
                  if ((currTime = hourCreated)) {
                    final = 'Today';
                  } else {
                    final = currTime - hourCreated;
                    if (final == 1) final = final + ' hour ago';
                    else final = final + ' hours ago';
                  }
                } else {
                  final = currDay - dayCreated;
                  if (final == 1) final = final + ' day ago';
                  else final = final + ' days ago';
                }
              } else {
                final = currMonth - monthCreated;
                if (final == 1) final = final + ' month ago';
                else final = final + ' months ago';
              }
            } else {
              final = currYear - yearCreated;
              if (final == 1) final = final + ' year ago';
              else final = final + ' years ago';
            }

            {
              /* useEffect(() => {
              dispatch(getShareData(refId));
            });
            let shareData = [];
            shareData = useSelector(state => state.broadCastScreen.shareData);
            console.log(shareData); */
            }

            const onLike = async () => {
              let payload = {
                referenceId: refId,
                likeTime: currentdate,
              };

              const response = await likeContent(payload);
              if (response.status === 200 || response.status === 201) {
                console.log('success');
                dispatch(addBroadcastData());
              } else if (response.status === 400) {
                console.log('warning');
              } else {
                console.log('error');
              }
            };

            const onDislike = async () => {
              let payload = {
                referenceId: refId,
              };

              const response = await dislikeContent(payload);
              if (
                response.status === 200 ||
                response.status === 201 ||
                response.status === 202
              ) {
                console.log('success');
                dispatch(addBroadcastData());
              } else if (response.status === 400) {
                console.log('warning');
              } else {
                console.log('error');
              }
            };

            const onShare = async () => {
              let payload = {
                referenceId: refId,
                shareTime: currentdate,
              };

              const response = await shareContent(payload);
              if (response.status === 200 || response.status === 201) {
                console.log('success');
              } else if (response.status === 400) {
                console.log('warning');
              } else {
                console.log('error');
              }
            };

            const onView = async () => {
              let payload = {
                referenceId: refId,
                viewTime: currentdate,
              };

              const response = await viewContent(payload);
              if (response.status === 200 || response.status === 201) {
                console.log('success');
              } else if (response.status === 400) {
                console.log('warning');
              } else {
                console.log('error');
              }
            };

            return (
              <TouchableOpacity onPress={onView} key={data._id}>
                <View style={styles.container}>
                  <View style={styles.topView}>
                    {isProfilePic && (
                      <Image
                        source={data.companyLogo}
                        resizeMode="contain"
                        style={styles.logoImg}
                      />
                    )}
                    <View style={styles.textView}>
                      {data.author.name && (
                        <Text style={[styles.textStyle, styles.nameText]}>
                          {data.author.name}
                        </Text>
                      )}
                      <Text style={[styles.textStyle, styles.timeText]}>
                        {final}
                      </Text>
                    </View>
                  </View>

                  <Divider />

                  {isImages && (
                    <ScrollView
                      style={{margin: 20, marginRight: 0}}
                      horizontal={true}>
                      {data.content.map((img, index) => {
                        const uri = img.downloadLink;
                        return (
                          <View key={img._id} style={styles.img}>
                            <Image
                              source={{
                                uri,
                              }}
                              resizeMode="cover"
                              style={styles.img}
                            />
                          </View>
                        );
                      })}
                    </ScrollView>
                  )}

                  <Text style={[styles.textStyle, styles.headingText]}>
                    {data.title}
                  </Text>

                  <Text style={[styles.textStyle, styles.descriptionText]}>
                    {data.description}
                  </Text>

                  {/* {isFile && (
              <TouchableOpacity activeOpacity={0.5} style={styles.fileView}>
                <EntypoIcon
                  style={styles.attachmentIcon}
                  name="attachment"
                  size={20}
                  color="#0078E9"
                />
                <Text style={[styles.textStyle, styles.file]}>{data.file}</Text>
              </TouchableOpacity>
            )} */}

                  <View style={styles.bottomView}>
                    <View>
                      {data.hasUserLiked == true ? (
                        <TouchableOpacity
                          style={styles.likeView}
                          onPress={onDislike}>
                          <AntDesignIcon
                            style={styles.likeIcon}
                            name="like1"
                            size={25}
                            color="#0078E9"
                          />
                          <Text style={[styles.textStyle, styles.likeText]}>
                            You {'&'} {data.numLikes} Liked this
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        <></>
                      )}

                      {data.hasUserLiked == false ? (
                        <TouchableOpacity
                          style={styles.likeView}
                          onPress={onLike}>
                          <AntDesignIcon
                            style={styles.likeIcon}
                            name="like2"
                            size={25}
                            color="#0078E9"
                          />
                          <Text style={[styles.textStyle, styles.likeText]}>
                            <Text style={{color: '#008AF4'}}>Like </Text>
                            {data.numLikes}
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        <></>
                      )}
                    </View>

                    <TouchableOpacity
                      onPress={onShare}
                      activeOpacity={0.5}
                      style={styles.shareView}>
                      <EntypoIcon
                        style={styles.shareIcon}
                        name="share"
                        size={25}
                        color="#202020"
                      />
                      <Text style={[styles.textStyle, styles.shareText]}>
                        Share
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })
        ) : (
          <Text style={styles.nthingText}>Nothing yet</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    elevation: 2,
    marginVertical: 10,
  },
  textStyle: {
    fontSize: 12,
    fontFamily: 'Nunito',
    letterSpacing: 0.5,
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    marginLeft: 20,
    marginBottom: 10,
    color: '#4A4A4A',
    fontFamily: 'Nunito-Bold',
  },
  textView: {
    marginVertical: 20,
  },
  timeText: {
    marginLeft: 20,
    color: '#969696',
  },
  logoImg: {
    margin: 20,
    marginRight: 0,
    width: 80,
    height: 40,
  },
  headingText: {
    color: '#4A4A4A',
    fontFamily: 'Nunito-Bold',
    margin: 20,
    marginVertical: 10,
  },
  descriptionText: {
    color: '#949494',
    marginRight: 50,
    margin: 20,
    marginVertical: 0,
  },
  fileView: {
    flexDirection: 'row',
    backgroundColor: '#F5F8FC',
    borderRadius: 4,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  file: {
    color: '#3B3B3B',
    fontFamily: 'Nunito-Italic',
    marginLeft: 20,
  },
  attachmentIcon: {
    marginLeft: 30,
  },
  likeText: {
    color: '#7F7F7F',
  },
  likeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeIcon: {
    marginHorizontal: 10,
  },
  bottomView: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  shareView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareIcon: {
    marginHorizontal: 10,
  },
  shareText: {
    color: '#0078E9',
    marginHorizontal: 10,
  },
  img: {
    height: 200,
    width: 200,
    marginRight: 10,
  },
  nthingText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
    marginTop: '40%',
    alignSelf: 'center',
  },
});

export default UpdateCard;
