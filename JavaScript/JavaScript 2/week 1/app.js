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
    document.body.appendChild(addUl);

    for (var i = 0; i < bookTitles.length; i++) {
        let addLi = document.createElement("li");
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