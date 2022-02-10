const student = [{
        id: 20,
        Name: "Omar Sanny"
    },
    {
        id: 31,
        Name: "Manna"
    },
    {
        id: 40,
        Name: "Moyuri"
    },
    {
        id: 71,
        Name: "Depjol"
    },
]
// const studentName=[];
// for(var i=0; i<student.length; i++){
//     var elements=student[i];
//     studentName.push(elements.Name);
//     console.log(studentName); 
// }
const studentName = student.map(element => element.Name);
const studentId = student.map(x => x.id);
const studentIdFill = student.filter(y => y.id%2 == 0);
const studentIdOver70=student.find(x=>x.id>70);
const manna=student.find(x=>x.Name===manna);
console.log(manna);
console.log(studentIdOver70);
console.log(studentName);
console.log(studentId);
console.log(studentIdFill);