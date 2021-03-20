const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// const investorFrom1500 = inventors.filter(
//     function(inventor) {
//         if (inventor.year >= 1500 && inventor.year < 1600) {
//             return true
//         } else {
//             return false // remove else return false if you want to make thruthy function
//         }
//     });
// console.table(investorFrom1500);
// with arrow function:
const investorFrom1500 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(investorFrom1500);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// const yearOrder = inventors.sort(
//     function(firstPerson, anotherPerson) {
//         if (firstPerson.year > anotherPerson.year) {
//             return 1;
//         } else {
//             return -1;
//         }
//     })
// console.table(yearOrder);
// arrow function and ternerary operation
const yearOrder = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(yearOrder);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalAges = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalAges);

// 5. Sort the inventors by years lived
const oldestAge = inventors.sort(function(a, b) {
    const firstPerson = a.passed - a.year;
    const lastPerson = b.passed - b.year;
    // if (lastPerson > firstPerson) {
    //     return 1;
    // } else {
    //     return -1;
    // } -- we can do ternerary operation below:
    return lastPerson > firstPerson ? 1 : -1;
});
console.table(oldestAge);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// This code will be run directly from the browser console
// after navigating to the Wikipedia link above.

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a')); // karena a itu adalah byk list, jadi itu array. 
// kalau ga mau pakai Array.from, solusi lain; [...(category.querySelectorAll('a')]
// or instead of 2 lines above you can do: 
// const category = document.querySelectorAll('.mw-category a');

// if we take a list of links, need to map for each one. below will give the text instead of the link
// const de = links
//     .map(link => link.textContent)
//     .filter(streetName => streetName.includes('de'));

/*shorter way:
const blvd_with_de = Array.from(document.querySelectorAll('.mw-category a'))
  .map(({textContent}) => textContent)
  .filter((blvd) => blvd.includes('de'))
*/



const people = ['Berlin, Irving', 'Andersson, Eric', 'Knowles, Sandra', 'Smith, Yogi', 'Suryani, Halle',
    'Elmstedt, Wendell', 'Ivanov, Erin', 'Mylle, Aneurin', 'Gomez, Ken', 'Suzuki, Joseph', 'Biel, Ambrose',
    'Sam, Steve', 'Peterson, Josh', 'Salem, Frank', 'Downey, Augustine', 'Kim, Elk', 'Taylor, Robert',
    'Blair, Tony', 'Blake, William', 'Mayer, Glenn', 'Cruise, Carl', 'Diaz, Samuel', 'Beddoes, Mick',
    'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
    'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton',
];
// 7. sort Exercise
// Sort the people alphabetically by last name
// const alphabetically = people.sort(function(person, anotherPerson) {
//     const [personSurname, personFirstName] = person.split(", ");
//     const [anotherPersonSurname, anotherPersonFirstName] = anotherPerson.split(", ");
//     return personSurname > anotherPersonSurname ? 1 : -1;
// });
// console.log(alphabetically);

const alphabetically = people.sort((person, anotherPerson) => {
    const [personSurname, personFirstName] = person.split(", ");
    const [anotherPersonSurname, anotherPersonFirstName] = anotherPerson.split(", ");
    return personSurname > anotherPersonSurname ? 1 : -1;
});
console.log(alphabetically);


// 8. Reduce Exercise -- biasa klo reduce itu tambahin blank object
// Sum up the instances of each of these
const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
    'ufo'
];

const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {}); //blank object instead of hard code
console.log(transportation);