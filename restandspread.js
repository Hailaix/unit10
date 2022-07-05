// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

function findMin(...nums) {
    return Math.min(...nums);
};

function mergeObjects(obj, obj2) {
    return { ...obj, ...obj2 };
};

function doubleAndReturnArgs(arr, ...args) {
    return [...arr, ...args.map((val) => val * 2)];
};

/** remove a random element in the items array
and return a new array without that item. 

function removeRandom(items) {

}*/
const removeRandom = (items) => {
    const i = Math.floor(Math.random() * items.length);
    return [...items.slice(0, i), ...items.slice(i + 1)];
}
/** Return a new array with every item in array1 and array2.

function extend(array1, array2) {

}*/
const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair

function addKeyVal(obj, key, val) {

}*/
const addKeyVal = (obj, key, val) => {
    const newobj = { ...obj };
    newobj[key] = val;
    return newobj;
};
/** Return a new object with a key removed.

function removeKey(obj, key) {

}*/
const removeKey = (obj, key) => {
    const newobj = { ...obj };
    delete newobj[key];
    return newobj;
}

/** Combine two objects and return a new object.

function combine(obj1, obj2) {

}*/
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value.

function update(obj, key, val) {

}*/
const update = (obj, key, val) => {
    const newobj = { ...obj };
    newobj[key] = val;
    return newobj;
}