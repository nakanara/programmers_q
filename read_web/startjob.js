'use strict';

// let ReadWebPage = require('./web/ReadWebPage');
let DBConnection = require('./db/DBConnection');
let ReadWebPage = require('./web/ReadWebPage');
let DBConnect = require('./db/DBConnect');

var url = 'https://finance.daum.net/quotes/';
var code = 'A086900';
// var url = 'https://finance.naver.com/item/main.nhn?code=207760';
//var url = 'https://www.reddit.com';
// var url = "https://www.google.com";

//  let readWebPage = new ReadWebPage(url, code, true)
 //readWebPage.read();
//  readWebPage.readFile('/F1593574328137.html');


// console.log('start');
// const dbConnection = new DBConnection();
// dbConnection.execute();
// console.log('end');

//DBConnect.asyncFunction();

DBConnect.select("SELECT * FROM STOCK_COMP LIMIT 10", [], function(rows){

  console.log('call');
  console.log(rows);


});

// rows.forEach((r, i) => {
//   console.log(r);
// })
