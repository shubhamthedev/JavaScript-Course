const http = new easyHttp;
//Get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });
//get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

//Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};
// //create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });
//Update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });
//delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});