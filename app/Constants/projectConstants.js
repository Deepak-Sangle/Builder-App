import React from 'react';
import {Dimensions} from 'react-native';

const deviceWidth = Math.round(Dimensions.get('window').width);

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5OWE3YTRjOC00MjJlLTRhN2UtOGE2NS1iOWM1NzI3ZTZhZjQiLCJmaXJzdE5hbWUiOiJidW5ueSIsImxhc3ROYW1lIjoia3VtYXIiLCJ1c2VyTmFtZSI6ImJ1bm55IGt1bWFyIiwicHJvZmlsZUltYWdlIjpudWxsLCJlbWFpbCI6ImJ1bm55QGdtYWlsLmNvbSIsInBob25lIjoiKzkxOTgzNDU2NzgyNSIsInJvbGVJZCI6IjIwNjUzNzlhLTQ0Y2QtNGE4NS04MDVlLTdjMGMwMTZhMjk5MiIsInJvbGVOYW1lIjoiU1VQRVJfQURNSU4iLCJncm91cCI6W3siaWQiOiIyY2YxYjBlYS01NzgzLTQzMWMtOGQ5MS1hOTdiOGM0Y2U0MWIiLCJuYW1lIjoiRExGIiwibG9nbyI6Imh0dHBzOi8vczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL3dlYi5idWlsZGVyc2Jyb2FkY2FzdC5jb20vd2ViLmJ1aWxkZXJzYnJvYWRjYXN0LmNvbS8yY2YxYjBlYS01NzgzLTQzMWMtOGQ5MS1hOTdiOGM0Y2U0MWIvbG9nby8xNjU1MzU3MDkzIiwic2hvcnROYW1lIjoiZGxmZ2gifSx7ImlkIjoiYTQ4NjQ3ZTItZDQ3OC00MTVlLWIwYmYtM2VkMmZiYzY4MTFkIiwibmFtZSI6ImFwYXJuYSBjb25zdHJ1Y3Rpb25zIiwibG9nbyI6Imh0dHBzOi8vczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL3dlYi5idWlsZGVyc2Jyb2FkY2FzdC5jb20vd2ViLmJ1aWxkZXJzYnJvYWRjYXN0LmNvbS9hNDg2NDdlMi1kNDc4LTQxNWUtYjBiZi0zZWQyZmJjNjgxMWQvbG9nby8iLCJzaG9ydE5hbWUiOiJhc2RmIn1dLCJkZXNpZ25hdGlvbiI6ImhlYWQgZGVwYXJ0bWVudCIsInVzZXJUeXBlIjoiYnJva2VyIiwidGVhbU5hbWUiOm51bGwsImlzVHJpYWxFbGlnaWJsZSI6ZmFsc2UsInBlcm1pc3Npb25zIjpbXSwiaWF0IjoxNjU2MjQ0MTM3LCJleHAiOjE2NTk4NDQxMzd9.dEyb1R21YkO7JiJMTizTy3b91xKuKuRf54RkwJPjY_0";
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