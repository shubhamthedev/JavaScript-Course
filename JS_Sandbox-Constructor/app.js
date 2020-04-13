// //Person constructor
// function Person(name, dob) {
//     this.name = name;
//     // this.age = age;
//     this.birthday = new Date(dob);
//     this.calculateAge = function () {
//         const dif = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(dif);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }
// // const shubham = new Person('Shubham', 22);
// // const jade = new Person('Jade', 30);
// const shubham = new Person('Shubham', '01-03-1998');
// console.log(shubham.calculateAge());

//Built in Constructor

// //String
// const nam1 = 'shubham';
// const nam2 = new String('shubham');
// nam2.foo = 'bar';
// console.log(nam2);
// if (nam2 === 'shubham') {
//     console.log('YES');
// } else {
//     console.log('No');
// }

// //Number
// const num1 = 30;
// const num2 = new Number('45');
// console.log(num2);
// //Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);
// console.log(bool2);
// //Function 
// function getSum(x, y) {
//     return x + y;
// }
// console.log(getSum(2, 1));

// const getSum2 = new Function('x', 'y', 'return x+y');
// console.log(getSum2(2, 2));
// //Object
// const john = { name: 'John' };
// const john2 = new Object({ name: 'john2' });
// console.log(john2);
// //Arrays
// const arr1 = [1, 2, 3, 4];
// const arr2 = new Array(1, 2, 3, 4);

// //Regular expression
// const rel1 = /\w+/;
// const rel2 = new RegExp('\\w');
// console.log(rel2)

//Object prototype
//Person prototype

//Person constructor
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     // this.age = age;
//     this.birthday = new Date(dob);
//     // this.calculateAge = function () {
//     //     const dif = Date.now() - this.birthday.getTime();
//     //     const ageDate = new Date(dif);
//     //     return Math.abs(ageDate.getUTCFullYear() - 1970);
//     // }
// }
// Person.prototype.calculateAge = function () {
//     const dif = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(dif);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }
// //Get full name
// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }
// //Gets Married
// Person.prototype.getsMarried = function (newLastName) {
//     this.lastName = newLastName;
// }
// const john = new Person('John', 'Doe', '8-10-1999');
// const mary = new Person('Mary', 'Smith', '9-12-2001');
// console.log(mary.calculateAge());
// console.log(mary.getFullName());
// mary.getsMarried('Cole');
// console.log(mary.getFullName());
// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.greeting = function () {
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }
// const person1 = new Person('John', 'Doe');
// //console.log(person1.greeting());
// //Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//     Person.call(this, firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
// }
// //Inherit the person prototype methods
// Customer.prototype = Object.create(Person.prototype);
// //Make customer.prototype return Customer
// Customer.prototype.constructor = Customer;

// const customer1 = new Customer('eminem', 'stan', '9811594314', 'standard');
// console.log(customer1);
// //overwrite person prototypes
// Customer.prototype.greeting = function () {
//     return `Hello there ${this.firstName} ${this.lastName} welecome to our company.`;

// }
// console.log(customer1.greeting());
// const personPrototypes = {
//     greeting: function () {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried: function (newLastName) {
//         this.lastName = newLastName;
//     }
// }
// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;
// console.log(mary);
// console.log(mary.greeting());

// //ALTERNATE SYNTAX
// const shubham = Object.create(personPrototypes, {
//     firstName: { value: 'Shubham' },
//     lastName: { value: 'Sharma' },
//     age: { value: 22 }
// });
// console.log(shubham);
// console.log(shubham.greeting());
//Create classes
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     greeting() {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     }
//     calculateAge() {
//         const diff = Date.now() - this.dob.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
//     static addNumbers(x, y) {
//         return x + y;
//     }
// }
// const mary = new Person('Mary', 'Williams', '9-10-2009');
// console.log(Person.addNumbers(1, 2));
// console.log(mary.calculateAge());
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipType() {
        return 500;
    }
}
const john = new Customer('john', 'sharma', '9811594314', 'standard');
console.log(john);
console.log(Customer.getMembershipType());