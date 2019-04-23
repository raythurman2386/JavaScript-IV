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
}

// Student extends from person
class Student extends Person {
  constructor(studentAttr) {
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach(element => {
      return element;
    });
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun a sprint challenge on ${subject}.`;
  }
}

// PM extends from Instructor
class ProjectManager extends Instructor {
  constructor(pmAttr) {
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

const ray = new Student({
  name: "Ray",
  location: "Indiana",
  age: 30,
  gender: "male",
  previousBackground: "US Army",
  className: "WEBPT6",
  favSubjects: ["Html", "CSS", "JavaScript"],
});

const don = new Student({
  name: "Donald",
  location: "Indiana",
  age: 34,
  gender: "male",
  previousBackground: "unknown",
  className: "WEBPT6",
  favSubjects: ["Html", "CSS", "JavaScript"],
});
