//1=Melissa 2=Nickoline 3=Frank

//persoon 1: melissa Vriend.
var firstName1 = "Melissa";
var lastName1 = "Vriend";
var age1 = 15;
var isBoy1 = false;
var isTired1 = true;
var hasHobby1 = "false";

console.log(typeof firstName1);
console.log(typeof lastName1);
console.log(typeof age1);
console.log(typeof isBoy1);
console.log(typeof isTired1);
console.log(typeof hasHobby1);

//persoon 2: Nick Hordijk.
var firstName2 = "Harun";
var lastName2 = "van der keur";
var age2 = 50;
var isBoy2 = true;
var isTired2 = false;
var hasHobby2 = "false";

console.log(typeof firstName2);
console.log(typeof lastName2);
console.log(typeof age2);
console.log(typeof isBoy2);
console.log(typeof isTired2);
console.log(typeof hasHobby2);

//persoon 3: Frank Mühren.
var firstName3 = "Frank";
var lastName3 = "Muhren";
var age3 = 6;
var isBoy3 = true;
var isTired3 = true;
var hasHobby3 = "true";

console.log(typeof firstName3);
console.log(typeof lastName3);
console.log(typeof age3);
console.log(typeof isBoy3);
console.log(typeof isTired3);
console.log(typeof hasHobby3);

//vars optellen
console.log(typeof(firstName1)+"+"+typeof(firstName2)+"="+typeof(firstName1 + firstName2)); //string plus string
console.log(typeof(firstName1)+"+"+typeof(isBoy1)+"="+typeof(firstName1 + isBoy1)); //string plus boolean
console.log(typeof(age3)+"+"+typeof(isBoy2)+"="+typeof(age3 + isBoy2)); // nummer plus boolean
console.log(3+"3");
//function1
function function1(f1, f2){
  return f1 * f2;
}
alert(function1(age1, age2));

//function2
function function2(f3, f4){
  return f3 + f4;
}
alert(function2(firstName1, lastName1));





// var result=document.getElementById("result1");
// result.innerHTML="Hallo ik ben "+(firstName3)+" en ik ben " +age3;
// var result=document.getElementById("result2");
// result.innerHTML="Hallo ik ben "+typeof(firstName3)+" en ik ben " +typeof(age3);
