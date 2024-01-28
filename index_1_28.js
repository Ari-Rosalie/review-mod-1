// Acc Pattern

// Iterative Native Array Methods

// For each of the following exercises, 
// 1. write them using a for loop first
// 2. comment out the accumulator pattern solution and write it using a native array method
// 3. call the function and console.log the result

// 1. Write a function that takes in an array of strings and returns a new array where each string is replaced by it's length
// ["hello", "world"] => [5, 5] 
function printLength(arr) {
    let length = []
    for (let i = 0; i < arr.length; i++) {
        length.push(arr[i].length)
    }
    return length
}
 //Raz
function getLength(arr) {
    for(let str of arr) {
        length.push(str.length)
    }
    return length
}

//Dante
function getStringLength() {
    const stringLength = arr.map((el) => el.length);
    return stringLengths

}

// 2. Write a function that takes an array of strings and returns an array of strings longer than 5 characters (spaces count)

// function getLengthLongerthan5(arr) {
//     const five = []
//     for (let str of arr) {
//         if (str.length > 5) {
//             five.push(str);
//           }
//         }
//         return five;
//     }

    function getLengthLongerthan5(arr) {
        return arr.filter(str => str.length > 5)
    }

    console.log(getLengthLongerthan5(["hello","United States", "Rodgriguez", "collado", "cat","house","ari", "dante"]))


// 3. Write a function that takes an array of strings, and returns a new array of the lengths of strings longer than 5 characters

// function getLength(arr){
//     const longerThan5 = []
//     for(const str of arr) {
//         if(str.length > 5) {
//             longerThan5.push(str.length)
//         }
//     }
//     return longerThan5
// }

function getLength(arr) {
    const result = arr.reduce((longerThan5,str) => {
        if( str.length > 5) {
            longerThan5.push(str.length)
        }
        return longerThan5;
    }, [])
    return result
}
console.log(getLength(["hello","United States", "Rodgriguez", "collado", "cat","house","ari", "dante"]))




// 4. Write a function that takes an array of numbers and returns the sum of all even numebrs

// function getSum(arr) {
//     let sum = 0
//     for (let num of arr) {
//         if (num % 2 === 0) {
//             sum += num
//         }
//     }

//     return sum
// }

function getSum(arr) {
    return arr.reduce((sum, num) => {
        if (num % 2 === 0) {
            return sum + num;
        }
        return sum;
    }, 0);
}

console.log(getSum([1,2,3,4,5,6,7,8,9]))
// 5. Write a function that takes an array of numbers and returns the min num




// 6. Write a function that takes in a string and returns the character that appears the most times (only letters count)