import React from 'react';
import {Dimensions} from 'react-native';

const deviceWidth = Math.round(Dimensions.get('window').width);

const months = [
    {label : "Jan", value : 0},
    {label : "Feb", value : 1},
    {label : "Mar", value : 2},
    {label : "Apr", value : 3},
    {label : "May", value : 4},
    {label : "June", value : 5},
    {label : "July", value : 6},
    {label : "Aug", value : 7},
    {label : "Sep", value : 8},
    {label : "Oct", value : 9},
    {label : "Nov", value : 10},
    {label : "Dec", value : 11},
];

module.exports = {
    deviceWidth,
    months
}