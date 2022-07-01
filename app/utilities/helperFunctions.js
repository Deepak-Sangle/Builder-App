// 2022-06-23T09:43:11.185Z
import {months, weekday} from '../Constants/projectConstants'
import { useSelector } from '../redux-toolkit/stores';
import {projectTypes} from '../Constants/projectConstants';

const getDate = (date) => {
    return parseInt(date.substring(8,10));
}

const getMonth = (date) => {
    return months[parseInt(date.substring(5,7))];
}

const getDay = (date) => {
    const yy = parseInt(date.substring(0,4));
    const mm = parseInt(date.substring(5,7));
    const dd = parseInt(date.substring(8,10));

    const d = new Date(yy,mm,dd);
    return weekday[d.getDay()];
}

const getCurrentDate = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const date = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');

    const stringDate = `${year}-${month}-${date}T${hours}:${minutes}:${seconds}`
    return stringDate;
}

const compareDates = (date) => {
    const currentDate = getCurrentDate();
    const result = currentDate.localeCompare(date.substring(0,16));
    // -1  -> +1   +1 -> 0
    return result === 1 ? 1 : 0;
}

const getMaxDate = (month, year) => {
    const d = new Date();
    const newDate = new Date(year, month+1, 0);
    return newDate.getDate();
}

const getDateArray = (month, year) => {
    let date = [],startIndex=1;
    const d = new Date();
    if(month === d.getMonth() && year=== d.getFullYear()) startIndex = d.getDate();
    for(let i=startIndex;i<=getMaxDate(month, year);i++){
        const day = {label : String(i).padStart(2,'0'), value : i};
        date.push(day);
    }
    return date;
}

const getHoursArray = (date, month, year) => {
    let hours = [], startIndex=1;
    const d = new Date();
    if(date==d.getDate() && month === d.getMonth() && year=== d.getFullYear()) startIndex = d.getHours()-12;
    for(let i=startIndex;i<=12;i++){
        const hr = {label : String(i).padStart(2,'0'), value : i};
        hours.push(hr);
    }
    return hours;
}

const getMinutesArray = (date, month, year, hours, am) => {
    let minutes = [], startIndex=0;
    const d = new Date();
    if(date == d.getDate() && month === d.getMonth() && year=== d.getFullYear()) {
        if((d.getHours()>12 && am===1) && (hours+12===d.getHours()) ){
            startIndex = d.getMinutes();
        }
        else if((d.getHours()<12 && am===0) && hours===d.getHours()){
            startIndex = d.getMinutes();
        }
    }
    for(let i=startIndex;i<=59;i++){
        const mm = {label : String(i).padStart(2,'0'), value : i};
        minutes.push(mm);
    }
    return minutes;
}

const getYearsArray = () => {
    let years = [];
    const d = new Date();
    for(let i=d.getFullYear();i<=d.getFullYear()+5;i++){
        const yyyy = {label : String(i), value : i};
        years.push(yyyy);
    }
    return years;
}

const getMonthArray = (year) => {
    const d = new Date();
    let startIndex = 0;
    if(year === d.getFullYear()) {
        startIndex = d.getMonth(); 
    }
    const month = [];
    for(let i=startIndex;i<12;i++){
        const mm = {label : months[i], value : i};
        month.push(mm);
    }
    return month;
}

const getAmArray = (date, month, year) => {
    const Am = [
        {label : "AM", value : 0},
        {label : "PM", value : 1},
    ];
    const d = new Date();
    if(d.getHours()>12 && date === d.getDate() && month === d.getMonth() && year=== d.getFullYear()) return Am.slice(1);
    else return Am;
}

const getProjectArray = (data, builderId) => {
    if(data==undefined) {
        return [];
    }
    else{
        let result = [];
        data.map((prj, i)=> {
            const project = {value : prj._id, label : prj.name, };
            if(prj.groupId === builderId){
                result.push(project);
            }
        })
        return result;
    }
}

const createProjectList = (projectData, projectType) => {
    const projectList = [];
    projectData.map((prj)=> {
        if(prj.projectType===projectType){
            const temp = {image_url : prj.logo, id : prj._id, isNew : prj.projectStatus==="newLaunch"}
            projectList.push(temp);
        }
    });
    return projectList;
}

const setModifiedProjectList = (data) => {
    const modifiedList = {};
    projectTypes.map((type)=> {
        modifiedList[type] = [];
    });
    data.map((prj)=> {
        modifiedList[prj.projectType].push(prj);
    });
    return modifiedList;
}

module.exports = {
    getDate, 
    getMonth,
    getDay,
    getDateArray,
    getMinutesArray,
    getProjectArray,
    getHoursArray,
    getAmArray,
    getYearsArray,
    getMonthArray,
    createProjectList,
    setModifiedProjectList,
    compareDates
};