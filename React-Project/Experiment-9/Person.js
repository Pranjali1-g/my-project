
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
    getRole() {
        return "Person";
    }
}

class Student extends Person {
    constructor(name, age, grade, course) {
        super(name, age);
        this.grade = grade;
        this.course = course;
    }
    displayInfo() {
        return `${super.displayInfo()}, Grade: ${this.grade}, Course: ${this.course}`;
    }
    getRole() {
        return "Student";
    }
    study() {
        return `${this.name} is studying ${this.course}`;
    }
}

class Teacher extends Person {
    constructor(name, age, subject, department) {
        super(name, age);
        this.subject = subject;
        this.department = department;
    }
    displayInfo() {
        return `${super.displayInfo()}, Subject: ${this.subject}, Department: ${this.department}`;
    }
    getRole() {
        return "Teacher";
    }
    teach() {
        return `${this.name} is teaching ${this.subject}`;
    }
}

const student1 = new Student("Alice Johnson", 16, "11th Grade", "Mathematics");
const teacher1 = new Teacher("Dr. Smith", 45, "Physics", "Science Department");
const teacher2 = new Teacher("Ms. Davis", 32, "English Literature", "Humanities Department");

console.log("=== Person Class Hierarchy Demonstration ===\n");

console.log("1. Student Information:");
console.log(student1.displayInfo());
console.log(`Role: ${student1.getRole()}`);
console.log(student1.study());
console.log();

console.log("2. Teacher Information:");
console.log(teacher1.displayInfo());
console.log(`Role: ${teacher1.getRole()}`);
console.log(teacher1.teach());
console.log();

console.log("3. Another Teacher:");
console.log(teacher2.displayInfo());
console.log(`Role: ${teacher2.getRole()}`);
console.log(teacher2.teach());
console.log();

console.log("4. Polymorphism Example:");
const people = [student1, teacher1, teacher2];
people.forEach((person, index) => {
    console.log(`Person ${index + 1}: ${person.displayInfo()}`);
    console.log(`   Role: ${person.getRole()}`);
});

console.log("\n5. Instanceof Checks:");
console.log(`student1 instanceof Student: ${student1 instanceof Student}`);
console.log(`student1 instanceof Person: ${student1 instanceof Person}`);
console.log(`teacher1 instanceof Teacher: ${teacher1 instanceof Teacher}`);
console.log(`teacher1 instanceof Person: ${teacher1 instanceof Person}`);
