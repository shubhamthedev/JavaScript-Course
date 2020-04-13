//Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('foo');
console.log(typeof sym2);

//Unique object key
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');
const myObj = {};
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj[KEY1]);

//Symbols are not enumerable in for...in loops
for (let i in myObj) {
    console.log(`${i}: ${myObj[i]}`);
}
//symbols are ignored by json.stringify
console.log(JSON.stringify({ key: 'Prop' }));
console.log(JSON.stringify({ [Symbol('sym3')]: 'Prop' }));

