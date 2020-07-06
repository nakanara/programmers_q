'use strict';


let rq        = require('request-promise');
let cheerio   = require('cheerio');
let fs        = require('fs');
let puppeteer = require('puppeteer');
let utils     = require('../util/Utils');
let StockItem = require('../stock/StockItem');



class ReadWebPage {


  constructor(url, code, isFile=false){
    this.isFile = isFile;
    this.filename = '';    
    this.code = code;

    this.url = url + code;

    if(this.isFile) {
      this.filename = utils.GET_UUID('F');
    }

    this.parseData.bind(this);

    
    
  }

  readFile(file){
    
    
    fs.readFile(file, 'utf-8', (err, html) => {
      
      if(err) {
        console.error(err);
        return;
      }

      this.parseData(html);
      
    })
  }
  ;


  async read(){

    
    console.log('Start # 1 ');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    console.log('Go page=' + this.url);
  
  
    await page.goto(this.url);
  
    let html = (await page.content());
  
    if(this.isFile) {
      fs.writeFile( '/'+this.filename+ '.html', html, 'utf-8', (err) => {
        console.log(this.filename + '//비동기적 파일 쓰기 완료');
      });
    }
  
    await page.screenshot({ path: '/' + this.filename + ".png" });
    await page.pdf({ path: '/' + this.filename +".pdf", format: "A4" });

    await browser.close();
  
    this.parseData(html);
        
  }

  parseData(html) {

    var $ = cheerio.load(html);
  
    let title = $('title').text();
    

    let stockItem = new StockItem();
    let obj = stockItem.getItem();

    let companyInfo = $('#layerCompanyInfo').text();
    
    obj.company = title;
    obj.companyInfo = companyInfo;
    obj.code = this.code;

    // 전일
    obj.prevPrice = $('p[data-realtime-prev-closing-price=yes]').text();
    
    // 고가
    obj.highPrice = $('p[data-realtime-high-price=yes]').text();
    
    obj.tradeVolume = $('p[data-realtime-acc-trade-volume=yes]').text();
    obj.openingPrice = $('p[data-realtime-opening-price=yes]').text(); // 시가
    obj.lowPrice = $('p[data-realtime-low-price=yes]').text(); // 저가
    obj.tradePrice = $('p[data-realtime-acc-trade-price=yes]').text(); // 거래대금
  
    let boxSummary = $('span.txtB');
    let boxSummaryDD = $('dd', boxSummary).children();
        
    let mappingIndex= [
      '', 'hisHighPrice',
      '', 'hisLowPrice', 
      '', 'highPrice52', 
      '', 'lowPirce52', 
      '', 'category', 
      '', 'otherUserPer', 
      '', 'totalPrice', 
      '', 'epsper', '',
      '', 'bpspbr', '',
      '', 'wics'
  ];
  
    let arrInfo = [];
    $(boxSummaryDD).each((i, el) => {
      let v = $(el).text();
      let k = mappingIndex[i];
      if(k === '') return;

      console.log('i='+ i + '/' + v);
      arrInfo.push(v);
      obj[k] = v;
    })
  
    stockItem.setValue(obj);
    stockItem.toString();

    return stockItem;

  }


}

module.exports = ReadWebPage;