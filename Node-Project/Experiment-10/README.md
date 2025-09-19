# Employee Management System (CLI)

A simple, interactive **Command-Line Employee Management System** built with Node.js and using in-memory arrays. This application allows you to add, list, and remove employees during a session—all from the terminal.

## Features

- **Add Employee:** Enter employee name and ID to add to the list.
- **List Employees:** Display all employees in a formatted list.
- **Remove Employee:** Delete an employee by entering their ID.
- **User Identification:** Prints your name and UID once at the top of the CLI.

### Usage

- On running the script, your name and UID are displayed at the top.
- You’ll see a menu with options:
    - **1. Add Employee:** Add a new employee.
    - **2. List Employees:** Display all current employees.
    - **3. Remove Employee:** Remove an employee by their ID.
    - **4. Exit:** Exit the application.

**Note:**  
All data is stored in memory using JavaScript arrays. When you exit, all records are cleared.

## Example Session
Your Name: Pranjali Gupta
UID: 23BAD10001

Employee Management System
1. Add Employee
2. List Employees
3. Remove Employee
4. Exit
Choose an option: 1
Enter employee name: Priyanshu Mishra
Enter employee ID: 10004
Employee added!

Employee Management System
1. Add Employee
2. List Employees
3. Remove Employee
4. Exit
Choose an option: 1
Enter employee name: Anmol Saini
Enter employee ID: 10015
Employee added!

Employee Management System
1. Add Employee
2. List Employees
3. Remove Employee
4. Exit
Choose an option: 2

List of employees:
1. Name: Priyanshu Mishra, ID: 10004
2. Name: Anmol Saini, ID: 10015

## Learning Outcomes

- **Understand Node.js Input/Output:** Learn how to use core Node.js modules such as `readline` to interact with user input in real-time.
- **Work With Arrays:** Practice array operations such as `push`, `forEach`, `findIndex`, and `splice` for dynamic data storage and manipulation.
- **Grasp Control Flow:** Master how to use functions, switches, and callbacks to control program logic and user interaction.
- **Create Interactive CLI Applications:** Gain practical skills in designing CLI menus, handling user choices, and maintaining application state within a session.
- **Debug Common Errors:** Encounter and resolve syntax and logical errors typical in beginner projects.
- **Apply Good Coding Practices:** See clear code structure, comments, and modular functions for maintainability.

---

