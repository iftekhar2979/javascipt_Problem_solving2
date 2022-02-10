var today=new Date();
var motherLanguageDay=new Date(today.getFullYear(),1,21);
if(today.getMonth()==1 && today.getDate()>21){
    motherLanguageDay.setFullYear(motherLanguageDay.getFullYear() + 1);

}
var oneDay=1000*60*60*24;
console.log(Math.round((motherLanguageDay.getTime()-today.getTime())/(oneDay))+" left day for Internation Mother Language Day")