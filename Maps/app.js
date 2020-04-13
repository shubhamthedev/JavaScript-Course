const map1 = new Map();
//set keys
const key1 = 'Some String',
    key2 = {},
    key3 = function () { };
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

//get values by key
// console.log(map1.get(key1));
//map size
// console.log(map1.size);// 3 since it has 3 keys

//Iterating key

//Loop using  for...of loop to get keys and values
// for (let [key, value] of map1) {
//     console.log(`${key}: ${value}`);
// }
//iterate keys only
// for (let key of map1.keys()) {
//     console.log(key);
// }
//iterate value only
// for (let value of map1.value()) {
//     console.log(value);
// }
//for each loop
map1.forEach(function (key, value) {
    console.log(`${key}:${value}`);
});
//array of key value pairs
// const keyArr = Array.from(map1);
// console.log(keyArr);
//array of value 
const valArr = Array.from(map1.values());
console.log(valArr);
//array of key
const keyArr = Array.from(map1.keys());
console.log(keyArr);

