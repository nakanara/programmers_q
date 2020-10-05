'use strict';

<<<<<<< HEAD
// let ReadWebPage = require('./web/ReadWebPage');
let DBConnection = require('./db/DBConnection');
let ReadWebPage = require('./web/ReadWebPage');
let DBConnect = require('./db/DBConnect');
=======
const ReadWebPage = require('./web/ReadWebPage');
const Sqls = require('./db/Sqls');
>>>>>>> b4fbc8482e84ccfcef2e11eed90ae672ee55cf4e

var url = 'https://finance.daum.net/quotes/';
var code = 'A086900';
// var url = 'https://finance.naver.com/item/main.nhn?code=207760';
//var url = 'https://www.reddit.com';
// var url = "https://www.google.com";

//  let readWebPage = new ReadWebPage(url, code, true)
 //readWebPage.read();
//  readWebPage.readFile('/F1593574328137.html');


<<<<<<< HEAD
// console.log('start');
// const dbConnection = new DBConnection();
// dbConnection.execute();
// console.log('end');

//DBConnect.asyncFunction();

DBConnect.select("SELECT * FROM STOCK_COMP LIMIT 10", [], function(rows){

  console.log('call');
  console.log(rows);
=======
// DBConnect.asyncFunction();
//sqlReader.loadSQL();
// sqlReader.getSQL('STOCK_ITEM', 'update_stock_item');


let sqls = new Sqls();
// sqls.select('STOCK_ITEM', 'get_stock_items', {}, (data) =>  {

// } );


sqls.select('STOCK_ITEM', 'get_stock_items', {STOCK_NAME: '동화약품'}, (data) =>  {


  // console.log(data);
  console.log(`${data[0]['STOCK_ID']}`);

  data.forEach((d, i) => {

    console.log(d);
    sqls.insert('STOCK_ITEM', 'add_stock_item', d, (data) => {
      console.log(data);
    });

  });

>>>>>>> b4fbc8482e84ccfcef2e11eed90ae672ee55cf4e


});

<<<<<<< HEAD
// rows.forEach((r, i) => {
//   console.log(r);
// })
=======

>>>>>>> b4fbc8482e84ccfcef2e11eed90ae672ee55cf4e
