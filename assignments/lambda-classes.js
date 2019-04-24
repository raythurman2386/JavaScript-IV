// CODE here for your Lambda Classes
// Person is the base constructor
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

// Instructor extends from Person
class Instructor extends Person {
  constructor(instructorAttr) {
    super(instructorAttr);
    this.specialty = instructorAttr.specialty;
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
  gradedAssignment(student) {
    if (student.grade <= 50) {
      let newGrade = Math.floor(Math.random() * 100);
      student.grade = newGrade + student.grade;
      return `${student.name}'s grade has changed to ${student.grade}!`;
    } else {
      let newGrade = Math.floor(Math.random() * 100);
      if (newGrade > student.grade) {
        student.grade = newGrade - student.grade;
      } else {
        student.grade = student.grade - newGrade;
      }
      return `${student.name}'s grade has changed to ${student.grade}!`;
    }
  }
}

// Student extends from person
class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
    this.grade = studentAttr.grade;
  }
  listsSubjects() {
    this.favSubjects.forEach(element => {
      console.log(element);
    });
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun a sprint challenge on ${subject}.`;
  }
  graduate() {
    if (this.grade >= 70) {
      return `Congratulations ${
        this.name
      } you have graduated from Lambda School!!!`;
    } else {
      return `${this.name} keep trying you're almost there!!`;
    }
  }
}

// PM extends from Instructor
class ProjectManager extends Instructor {
  constructor(pmAttr) {
    super(pmAttr);
    this.gradClassName = pmAttr.gradClassName;
    this.favInstructor = pmAttr.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel stand up times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

// Objects for each of the constructors

// Instructors

const keiran = new Instructor({
  name: "Keiran",
  location: "Utah",
  age: 25,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-End",
  catchPhrase: "I don't know whats up with my dog.",
});

const dan = new Instructor({
  name: "Dan",
  location: "Utah",
  age: 32,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "React",
  catchPhrase: "Hello, Hello",
});

// Students

const ray = new Student({
  name: "Ray",
  location: "Indiana",
  age: 30,
  gender: "male",
  previousBackground: "US Army",
  className: "WEBPT6",
  favSubjects: ["Html", "CSS", "JavaScript"],
  grade: 68,
});

const don = new Student({
  name: "Donald",
  location: "Indiana",
  age: 34,
  gender: "male",
  previousBackground: "unknown",
  className: "WEBPT6",
  favSubjects: ["Html", "CSS", "JavaScript"],
  grade: 71,
});

// Project Manager

const ronald = new ProjectManager({
  name: "Ronald",
  location: "California",
  age: 32,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Back-End",
  catchPhrase: "It's Stand Up time",
  gradClassName: "WEB16",
  favInstructor: "Dan",
});

// Console.logs to test objects
console.log(keiran); // Instructor
console.log(dan); // Instructor
console.log(ray); // Student
console.log(don); // Student
console.log(ronald); // Project Manager

// Console.logs to test methods on Instructors
console.log(keiran.name);
console.log(keiran.demo("React"));
console.log(dan.grade(ray, "React"));
console.log(dan.specialty);

// Console.logs to test methods on Students
ray.listsSubjects();
console.log(ray.PRAssignment("react"));
console.log(ray.previousBackground);
console.log(don.sprintChallenge("JavaScript"));
console.log(don.className);

// Console.logs to test methods on the PM
console.log(ronald.standUp("WEBPT6"));
console.log(ronald.debugsCode(ray, "JSIV Project"));
console.log(ronald.specialty);

// Stretch Graduate Method
console.log(ray.graduate());
console.log(don.graduate());

console.log(ronald.gradedAssignment(ray));

console.log(ray.graduate());
console.log(don.graduate());
