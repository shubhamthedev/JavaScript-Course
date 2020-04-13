//Destructuring Assignment
let a, b;
[a, b] = [100, 200];
//Rest Pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500, 600];
//console.log(rest);//gives [400,500,600]
({ a, b } = { a: 100, b: 200, c: 300, d: 500 });
({ a, b, c, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

//Array destructuring
// const people = ['John', 'Beth', 'Mike'];
// const [person1, person2, person3] = people;
// console.log(person1);

//Parse array return from function
// function getPeople() {
//     return ['John', 'Beth', 'Mike'];
// }
// let person1, person2, person3;
// [person1, person2, person3] = getPeople();
// console.log(person1, person2, person3);

//Object Destructuring
const person = {
    name: 'John',
    age: 32,
    city: 'Miami',
    gender: 'Male'
}
//OLD ES5 Way
// const name = person.name,
//     age = person.age,
//     city = person.city,
//     gender = person.gender;

//NEW ES6 WAY
const { name, age, city } = person;
console.log(name, age, city);

