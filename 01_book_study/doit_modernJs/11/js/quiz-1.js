class Lecture {
  constructor(hasTutor, lecID, members) {
    this.hasTutor = hasTutor;
    this.lecID = lecID;
    this.members = members;
  }
}

function getStudents(lec) {
  let {hasTutor, lecID, members} = lec;
  let tutor, students;
  hasTutor ? [tutor, ...students] = members : [...students] = members;
  return students;
}

let lec1 = new Lecture(false, "L001", ["Ahn", "Han", "Park"]);
let lec2 = new Lecture(true, 'L002', ["Lee", "Choi", "Kim"]);

console.log(`강의 : ${lec1.lecID}, 수강생 : ${getStudents(lec1)}`);
console.log(`강의 : ${lec2.lecID}, 수강생 : ${getStudents(lec2)}`);