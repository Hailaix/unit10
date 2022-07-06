//What does the following code return/print?

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // prints 8
// console.log(yearNeptuneDiscovered); // prints 1846

// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
  
//   console.log(discoveryYears); // prints the object {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
  
//   getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // returns "Your name is Alejandro and you like purple"
//   getUserData({firstName: "Melissa"}) // returns "Your name is Melissa and you like green"
//   getUserData({}) // returns "Your name is undefined and you like green"

// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // prints "Maya"
// console.log(second); // prints "Marisa"
// console.log(third); // prints "Chi"

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
//   console.log(raindrops); // prints "Raindrops on roses"
//   console.log(whiskers); // prints "whiskers on kittens"
//   console.log(aFewOfMyFavoriteThings); // prints the array ["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // prints the array [10,30,20]

// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;
const obj = {
    numbers: {
        a: 1,
        b:2
    }
};
const {numbers:{a,b}} = obj;

// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;
const arr = [1, 2];
[arr[0],arr[1]] = [arr[1],arr[0]];

const raceResults =([first,second,third,...rest]) => {
    return {
        first,
        second,
        third,
        rest
    }
};