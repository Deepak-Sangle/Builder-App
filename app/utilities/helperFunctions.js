// 2022-06-23T09:43:11.185Z

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

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
    let date = [];
    for(let i=1;i<=getMaxDate(month, year);i++){
        const day = {label : String(i).padStart(2,'0'), value : i};
        date.push(day);
    }
    return date;
}

const getHoursArray = () => {
    let hours = [];
    for(let i=1;i<=12;i++){
        const hr = {label : String(i).padStart(2,'0'), value : i};
        hours.push(hr);
    }
    return hours;
}

const getMinutesArray = () => {
    let minutes = [];
    for(let i=0;i<=59;i++){
        const mm = {label : String(i).padStart(2,'0'), value : i};
        minutes.push(mm);
    }
    return minutes;
}

const getYearsArray = () => {
    let years = [];
    const d = new Date();
    for(let i=d.getFullYear();i<=d.getFullYear()+25;i++){
        const yyyy = {label : String(i), value : i};
        years.push(yyyy);
    }
    return years;
}

const getAmArray = () => {
    const Am = [
        {label : "AM", value : 0},
        {label : "PM", value : 1},
    ];
    return Am;
}

const getProjectArray = (data) => {
    if(data==undefined) {
        return [];
    }
    else{
        let result = [];
        data.map((prj, i)=> {
            const project = {value : prj._id, label : prj.name, };
            result.push(project);
        })
        return result;
    }
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
    compareDates
};