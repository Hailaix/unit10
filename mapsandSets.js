// Quick Question #1
// What does the following code return?

// new Set([1,1,2,2,3,4])
//returns the set containing [1,2,3,4]

// Quick Question #2
// What does the following code return?

// [...new Set("referee")].join("")
//returns the string "ref"

// Quick Questions #3
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
//the map m has two key pairs, [[1,2,3],true],[[1,2,3],false] because they are different arrays

const hasDuplicate = (arr) => arr.length === new Set(arr).length;

const vowelCount = (str) => {
    const vowels = 'aeiou';
    const vowelMap = new Map();
    for (let char of str) {
        const lowerchar = char.toLowerCase();
        if (vowels.includes(lowerchar)) {
            if (vowelMap.has(lowerchar)) {
                vowelMap.set(lowerchar, vowelMap.get(lowerchar) + 1);
            } else {
                vowelMap.set(lowerchar, 1);
            }
        }
    }
    return vowelMap;
};