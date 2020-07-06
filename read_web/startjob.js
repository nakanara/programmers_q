'use strict';

// let ReadWebPage = require('./web/ReadWebPage');
let DBConnection = require('./db/DBConnection');


var url = 'https://finance.daum.net/quotes/';
var code = 'A086900';
// var url = 'https://finance.naver.com/item/main.nhn?code=207760';
//var url = 'https://www.reddit.com';
// var url = "https://www.google.com";


//  let readWebPage = new ReadWebPage(url, code, true)
//  readWebPage.read();
//  readWebPage.readFile('/F1593744804341.html');


console.log('start');
const dbConnection = new DBConnection();
dbConnection.execute();
console.log('end');