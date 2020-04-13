//SETS - Store unique values of any type
const set1 = new Set();

//Add values to set
set1.add(100);
set1.add('a string');
set1.add({ name: 'shubham' });
set1.add(true);
set1.add(100);//wouldn't add this again since this value is not unique

const set2 = new Set([1, true, 'a']);
//console.log(set2);
console.log(set1);

//count the no. of items
console.log(set1.size);
//check for value
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({ name: 'shubham' }));//this would return false since this is a reference type and hence is stored in a different memory location
//delete from set
set1.delete(100);
console.log(set1);
//iterate through the sets
//for...of
for (let item of set1) {
    console.log(item);
}
//converting set to an array
const setArr = Array.from(set1);
console.log(setArr);



