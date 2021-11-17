/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests 
if the value is less than or greater than the value 10. Log the result to the console.
*/


const testNum = number =>{
  return new Promise((resolve, reject) => {
      if (number >= 10) {
      resolve("Het nummer is 10 of groter");
    } else {
      reject("Het nummer is kleiner dan 10");
    }
  });
};

  testNum(11);


/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), 
will take in an array of words and capitalize them, and then the second function, sortWords(), 
will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = words => {
  return new Promise((resolve, reject) => {
    if (
      words.every(word => {
        return typeof word === 'string';
      })
    ) {
      resolve(
        sortWords(
          words.map(word => {
            return word.toUpperCase();
          })
        )
      );
    } else {
      reject('Not a string!');
    }
  });
};

const sortWords = words => {
  return new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort());
    } else {
      reject('strings only!');
    }
  });
};


makeAllCaps(arrayOfWords)
  .then(sortWords(theseAreWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));



makeAllCaps(complicatedArray)
  .then(sortWords(theseAreNotWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));

// call both functions, chain them together and log the result to the console

