for( var year=2014; year<=2050;year++){
    var date=new Date(year,0,1);
    if(date.getDay()===6){
        console.log("1st January is being Saturday "+ year);
    }
}