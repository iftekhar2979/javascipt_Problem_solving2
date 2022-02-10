function explain_callback(name,age,task){
    console.log("hello",name);
    console.log("your age",age);
    task();
}

function washHand(){
    console.log("Wash your hand with soaop");

}

function takeShower(){
    console.log("Take shower");
}
function scrollFacebook(){
    console.log("Scroll facebook")
}

explain_callback("sogir uddin",18,takeShower);
explain_callback("Mogir uddin",19,scrollFacebook);
explain_callback("Togir uddin",21,washHand);