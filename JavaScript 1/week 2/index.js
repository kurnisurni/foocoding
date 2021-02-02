//Task 1
console.log("Halo dunia!");
console.log("Hello world!");
console.log("Привет земля");
console.log("Hej värld");
console.log("Hola mundo");


//Task 2
console.log("I'm awesome");

// Task 3
let x
console.log(x);

x = 30;
console.log("My age is", x);

//Task 4
let y = "Foo";
console.log(y);
y = "coding";
console.log(y);

//Task 5
let z = 7.25;
console.log(z);
let a = Math.floor(z);
console.log(a);
console.log(Math.max(a, z));

//Task 6
animals = [];
console.log(animals);

favoriteAnimals = ["cat", "dog", "rabbit", "koala"];
console.log(favoriteAnimals);
favoriteAnimals.push('baby pig')
console.log("Daan's favorite animal", favoriteAnimals[4]);

//Task 7
let myString = "this is a test";
console.log(myString);
console.log(myString.length);

//Task 8
let num = 100;
let word = "foo";
let bool = true;
let func = new Function();
let char = "a";

console.log(typeof num);
console.log(typeof word);
console.log(typeof bool);
console.log(typeof func);

if (typeof num === typeof word) {
    console.log("SAME TYPE");
} else {
    console.log("Different type");
}

//Task 9
let x = 7;
x = x % 3;
console.log(x);
x = x + 5;
console.log(x % 2);
x = 10;
x = x % 4;
console.log(x);

//Task 10
arrays = ["apple", true, 45];
console.log(arrays);

let a = 6 / 0;
let b = 10 / 0;
console.log(a);

if (a == b) {
    console.log("we can compare infinities");
} else {
    console.log("sorry, mate! we can't compare infinities");
}