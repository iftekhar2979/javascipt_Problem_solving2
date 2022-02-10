function removeCharacter(str,charPosition)
{
    part1=str.substring(0,charPosition);
    part2=str.substring(charPosition+1, str.lenght);
    return (part1+part2);
}
console.log(removeCharacter("iftekhar",5));
console.log(removeCharacter("salmin",2));
console.log(removeCharacter("rashid",2));