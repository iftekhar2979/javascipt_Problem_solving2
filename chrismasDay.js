var today = new Date();
var chrismas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {

    chrismas.setFullYear(chrismas.getFullYear() + 1);
}
var oneDay = 1000 * 60 * 60 * 24;
console.log(Math.round((chrismas.getTime() - today.getTime()) / (oneDay)) + " left until chrismas!");