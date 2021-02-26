const items = [{
        "product": "Milk, 1L carton",
        "best_before": "2018-10-04",
        "price": 15.5
    },
    {
        "product": "Milk, 1L carton",
        "best_before": "2018-10-04",
        "price": 15.5
    },
    {
        "product": "Eggs 12pcs",
        "best_before": "2018-10-04",
        "price": 35.0
    },
    {
        "product": "Swedish meatballs",
        "best_before": "2018-10-25",
        "price": 22.0
    }
];

console.log(items);

// string format of items list
let stringItems = JSON.stringify(items);
console.log(stringItems);

// function to render the prices
let values = items.map(function(item) {
    return item.price;
});

// highest price in integer
let max = Math.max.apply(null, values);
console.log("Highest price: " + max);

// cheapest price in integer
let min = Math.min.apply(null, values);
console.log("Lowest price: " + min);

// Highest price , return string JSON
function maxPrice(items) {
    let mostExpensiveItems = [];
    let mostExpensiveItem;
    let values = items.map(function(item) {
        return item.price;
    });
    let max = Math.max.apply(null, values);
    for (let i = 0; i < items.length; i++) {
        if (items[i].price === max) {
            mostExpensiveItem = items[i];
            mostExpensiveItems.push(mostExpensiveItem);
        }
    }
    return JSON.stringify(mostExpensiveItems);
}
console.log("Most expensive item: " + maxPrice(items));


// Lowest price, return string JSON
function minPrice(items) {
    let cheapestItems = [];
    let cheapestItem;
    let values = items.map(function(item) {
        return item.price;
    });
    let min = Math.min.apply(null, values);
    for (let i = 0; i < items.length; i++) {
        if (items[i].price === min) {
            cheapestItem = items[i];
            cheapestItems.push(cheapestItem);
        }
    }
    return JSON.stringify(cheapestItems);
}
console.log("Cheapest item: " + minPrice(items));