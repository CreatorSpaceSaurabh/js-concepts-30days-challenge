// Program - Create a array of students with name and random marks , and print the name of the top 2 students among all

let studentsArray = [
  { id: 1, name: "John Doe", marks: 60 },
  { id: 2, name: "James Peter", marks: 87 },
  { id: 3, name: "Peter Parker", marks: 85 },
  { id: 4, name: "John Cena", marks: 90 },
];

const findTopTwoStudents = (arr) => {
  try {
    if (arr.length) {
      let finalResult = "";
      let filterArr = arr.sort((a, b) => {
        return b.marks - a.marks;
      });
      let resultArr = filterArr.filter((item, i) => {
        if (i < 2) {
          finalResult += `, ${item.name}`;
        }
      });
      return finalResult.substring(1);
    }
  } catch (error) {
    throw new Error(error);
  }
};

const result = findTopTwoStudents(studentsArray);
console.log("Topper two students ==", result);
