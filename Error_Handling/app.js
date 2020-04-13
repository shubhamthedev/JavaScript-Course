const user = {
    email: 'jdoe@gmail.com'
};
try {
    //Reference Error
    //myFunction();
    //Type Error
    //null.myFunction();
    //Syntax error
    //eval('Hello world');
    //URIError
    //  decodeURIComponent('%');
    if (!user.name) {
        //throw 'User has no name';
        throw new SyntaxError('User has no name');
    }
} catch (e) {
    console.log(`User Error: ${e.message}`);
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof TypeError);
} finally {
    console.log('Finally runs regardless of results...');
}
console.log('Program Continues...');