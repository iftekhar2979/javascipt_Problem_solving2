var today=new Date();
var victoryDay=new Date(today.getFullYear,11,16);
if(today.getMonth()==11 && today.getDate()>16){
    victoryDay.setFullYear(victoryDay.getFullYear() + 1);
}
var oneDay=1000*60*60*24;
console.log(Math.round((victoryDay.getTime() - today.getTime())/(oneDay))+ " left until victory Day");