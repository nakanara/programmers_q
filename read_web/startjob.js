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

  let html = (await page.content());

  if(isFile) {
    fs.writeFile( '/'+filename+ '.html', html, 'utf-8', function(err) {
      console.log('비동기적 파일 쓰기 완료');
    });
  }

  await browser.close();

  var $ = cheerio.load(html);

  let title = $('title').text();
  let companyInfo = $('#layerCompanyInfo').text();
  // 전일
  let prevPrice = $('p[data-realtime-prev-closing-price=yes]').text();
  
  // 고가
  let highPrice = $('p[data-realtime-high-price=yes]').text();
  let tradeVolume = $('p[data-realtime-acc-trade-volume=yes]').text();
  let openingPrice = $('p[data-realtime-opening-price=yes]').text(); // 시가
  let lowPrice = $('p[data-realtime-low-price=yes]').text(); // 저가
  let tradePrice = $('p[data-realtime-acc-trade-price=yes]').text(); // 거래대금

  let boxSummary = $('span.txtB');
  let boxSummaryDD = $('dd', boxSummary).children();

  console.log(boxSummaryDD.length);

  let arrInfo = [];
  $(boxSummaryDD).each((i, el) => {
    let v = $(el).text();
    console.log('i='+ i + '/' + v);
    arrInfo.push(v);
  })

  console.log('title=' + title);
  console.log('info=' + companyInfo);
  console.log('전일=' + prevPrice);


  // await page.screenshot({ path: '/' + filename + ".png" });
  // await page.pdf({ path: '/' + filename +".pdf", format: "A4" });

  // 모든 스크래핑 작업을 마치고 브라우저 닫기
  
})();