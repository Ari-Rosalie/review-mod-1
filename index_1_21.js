// ---------------- Instructions -------------------
// 1. Copy the content of this file to a local file in your local review git repo
// 2. Solve each function
// 3. Call the function and console log the result with 2 different inputs
// 4. add/commit and push after each function



// Given ab array of numbers and a given target. return the target if it's in the array or undefined if it's not
function findTarget(array,target) {
    return numbers.includes(target) ? target : undefined;
}


// Given an array of numbers, return the first number that's bigger than 14 or undefined if no number is bigger than 14
function firstNumBiggerThan14(array) {
    return array.find(number => number > 14);
}


// Given an array of strings, return the first string with length greater than 4 or undefined if no such string is found
function stringLengthgreaterthan4(array) {
    return array.find(str => str.length > 4);
}


// Given an array of Objects and a target id return the first object that matches the id or undefined if no such object is found
// Expected Structure of a SINGLE object - 
/*
{
 id: "Y42C_a",
 name: "Robert",
 occupation: "Chef",
 eyeColor: "green"
}
*/
const persons = [
    { id: "Y42C_a", name: "Robert", occupation: "Chef", eyeColor: "green" },
    { id: "X31B_b", name: "Alice", occupation: "Engineer", eyeColor: "blue" },
    { id: "Z29D_c", name: "David", occupation: "Teacher", eyeColor: "brown" },
    { id: "W18E_d", name: "Sarah", occupation: "Artist", eyeColor: "gray" },
    { id: "V27F_e", name: "Michael", occupation: "Doctor", eyeColor: "hazel" },
    { id: "U36G_f", name: "Emily", occupation: "Scientist", eyeColor: "amber" },
    { id: "T45H_g", name: "James", occupation: "Musician", eyeColor: "blue" },
    { id: "S54I_h", name: "Olivia", occupation: "Writer", eyeColor: "green" },
    { id: "R63J_i", name: "Daniel", occupation: "Athlete", eyeColor: "brown" },
    { id: "Q72K_j", name: "Sophia", occupation: "Designer", eyeColor: "gray" }
  ];

//   function findObjectById(array, targetId) {
//     return array.find(obj => obj.id === targetId);
//   }

function findObjectByID(array, targetID) {
    for(let obj of array ){
        if(obj.id === targetID) {
            return obj
        }
    }
}


// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
/*
{name: "Robert"}
*/

function findTargetName(array, targetID) {
    for(let obj of array ){
        if(obj.id === targetID) {
            return {"name": obj.name}
        }
    }
}

console.log(findTargetName(persons,"S54I_h"))
