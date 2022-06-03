import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MenuListData} from './dummyData/MenuListData';
import {Badge} from 'react-native-paper';

export default function MenuList() {
  return (
    <View style={styles.menuList}>
      <Text style={styles.createYourTeamText}>
        Create Your Team
        <Badge size={25} style={styles.badgeMenu}>
          PRO
        </Badge>
      </Text>

      <View>
        {MenuListData.map(item => {
          return (
            <View key={item.key} style={styles.menuListView}>
              <Text style={styles.menuListText}>{item.text}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.menuListView}>
        <Text style={styles.signOutMenuItem}>Sign out</Text>
      </View>
      <View style={styles.menuListFooter}>
        <Text style={styles.footerStyle}>App version: 1.02.13</Text>
        <Text style={styles.footerStyle}>Copyright @ BuilderBroadcast</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuList: {
    backgroundColor: '#f5f8fc',
  },
  menuListView: {
    borderTopWidth: 1,
    padding: 15,
    justifyContent: 'flex-start',
    borderColor: '#e0e7f1',
  },
  menuListText: {
    marginLeft: '6%',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#4a4a4a',
  },
  createYourTeamText: {
    marginLeft: '5%',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    padding: 15,
    color: '#4a4a4a',
  },
  signOutMenuItem: {
    marginLeft: '6%',
    color: '#4a4a4a',
  },
  menuListFooter: {
    padding: 15,
    marginLeft: '5%',
    marginTop: 40,
    marginBottom: 40,
  },
  footerStyle: {
    color: '#4a4a4a',
  },
  badgeMenu: {
    position: 'absolute',
    left: '41%',
    backgroundColor: '#f5e350',
    fontWeight: 'bold',
    color: '#4a4a4a',
    borderRadius: 5,
    top: '10%',
  },
});
