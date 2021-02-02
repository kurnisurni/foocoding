// Task 1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let newString = myString.replace(/,/g, " ");
console.log(newString);

// Task 2
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");
console.log(favoriteAnimals);
console.log('The array has a length of:', favoriteAnimals.length);

delete favoriteAnimals[3];
console.log(favoriteAnimals);

console.log('The item you are looking for is at index:', favoriteAnimals.indexOf("meerkat"));

//MORE JAVASCRIPT
//Task 1
function totalSum(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(totalSum(2, 5, 3));

//Task 2
function colorCar(color) {
    return `a ${ color } car`;
}
console.log(colorCar("red"));

// Task 3
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

for (var i in person) {
    console.log(i + " has value: " + person[i]);
}

//Task 4
const vehicleType = (color, code) => {
    if (code == 1) {
        console.log(`a ${ color } car`);
    } else if (code == 2) {
        console.log(`a ${ color } motorbike`);
    }
}

vehicleType("red", 1);
vehicleType("pink", 2);

// Task 5
console.log(3 === 3);

// Task 6
const vehicleType = (color, code, age) => {
    if (age > 0) {
        if (code == 1) {
            console.log(`a used ${ color } car`);
        } else if (code == 2) {
            console.log(`a used ${ color } motorbike`);
        }
    } else {
        if (code == 1) {
            console.log(`a new ${ color } car`);
        } else if (code == 2) {
            console.log(`a new ${ color } motorbike`);
        }
    }
}
vehicleType("red", 1, 0);

// Task 7
vehicles = ["motorbike", "caravan", "bike", "plane", "helicopter"];
console.log(vehicles);

//Task 8
console.log(vehicles[2]);

//Task 9
const vehicleType = (color, index, age) => {
    if (age < 2) {
        console.log(`a new ${ color } ${ vehicles[index]}`);
    } else {
        console.log(`a used ${ color } ${ vehicles[index]}`);
    }
}
vehicleType("pink", 2, 1);
vehicleType("red", 4, 10);

//Task 10
function newAd() {
    let ad = "";
    for (let index = 0; index < vehicles.length; index++) {
        if (index == vehicles.length - 1) {
            ad = ad + " and " + vehicles[index] + "s";
        } else if (index == vehicles[0]) {
            ad = ad + " " + vehicles[index] + "s";
        } else {
            ad = ad + ", " + vehicles[index] + "s";
        }
    }
    ad = `Amazing Joe's Garage, we service cars, ${ ad }`;
    console.log(ad);
}
newAd();

//Task 11
vehicles.push("boat");
newAd();

//Task 12
fruits = {};

//Task 13
teachers = {
    Seif: "",
    Joseph: "",
    Baraa: ""
};

// Task 14
teachers.Baraa = "management";
teachers.Joseph = "CSS";
teachers.Seif = "HTML and JavaScript 1";
console.log(teachers);

// Task 15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
//What do you think will happen with x == y, x === y and z == y and z == x? I think all true
console.log(x == y); // false
console.log(x === y); // false
console.log(z == y); // true
console.log(z == x); // false

//Task 16
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

console.log(o3 = o2);
console.log(o2 = o3);
// the order doesn't matter because o2 and o3 have the same value.

//if I change o1, it will not affect o3 because there is no direct mathematical comparative
o1 = { foo: "make a change" }
console.log("after changing o1, the value of o3 is ", o3)

// if I change the value of o2
o2 = { foo: "o2" }
    // it will not effect to o3 because JS is executed from top to bottom.
console.log("after changing o2, the value of o3 is", o3)
console.log("the changed value of o2 is", o2)

// the order is still doesn't matter.
console.log(o3 = o2);
console.log(o2 = o3);


// Task 17
let bar = 42;
typeof typeof bar; //it will return string because typeof (typeof bar //integer) and integer is written in letters, which is a string
console.log(typeof typeof bar);