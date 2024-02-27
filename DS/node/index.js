// console.log("1");

// setTimeout(() => console.log("2"));

// const p1 = new Promise((resolve, reject) => {
//  resolve("3");
// });
// p1.then((data) => console.log(data));

// const p2 = new Promise((resolve, reject) => {
//  resolve();
// });
// p2.then(() => console.log("4"));

// setTimeout(() => consol 'e.log("5"));

// console.log("6");

const url = require('url');

const urlText = 'https://user:pass@sub.example.com:8080/#/a/t/h?query=string';

let xx = urlText;
if (urlText.indexOf('#')) {
    xx = urlText.split('#')[1];
}
const parseUrl = url.parse(xx, true).query;
console.log(parseUrl)