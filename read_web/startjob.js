let rq = require('request-promise');
let cheerio = require('cheerio');
let fs = require('fs');
let iconv = require('iconv-lite');
let puppeteer = require("puppeteer");

//var puppeteer = require("puppeteer");





var GET_UUID = () => (new Date()).getTime();

var url = 'https://finance.daum.net/quotes/A086900';
// var url = 'https://finance.naver.com/item/main.nhn?code=207760';
//var url = 'https://www.reddit.com';
// var url = "https://www.google.com";

var isFile = true;
var filename = 'F'+GET_UUID();

console.log('Start ' +  filename);
( async () => {

  console.log('Start # 1 ');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  console.log('Go page=' + url);

  await page.goto(url);
  await page.screenshot({ path: '/' + filename + ".png" });
  await page.pdf({ path: '/' + filename +".pdf", format: "A4" });

  // 모든 스크래핑 작업을 마치고 브라우저 닫기
  await browser.close();
})();