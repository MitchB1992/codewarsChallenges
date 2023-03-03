//const stringToNumber = function(str){
  // put your code here
 // return null;
//}



// My Solution


const stringToNumber = str => isNaN(parseInt(str)) ? 0 : parseInt(str);

console.log(stringToNumber("1234"));
console.log(stringToNumber("605"));
console.log(stringToNumber("1405"));
console.log(stringToNumber("-7"));



// Or 



let newInterger = parseInt(str);
if (isNaN(newInterger)) { return 0; }
return newInterger;



console.log(stringToNumber("1234"));
console.log(stringToNumber("605"));
console.log(stringToNumber("1405"));
console.log(stringToNumber("-7")); 