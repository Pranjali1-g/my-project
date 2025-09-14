# Experiment 9 – Person Class Hierarchy with Student and Teacher Subclasses

## Introduction
This experiment illustrates the principles of **object-oriented programming (OOP)** in JavaScript using ES6 classes. It builds a class hierarchy that showcases inheritance, method overriding, and polymorphism—fundamental patterns for creating structured and maintainable programs.

## Core OOP Concepts Showcased
### Inheritance
- **Base Class**: `Person` containing shared properties (name, age)
- **Derived Classes**: `Student` and `Teacher` extend from `Person`
- **Code Reusability**: Subclasses acquire properties and methods from the parent class

### Encapsulation
- **Properties**: Data encapsulated within objects
- **Methods**: Behaviors bundled inside class definitions

### Polymorphism
- **Overridden Methods**: Subclasses redefine `displayInfo()` and `getRole()`
- **Unified Interface**: Shared methods behave differently depending on the subclass

## Code Walkthrough
### Base Class Creation
- **Person class**: Parent class with `name`, `age` attributes
- **Core functions**: `displayInfo()` shows general details, `getRole()` returns "Person"

### Student Subclass
- **Inherits Person**: Gains all attributes and behaviors of `Person`
- **Extra properties**: `grade` and `course` (academic-specific)
- **Method overriding**: Custom `displayInfo()` to include academic info
- **Unique behavior**: `study()` representing student activities

### Teacher Subclass
- **Extends Person**: Inherits from the base class
- **Extra properties**: `subject` and `department` (teaching-specific)
- **Method overriding**: Modified `displayInfo()` with teaching details
- **Unique behavior**: `teach()` representing teacher activities

### Important Techniques
- **super()**: Invokes the parent constructor to initialize inherited attributes
- **super.method()**: Enhances rather than replaces parent methods
- **Overriding**: Subclasses redefine inherited functions for specialization
- **Polymorphism**: Objects of different types respond differently to identical method calls

### Demonstration
- Instances of Student and Teacher are created
- Inherited and overridden functions are displayed in action
- Polymorphism is illustrated through arrays holding multiple person types
- `instanceof` validates class inheritance relationships

## Execution Guide
### Running the Program
To run this class hierarchy example, use the following steps:
```bash
cd Experiment-9
node Person.js
```

## JavaScript Features Utilized
- **ES6 Classes**: Modern syntax with constructors and methods
- **extends**: Establishes inheritance relationships
- **super**: Grants access to parent constructors and methods
- **Overriding**: Subclasses supply tailored versions of parent methods
- **instanceof**: Checks type compatibility and inheritance

## Real-World Usage Scenarios
- Educational platforms
- HR systems
- Enterprise-level applications

## Key Learnings
### Technical Knowledge
- Implementing inheritance in JavaScript with ES6 classes
- Applying overriding and polymorphism effectively
- Using `super()` for invoking parent class constructors
- Designing well-structured class hierarchies

### Practical Insights
- Building scalable class-based architectures
- Writing maintainable code by leveraging inheritance
- Creating role-oriented systems
- Designing extensible applications

## Output Showcase
The implementation demonstrates:
- Inheritance validated via `instanceof`
- Customized outputs through method overriding
- Polymorphic behavior across object types
- Subclass-specific functionalities
- Proper constructor chaining using `super()`

## Learning Outcomes 
- Learned to implement inheritance, encapsulation, and polymorphism in JavaScript using ES6 classes.
- Understood method overriding and how different subclasses provide specialized behavior.
- Applied super() and instanceof for constructor chaining and inheritance validation.
- Gained practical skills in designing role-based class hierarchies for real-world applications.