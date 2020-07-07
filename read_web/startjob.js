'use strict';

let ReadWebPage = require('./web/ReadWebPage');
let DBConnect = require('./db/DBConnect');
let SQL_Reader = require('./sql/SQL_Reader');

var url = 'https://finance.daum.net/quotes/';
var code = 'A086900';
// var url = 'https://finance.naver.com/item/main.nhn?code=207760';
//var url = 'https://www.reddit.com';
// var url = "https://www.google.com";

//  let readWebPage = new ReadWebPage(url, code, true)
 //readWebPage.read();
//  readWebPage.readFile('/F1593574328137.html');


// DBConnect.asyncFunction();


let sqlReader = new SQL_Reader();
sqlReader.loadSQL();
//sqlReader.getSQL('STOCK_ITEM', 'update_stock_item')