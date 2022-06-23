import React from 'react';
import {Dimensions} from 'react-native';

const deviceWidth = Math.round(Dimensions.get('window').width);

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5OWE3YTRjOC00MjJlLTRhN2UtOGE2NS1iOWM1NzI3ZTZhZjQiLCJmaXJzdE5hbWUiOiJidW5ueSIsImxhc3ROYW1lIjoia3VtYXIiLCJ1c2VyTmFtZSI6ImJ1bm55IGt1bWFyIiwicHJvZmlsZUltYWdlIjpudWxsLCJlbWFpbCI6ImJ1bm55QGdtYWlsLmNvbSIsInBob25lIjoiKzkxOTgzNDU2NzgyNSIsInJvbGVJZCI6IjIwNjUzNzlhLTQ0Y2QtNGE4NS04MDVlLTdjMGMwMTZhMjk5MiIsInJvbGVOYW1lIjoiU1VQRVJfQURNSU4iLCJncm91cElkIjpbIjJjZjFiMGVhLTU3ODMtNDMxYy04ZDkxLWE5N2I4YzRjZTQxYiIsImE0ODY0N2UyLWQ0NzgtNDE1ZS1iMGJmLTNlZDJmYmM2ODExZCJdLCJncm91cE5hbWUiOlsiRExGIiwiYXBhcm5hIGNvbnN0cnVjdGlvbnMiXSwic2hvcnROYW1lIjoiZGxmZ2giLCJsb2dvIjoiaHR0cHM6Ly9zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vd2ViLmJ1aWxkZXJzYnJvYWRjYXN0LmNvbS93ZWIuYnVpbGRlcnNicm9hZGNhc3QuY29tLzJjZjFiMGVhLTU3ODMtNDMxYy04ZDkxLWE5N2I4YzRjZTQxYi9sb2dvLzE2NTUzNTcwOTMiLCJkZXNpZ25hdGlvbiI6ImhlYWQgZGVwYXJ0bWVudCIsInVzZXJUeXBlIjoiYnJva2VyIiwidGVhbU5hbWUiOm51bGwsInBlcm1pc3Npb25zIjpbXSwiaWF0IjoxNjU1OTA0NzY4LCJleHAiOjE2NTk1MDQ3Njh9.zOKMSnHc7QE3KuA-TKUQo8Ly2gXLK_Toy1HhzCABJq0';
//for now storing token here!

const projectTypes = ["residential","commercial","farmHouse","industrial","institutional"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

module.exports = {
    deviceWidth,
    token,
    projectTypes,
    months, 
    weekday
}