//Camelization
function camelize(str) {
    "Takes a - input and returns a non dashed outpt"

    return str
    .split("-")
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
    
}
console.log(camelize("background-color-asoamfon"))

// Filtering
function filterRange(arr, a, b) {
    return arr.filter((number, index) => number >= a && number <= b);
}

function filterRangeInPlace(arr, a, b) {
    return arr.filter(number => number >= a && number <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRangeInPlace(arr, 1, 4);


//Copy and sorting

let arr2 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let arr2 = arr.slice();
    return arr2.sort();
}

let sorted = copySorted(arr2);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr2); // HTML, JavaScript, CSS (no changes)


//Shuffling an array

let arr3 = [1, 2, 3];

function shuffle(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random()* (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

// console.log(shuffle(arr3));
// console.log(shuffle(arr3));
// console.log(shuffle(arr3));


// Checking uniqueness

function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O,", "Pot", "Pot"
];

alert( unique(strings)); // Hare, Krishna, :-O