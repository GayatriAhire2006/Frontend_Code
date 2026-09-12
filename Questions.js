// Q.1:
// let name = "Gayatri";
// let age = 19;
// let percentage = 75.5;

// console.log(name);
// console.log(age);
// console.log(percentage);

// o/p:Gayatri
//     19
//     75.5

//Q.2:
// let name = "Gayatri";
// const age = 19;
// var city = "Nashik";

// console.log(name);
// console.log(age);
// console.log(city);

// o/p:Gayatri
//     19
//     Nashik

//Q.3:
// let name = "Gayatri";
// let age = 19;
// let isStudent = true;
// let marks;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof marks);

// o/p:string
//     number
//     boolean
//     undefined

//Q.4:
// let a = 20;
// let b = 10;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// o/p:30
//     10
//     200
//     2
//     0

//Q.5:
// let a = 10;
// let b = 20;

// console.log(a > b);
// console.log(a < b);
// console.log(a == b);
// console.log(a != b);
// console.log(a >= b);
// console.log(a <= b);

// o/p:false
//     true
//     false
//     true
//     false
//     true

//Q.6:
// let a = 20;
// let b = 10;

// console.log(20 >= 10 && a >= 50);
// console.log(20 >= 18 || 20 >= 10);

// o/p:false
//     true

//Q.7:
// let number = -5;

// if (number > 0) {
//     console.log("Positive");
// } else if (number < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }

// o/p:Negative

//Q.8:
// var number = 7;

// if (number % 2 == 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

// o/p:odd

//Q.9:
// let marks = 75;
// if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 75) {
//     console.log("Grade B");
// } else if (marks >= 60) {
//     console.log("Grade C");
// } else {
//     console.log("Fail");
// }
// o/p:Grade B

//Q.10:
// let a = 10;
// let b = 25;
// let c = 15;

// if(a > b){
//     if(a > c){
//         console.log("A is largest");
//     }else{
//         console.log("C is largest");
//     }
// }else{
//     if (b > c) {
//         console.log("B is largest");
//     } else {
//         console.log("C is largest");
//     }
//}
//o/p:B is largest

//Q.11:
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }
// o/p:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//Q.12:
// for (var i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
// o/p:
// 2
// 4
// 6
// 8
// 10
// 12
// 14
//16
//18
//20

//Q.13:
// var i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }
// o/p:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

//Q.14:
// function add(a, b) {
//     return a + b;
// }
// const result = add(10, 20);
// console.log(result);
// o/p:30

//Q.15:
function checkEvenOdd(number) {
    if (number % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
checkEvenOdd(10);
o/p:Even

