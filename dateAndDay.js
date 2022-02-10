var today = new Date();
var day = today.getDay();
var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
console.log("Today is : " + dayList[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? "AM" : "PM";
(hour >= 12) ? hour - 12: hour;
if (hour === 0 && prepand === 'AM') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = "NOON";
    } else {
        hour = 12;
        prepand = 'AM';
    }
}
if (hour === 0 && prepand === "PM") {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = "Mid Night";
    } else {
        hour = 12;
        prepand = 'PM';
    }
}
console.log("Current time : " + hour + prepand + " : " + minute + " : " + second)