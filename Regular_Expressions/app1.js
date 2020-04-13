let re;
re = /hello/;
re = /hello/i; //i is for case insensitive
// re = /hello/g; //g is ffor global search this is gonna search for all instances of hello not just the first one

// console.log(re);
// console.log(re.source);

//exec() - Return reuslt in an array or null
// const result = re.exec('shubham hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

//match() - return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

//search() - Returns the index of the first match if not found it returns -1
// const str = 'shubham Hello There';
// const result = str.search(re);
// console.log(result);

//replace() - Return a new string with some or all matches of a pattern
const str = 'Hello there';
const newStr = str.replace(re, 'hi');
console.log(newStr);


