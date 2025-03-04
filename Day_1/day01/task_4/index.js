var WeekDays;
(function (WeekDays) {
    WeekDays["Sunday"] = "Sunday";
    WeekDays["Monday"] = "Monday";
    WeekDays["Tuesday"] = "Tuesday";
    WeekDays["Wednesday"] = "Wednesday";
    WeekDays["Thursday"] = "Thursday";
    WeekDays["Friday"] = "Friday";
    WeekDays["Saturday"] = "Saturday";
})(WeekDays || (WeekDays = {}));
function isWeekend(day) {
    return day === WeekDays.Saturday || day === WeekDays.Friday;
}
console.log(isWeekend(WeekDays.Sunday)); 
console.log(isWeekend(WeekDays.Wednesday)); 
console.log(isWeekend(WeekDays.Friday)); 
