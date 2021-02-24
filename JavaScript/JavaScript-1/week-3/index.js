// // Task 1
// let myString = "hello,this,is,a,difficult,to,read,sentence";
// console.log(myString);
// console.log(myString.length);

// //replace method. use regex
// let newString = myString.replace(/,/g, " ");
// console.log(newString);

// //replace all method
// console.log(myString.replaceAll(',', ' '));

// //split and join (just for array) method
// let newString = myString.split(",");
// let anotherString = newString.join(" "); // = with let newString = myString.split(",").join(" ");
// console.log(anotherString);

// // Task 2
// let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
// favoriteAnimals.push("turtle"); //add in the end of array; unshift - add in the first array; shift - remove first array; pop - remove the last of array
// console.log(favoriteAnimals);

// favoriteAnimals.splice(1, 0, "meerkat"); //0 because we don't want to remove items
// console.log(favoriteAnimals);
// console.log('The array has a length of:', favoriteAnimals.length);

// delete favoriteAnimals[3]; //another way to splice: favoriteAnimals.splice(3, 1);
// console.log(favoriteAnimals);

// let meerkatIndex = favoriteAnimals.indexOf("meerkat");
// console.log('The item you are looking for is at index:', meerkatIndex);
// // -1 in the js console means not exist
// favoriteAnimals.splice(meerkatIndex, meerkatIndex); //this is more favorable than splice(1,1);
// console.log("favorit animals: ", favoriteAnimals);

// //MORE JAVASCRIPT
// //Task 1 
// //-- declaration function
// function totalSum(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// // Or arrow function = definition expression
// const sum2 = (x, y, z) => x + y + z;
// console.log(totalSum(2, 5, 3));

// //Task 2
// function colorCar(color) {
//     return `a ${ color } car`;
// }
// console.log(colorCar("red"));

// // Task 3
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// function printObject(obj) {
//     //console.log(obj); -- the stupid solution
//     for (const key in obj) { // -- more favorable solution
//         return `${ key } has value ${person[key]}`;
//     }
// }

//     //my answer
//     for (var i in person) {
//         console.log(i + " has value: " + person[i]);
//     }

// console.log(printObject(person));

//     //Task 4
//     const vehicleType = (color, code) => {
//         if (code == 1) {
//             console.log(`a ${ color } car`);
//         } else if (code == 2) {
//             console.log(`a ${ color } motorbike`);
//         }
//     }

//     vehicleType("red", 1);
//     vehicleType("pink", 2);

//     // Task 5
// my answer
//     console.log(3 === 3);

// school answer
// let yesOrNo = 3 === 3 ? console.log("yes") : console.log("no");
// console.log(yesOrNo);

//     // Task 6
// my answer
//     const vehicleType = (color, code, age) => {
//         if (age > 0) {
//             if (code == 1) {
//                 console.log(`a used ${ color } car`);
//             } else if (code == 2) {
//                 console.log(`a used ${ color } motorbike`);
//             }
//         } else {
//             if (code == 1) {
//                 console.log(`a new ${ color } car`);
//             } else if (code == 2) {
//                 console.log(`a new ${ color } motorbike`);
//             }
//         }
//     }
//     vehicleType("red", 1, 0);

// function vehicle(color, code, age) {
//     if (code === 1) {
//         age > 0 ? console.log(`a ${ color } used car`) : console.log(`a ${ color } new car`);
//     } else if (code === 2) {
//         age > 0 ? console.log(`a ${ color } used motorbike`) : console.log(`a ${ color } new motorbike`);
//     } else {
//         console.log("Invalid code");
//     }
// }
// vehicle("red", 1, 0);

//     // Task 7
// vehicles = ["motorbike", "caravan", "bike", "plane", "helicopter"];
//     console.log(vehicles);

//     //Task 8
//     console.log(vehicles[2]);

//     //Task 9
// my answer -- ini bakal undefined kalau indexnya diluar
// const vehicleType = (color, index, age) => {
//     if (age < 2) {
//         console.log(`a new ${ color } ${ vehicles[index]}`);
//     } else {
//         console.log(`a used ${ color } ${ vehicles[index]}`);
//     }
// }
// vehicleType("pink", 2, 1);
// vehicleType("red", 4, 10);

// school's answer -- dengan for loop klo masukin index yg diluar array, ga bakal undefined
// function vehicle(color, code, age) {
//     for (let i = 0; i < vehicle.length; i++) {
//         if (code === i) {
//             age > 0 ? console.log(`a ${color} used ${vehicles[i]}`) : console.log(`a ${color} new ${vehicles[i]}`);
//         } else {
//             console.log("invalid code");
//         }
//     }
// }
// vehicle("black", 10, 0);

//     //Task 10
// function newAd() {
//     let ad = "Amazing Joe's Garage, we service";
//     for (let index = 0; index < vehicles.length; index++) {
//         if (index == vehicles.length - 1) {
//             ad += ` and ${vehicles[index]}s`;
//         } else if (index == 0) {
//             ad += " " + vehicles[index] + "s";
//         } else {
//             ad += ", " + vehicles[index] + "s";
//         }
//     }
//     console.log(ad);
// }
// newAd();

//     //Task 11
//     vehicles.push("boat");
//     newAd();

//     //Task 12
//     fruits = {};

//     //Task 13
//     teachers = {
//         Seif: "",
//         Joseph: "",
//         Baraa: ""
//     };

//     // Task 14
//     teachers.Baraa = "management";
//     teachers.Joseph = "CSS";
//     teachers.Seif = "HTML and JavaScript 1";
//     console.log(teachers);

//     // Task 15
//     let x = [1, 2, 3];
//     let y = [1, 2, 3];
//     let z = y;
//     //What do you think will happen with x == y, x === y and z == y and z == x? I think all true
// array, object and function is a reference type, not a value type. Reference not related with the value, but it's about memory location
//     console.log(x == y); // false
//     console.log(x === y); // false
//     console.log(z == y); // true
//     console.log(z == x); // false

//     //Task 16
//     let o1 = { foo: "bar" };
//     let o2 = { foo: "bar" };
//     let o3 = o2;

//     console.log(o3 = o2);
//     console.log(o2 = o3);
//     // the order doesn't matter because o2 and o3 have the same value.

//     //if I change o1, it will not affect o3 because there is no direct mathematical comparative
//     o1 = { foo: "make a change" }
//     console.log("after changing o1, the value of o3 is ", o3)

//     // if I change the value of o2
//     o2 = { foo: "o2" }
//         // it will not effect to o3 because JS is executed from top to bottom.
//     console.log("after changing o2, the value of o3 is", o3)
//     console.log("the changed value of o2 is", o2)

//     // the order is still doesn't matter.
//     console.log(o3 = o2);
//     console.log(o2 = o3);


//     // Task 17
//     let bar = 42;
//     typeof typeof bar; //it will return string because typeof (typeof bar //integer) and integer is written in letters, which is a string
//     console.log(typeof typeof bar);