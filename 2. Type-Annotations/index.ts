//@ts-ignore

// 1st Example
const a: number = 10;
console.log(a);

// 2nd Example

function addNum(e: number, b: number): number {
    return e + b;
}

console.log(addNum(10, 20));

// question

let nanValue: number = NaN;
console.log(nanValue);

// let stringMatchNumber:number = 10 + "str" // error type apne number diya hai o string bhi pass kar rahe ho
// console.log(stringMatchNumber);

//! String

// lets have a create string in TS

let str: string = "Arshad Khan 101 Days of JS";
console.log(str);

// Practice Queation in String With TS

// get a string length

let length_of_a_string: string =
    "Hello Guys :) Welcome to 101 days of Javascript";

let check_lenth: number = length_of_a_string.length;
console.log(check_lenth);

// concatenation string

let con1: string = "Arshad";
let con2: string = "Khan";
// let conRes:string = con1 +" " +con2
let conRes: string = `${con1 + con2}`;
console.log(conRes);

// reverse string

function reverseString(params: string){
    const res = params.split("").reverse().join(""); //naahtaP nahK dahsrA

    // 2ns step

    const res1 = params.split(" ").map((e) => e.split("").reverse().join(""));


    return res1.join("");
}
console.log(reverseString("Arshad Khan Pathaan"));


// String UpperCase and LowerCase With TS


const capitalString:string  = "Arshad Khan Pathaan"
console.log(capitalString.toUpperCase());

const LowerCaseString = "Arshad Khan Pathaan"
console.log(LowerCaseString.toLocaleLowerCase());


// Write a JavaScript function to check whether an 'input' is a string or not.

const checkString:string = "Arshad Khan Pathaan Dev"

const checkStr = (params:string)=>{
    if(typeof params === "string"){
        return true
    }
    else{
       return false
    }
}
console.log(checkStr(checkString));
