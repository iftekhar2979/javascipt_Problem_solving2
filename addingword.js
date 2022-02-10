function stringCheck(str1){
    if(str1===null || str1===undefined || str1.substring(0,2)==='Py'){
        return str1;
    }
return 'Py'+str1;
}

console.log(stringCheck("thon"));
console.log(stringCheck("rekthon"));