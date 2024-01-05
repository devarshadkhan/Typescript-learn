//@ts-ignore
// let a = 110
// // a = "10"
// console.log(a);

// Maine variable me number add kara toh mujhe TS me error dediya app number me string dal rahe ho isliye. Type 'string' is not assignable to type 'number'.

// is typescript ko run karne ke liye tsc index.ts yeh command run karni padegi or yeh javascript file bana dega. code hamara Javascript ka hi run hoga.



// Two Number add in TS

function addNumber(a: number,b: number):number {
    return a + b 
}

console.log(addNumber(10 , 30));
