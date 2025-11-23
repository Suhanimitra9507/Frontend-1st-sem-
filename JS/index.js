// javascript is a single threaded ans synchronous language, which means one code at a time, one line code ie.
console.log('hello');
// to print in js select the file, and select integrated terminal, type node filename then enter
// primitive data types- string, integer, boolean, null, undefined
// non-primitive data types- arrays, objects, symbols, and functions
// there are 3 types of variables, ie- let, var and const
// var a = 16;
// console.log(a);


// // difference b/w var and let, const- var (both reassign, and redeclare) let(only reassign), const(none)

// var a; //this is declaration, ie introduced a
// a=30; //assigning value for a
// var a; //re-declaration
// a=40; //re-assigning , this would be print
// console.log(a);
//therefore reassigning and re declaration is possible in only var



// let a; //new declaratn
// a=20; //assignment
// // let a;  redeclaration wont work for let
// a=50; //but reassigning is possible for let
// console.log(a);

const a= 3;
console.log(a); //neither reassign nor redeclaration works for const
//const is generally used with functions 


let realname="Suhani";
let othername=realname;
othername="suha"; //reassign a value to the variable
console.log(realname);
console.log(othername); //it prints the real name and then the othername

//primitive data types store there values into stack memory (last and first eg last chudi pehene hue, woh sabse pehele nikalta hai), extra information there is another memory- queue memory(first nd first , eg first come first serve)
//non primitive data types store thier value into heap memory 

//arr is non primitive- values assigned to it r primtive
let arr=[23, "suhani", true, null, undefined];
let newArr=arr;
newArr[1]="Shysha"; //specific value of a string changes
console.log(arr);
console.log(newArr); //would print the same array twice with the changes value
//  loop through arrays
let arr1 =[20, 30, 40, 50];
for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}

// to declare a function, better way
function user(){
    let x=1;
    let y=4;
    console.log(x+y);
}
user(); //function call

const user1= function(){
    let a=5;
    let b=6;
    console.log(a*b);
}
user1(); //function call

//arrow function this came in es6 version, when EcmaScript 6 was introduced 
const user2= ()=>{
    let p=7;
    let q=8;
    console.log(p-q);
}
user2(); //function call

// HOF- higher order functions- functions that take other functions as arguments or return functions as output
// eg- map, filter, reduce
function s(X){
    console.log(" Inside s");
    X();
}
function u(){ // callback function
    console.log(" Inside u");
}
s(u); //function a is higher order function as it takes function b as argument

//lexical scope- inner function can access variables of outer function but not vice versa
function c(){
    const i=10;
    console.log(i);
    function d(){
        const k=20;
        console.log(i+k); // inner function can access outer function variable
    }
    d();
}
c();

//the function which always remembers it's lexical scope is called closure