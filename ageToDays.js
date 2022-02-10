// function age(ages){
//     var days=ages*365;
    
//     return days;
// }
// const result=age(22);
// console.log(result);


var today=new Date();
var birthDay=new Date(2001,02,8);
var year=(birthDay-today)/365;

console.log(year);

