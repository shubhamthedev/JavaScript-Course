const http = new EasyHTTP;
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const userData = {
    name: 'John Doe',
    userName: 'johndoe',
    email: 'john@email.com'
};
//create post
// http.post('https://jsonplaceholder.typicode.com/users', userData)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
//update post
// http.put('https://jsonplaceholder.typicode.com/users/2', userData)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
//delete a post
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(res => console.log(res))
    .catch(err => console.log(err));
