var rq = require('request-promise');

// var url = 'https://finance.daum.net/quotes/A086900';

var url = 'https://finance.naver.com/item/main.nhn?code=207760';
 rq({
  url: url
})
  .then(function(html){
    console.log(html);
  }).catch(function(e){
    console.log(e);
  });