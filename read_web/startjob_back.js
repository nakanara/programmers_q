var rq = require('request-promise');
var cheerio = require('cheerio');
var fs = require('fs');

//var puppeteer = require("puppeteer");
// var url = 'https://finance.daum.net/quotes/A086900';






var GET_UUID = () => (new Date()).getTime();

var url = 'https://finance.naver.com/item/main.nhn?code=207760';
//var url = 'https://www.reddit.com';
var isFile = true;
var filename = 'F'+GET_UUID();

 rq({
  url: url,  
  encoding: null,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
  }
})
  .then(function(html){    
    var $ = cheerio.load(html);

    if(isFile) {
      fs.writeFile( filename+ '.html', html, 'utf-8', function(err) {
        console.log('비동기적 파일 쓰기 완료');
      });
    }


    // var chart_area = $('#chart_area');
    // var to_dayval = $('div.today p.no_today em.no_up', chart_area).children().eq(0);


    // var name = $();
    // var currentVal = $(to_dayval).text();

    var middle = $('#middle');
    var dds = $('dl.blind', middle).children();

    $(dds).each( (i, el) => {
      console.log($(el).text());
    })




  }).catch(function(e){
    console.log(e);
  });
