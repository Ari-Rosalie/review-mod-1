// 1.----------------------------------
// Write a function that takes in a string and returns a new string with every word capitalized. Write your own examples to call the function with.

    function capitalWords(string) {
        let words = string.split(' ');
        let capitalizedWords = [];
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            let capitalWord = word[0].toUpperCase() + word.slice(1);
            capitalizedWords.push(capitalWord);
        }
        return capitalizedWords.join(' ');
    }


console.log(capitalWords(capitalbuillding))

// 2.----------------------------------
// Write a function that takes in an object and returns a formatted greeting.
// This is the format of the object - 
function greeting(object) {
    return `Hello ${person.firstName} ${person.lastName}, have a great day at your job as a ${occupation}`
}

const john = {
    firstName: "John",
    lastName: "Klaus",
    occupation: "Carpenter"
  }
  
  const rebecca = {
    firstName: "Rebecca",
    lastName: "Cohen",
    occupation: "Teacher"
  }

  const David = {
    firstName: "David",
    lastName: "Smith",
    occupation: "Doctor"
  }
  
  console.log(formatGreeting(john) === "Hello John Klaus, have a great day at your job as a Carpenter")
  
  console.log(formatGreeting(rebecca) === "Hello Rebecca Cohen, have a great day at your job as a Teacher")

  console.log(greeting(David))
  
  // 3.----------------------------------
  // Write a function that takes an array of objects and a targetId and returns a formatted string. Each object in the array will have the same structure as the objects from the previous question plus an id. Use chatGPT to create an array of 10 such objects.
  
  const persons = [
    { id: "Tfjso_4M", firstName: "John", lastName: "Klaus", occupation: "Carpenter" },
    { id: "UeHg2_9A", firstName: "Rebecca", lastName: "Cohen", occupation: "Teacher" },
    { id: "LpQb5_2X", firstName: "David", lastName: "Smith", occupation: "Software Engineer" },
    { id: "KoWd8_6P", firstName: "Emma", lastName: "Johnson", occupation: "Doctor" },
    { id: "NrZm3_7B", firstName: "Michael", lastName: "Miller", occupation: "Graphic Designer" },
    { id: "GfHn1_3Y", firstName: "Sophia", lastName: "Davis", occupation: "Chef" },
    { id: "IaLr4_8Z", firstName: "Ethan", lastName: "Martinez", occupation: "Architect" },
    { id: "PxVf6_5Q", firstName: "Olivia", lastName: "Brown", occupation: "Marketing Specialist" },
    { id: "RgJh9_1U", firstName: "Daniel", lastName: "White", occupation: "Photographer" },
    { id: "BbYk7_0O", firstName: "Ava", lastName: "Jones", occupation: "Electrician" }
]
function findID(array,targetID){
    const person = array.find(personObj => personObj.id === targetID);
    return `${person.firstName} ${person.lastName},${person.id}`
}
console.log(findID(persons,"GfHn1_3Y" ))

  /* Example Object
  {
    id: "Tfjso_4M"
    firstName: "John",
    lastName: "Klaus",
    occupation: "Carpenter"
  }
