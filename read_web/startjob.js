'use strict';

const ReadWebPage = require('./web/ReadWebPage');
const Sqls = require('./db/Sqls');

var url = 'https://finance.daum.net/quotes/';
var code = 'A086900';
// var url = 'https://finance.naver.com/item/main.nhn?code=207760';
//var url = 'https://www.reddit.com';
// var url = "https://www.google.com";

//  let readWebPage = new ReadWebPage(url, code, true)
 //readWebPage.read();
//  readWebPage.readFile('/F1593574328137.html');


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

});

