"use strict";

// JAVASCRIPT LAB 3 - STUDENT SUBMISSIONS
// Task: Create an array of objects representing student submissions. Define a variety of
// functions for working with such an array. Also call each of the functions at least once to test it.
// Build Specifications:
// 1. Declare a variable named submissions that is initialized to an array with the following
// objects:

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-04-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// 2. Declare a function named addSubmission
// ○ Parameter(s): array, newName, newScore, newDate
// ○ Functionality: construct an object and push it into the array. The object must
// have the same properties as the objects already in the array. Use conditional
// statements to set the value for the passed property to true if the score is
// greater than or equal to 60 and false otherwise.

const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
// addSubmission(submissions, "Fox", 77, "2021-01-01");
// console.log(submissions);

// 3. Declare a function named deleteSubmissionByIndex
// ○ Parameter(s): array, index
// ○ Functionality: remove the object from the array at the specified index using
// the splice method.

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 1);
// console.log(submissions);

// 4. Declare a function named deleteSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: remove the object from the array that has the provided name.
// Incorporate the findIndex method and the splice method.

const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((submission) => {
    return submission.name === name;
  });
  if (index !== -1) {
    deleteSubmissionByIndex(array, index);
  } else {
    console.log("No Match.");
  }
};

// deleteSubmissionByName(submissions, "Fox");
// console.log(submissions);

// 5. Declare a function named editSubmission
// ○ Parameter(s): array, index, score
// ○ Functionality: update an object’s score in the array at the specified index. Use
// conditional statements to set the value for the passed property to true if the
// score is greater than or equal to 60 and false otherwise.

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
// editSubmission(submissions, 0, 20);
// console.log(submissions);

// 6. Declare a function named findSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: return the object in the array that has the provided name. Use the
// find method.

const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};

// console.log(findSubmissionByName(submissions, "Jill"));

// 7. Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array.

const findLowestScore = (array) => {
  //   let score = 100;
  let lowestScore = array[0].score;
  array.forEach((submission) => {
    if (submission.score < lowestScore) {
      lowestScore = submission.score;
    }
  });
  return lowestScore;
};

// console.log(findLowestScore(submissions));

// 8. Declare a function named findAverageScore
// ○ Parameter(s): array
// ○ Functionality: return the average quiz score. Use a for...of loop.

// const findAverageScore = (array) => {
//   for (let score of array) {
//     array.forEach((item) => {
//      return array.reduce((accumlator, currentValue) => {
//          return accum
//     });
//     return score;
//   }
// };
// console.log(findAverageScore(submissions));

// 9. Declare a function named filterPassing
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have passing scores.

const filterPassing = (array) => {
  return array.filter((submission) => {
    return submission.passed;
  });
};

// console.log(filterPassing(submissions));

// 10. Declare a function named filter90AndAbove
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have scores greater than or equal to 90.

const filter90AndAbove = (array) => {
  return array.filter((submission) => {
    return submission.score >= 90;
  });
};
console.log(filter90AndAbove(submissions));
