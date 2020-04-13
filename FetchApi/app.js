// document.getElementById('button1').addEventListener('click', getText);
// function getText() {
//     fetch('test.txt')
//         .then(function (res) {
//             //this returns a promise so we use another .then
//             return res.text();
//         })
//         .then(function (data) {
//             document.getElementById('output').innerHTML = data;
//         })
//         .catch(function (err) {
//             console.log(err);
//         });
// }
// document.getElementById('button2').addEventListener('click', getJson);

// function getJson() {
//     fetch('posts.json')
//         .then(function (res) {
//             //this returns a promise so we use another .then
//             return res.json();
//         })
//         .then(function (data) {
//             let output = '';
//             data.forEach(function (post) {
//                 output += `
//                 <li>${post.title}</li>
//                 `;
//             });
//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(function (err) {
//             console.log(err);
//         });
// }
// document.getElementById('button3').addEventListener('click', getExternal);
// function getExternal() {
//     fetch('https://api.github.com/users')
//         .then(function (res) {
//             //this returns a promise so we use another .then
//             return res.json();
//         })
//         .then(function (data) {
//             let output = '';
//             data.forEach(function (user) {
//                 output += `
//                 <li>${user.login}</li>
//                 `;
//             });
//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(function (err) {
//             console.log(err);
//         });
// }

//Using the same with arrow functions
document.getElementById('button1').addEventListener('click', getText);
function getText() {
    fetch('test.txt')
        .then(res => res.text())
        .then(function (data) {
            document.getElementById('output').innerHTML = data;
        })
        .catch(function (err) {
            console.log(err);
        });
}
document.getElementById('button2').addEventListener('click', getJson);

function getJson() {
    fetch('posts.json')
        .then(res => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (post) {
                output += `
                <li>${post.title}</li>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}
document.getElementById('button3').addEventListener('click', getExternal);
function getExternal() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (user) {
                output += `
                <li>${user.login}</li>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}