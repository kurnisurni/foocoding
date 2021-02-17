'use strict';

const bookTitles = [
    // Replace with your own book titles
    'don_quixote',
    'the_little_prince',
    'the_hobbit',
    'romeo_and_juliet',
    'the_master_and_margarita',
    'the_rainbow_troops',
    'homo_deus',
    'anna_karenina',
    'invisible_man',
    'eat_pray_love'
];

// Add ul and li
function generateBook() {
    let addUl = document.createElement("ul");
    addUl.className = "book-array"
    document.body.appendChild(addUl);

    for (var i = 0; i < bookTitles.length; i++) {
        let addLi = document.createElement("li");
        addLi.className = "book-array-list"
        addLi.innerHTML = bookTitles[i];
        addUl.appendChild(addLi);
    }
}
generateBook();

// Object in each book
let bookInfo = {
    don_quixote: {
        title: "Don Quixote",
        language: "Spanish",
        author: "Miguel de Cervantes"
    },
    the_little_prince: {
        title: "The Little Prince",
        language: "French",
        author: "Antoine de Saint-Exupéry"
    },
    the_hobbit: {
        title: "The Hobbit",
        language: "English",
        author: "J. R. R. Tolkien"
    },
    romeo_and_juliet: {
        title: "Romeo And Juliet",
        language: "English",
        author: "William Shakespeare"
    },
    the_master_and_margarita: {
        title: "The Master And Margarita",
        language: "Russian",
        author: "Mikhail Bulgakov"
    },
    the_rainbow_troops: {
        title: "The Rainbow Troops",
        language: "Indonesian",
        author: "Andrea Hirata"
    },
    homo_deus: {
        title: "Homo Deus",
        language: "Hebrew",
        author: "Yuval Noah Harari"
    },
    anna_karenina: {
        title: "Anna Karenina",
        language: "Russian",
        author: "Leo Tolstoy "
    },
    invisible_man: {
        title: "Invisible Man",
        language: "English",
        author: "H. G. Wells"
    },
    eat_pray_love: {
        title: "Eat Pray Love",
        language: "English",
        author: "Elizabeth Gilbert"
    }
}

// reuse function and display objects
function generateBookObject(bookObject) {
    let bookId = document.createElement('div');
    document.body.appendChild(bookId);

    let bookTitle = document.createElement('h1');
    bookTitle.innerHTML = `Book title: ${bookObject.title}`;
    bookId.appendChild(bookTitle);

    let bookLanguage = document.createElement('p');
    bookLanguage.appendChild(document.createTextNode(`Language: ${bookObject.language}`));
    bookId.appendChild(bookLanguage);

    let bookAuthor = document.createElement('p');
    bookAuthor.appendChild(document.createTextNode(`Author: ${bookObject.author}`));
    bookId.appendChild(bookAuthor);

    return bookId;
}

for (let bookKey of Object.keys(bookInfo)) {
    document.body.appendChild(generateBookObject(bookInfo[bookKey]));
}

// New object with image cover value
let bookCover = {
    don_quixote: {
        image: "./img/don.jpg"
    },
    the_little_prince: {
        image: "./img/prince.jpg"
    },
    the_hobbit: {
        image: "./img/hobbit.jpg"
    },
    romeo_and_juliet: {
        image: "./img/romeo.jpg"
    },
    the_master_and_margarita: {
        image: "./img/master.jpg"
    },
    the_rainbow_troops: {
        image: "./img/rainbow.jpg"
    },
    homo_deus: {
        image: "./img/homo.jpg"
    },
    anna_karenina: {
        image: "./img/anna.jpg"
    },
    invisible_man: {
        image: "./img/invisible.jpg"
    },
    eat_pray_love: {
        image: "./img/eat.jpg"
    }
}

// reuse function and display objects

function generateBookCover(coverImages, bookCollection) {
    let newDiv = document.createElement('div');
    newDiv.className = "cover-book__info";

    for (let key of Object.keys(coverImages)) {
        let newUl = document.createElement('ul');
        newUl.className = "cover-book__info-list"
        newDiv.appendChild(newUl);
        let source = coverImages[key].image;
        let img = document.createElement('img');
        img.setAttribute('src', source);
        newUl.appendChild(img);

        for (let bookKey of Object.keys(bookCollection[key])) {
            let newLi = document.createElement('li');
            newLi.className = "book-info"
            newUl.appendChild(newLi);
            newLi.innerText = bookCollection[key][bookKey];
        }
    }
    return newDiv;
}
document.body.appendChild(generateBookCover(bookCover, bookInfo));