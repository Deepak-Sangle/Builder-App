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

module.exports = {
    getDate, 
    getMonth,
    getDay,
    compareDates
};