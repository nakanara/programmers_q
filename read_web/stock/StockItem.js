
class StockItem {
  
  constructor(){

    this.item = this.getStruct();
  }

  getItem() {
    return this.item;
  }
  
  setValue(attr) {
    this.item = {
      ... this.item,
      ...attr
    }
  }

  toString(){
    

    var obj = this.getItem();

    for(let p in obj) {
      console.log(p + '=' + obj[p]);
    }
  }


  getStruct(){
    return {
      company: '', // 회사명
      companyinfo: '', // 회사 설명
      code: '', // 코드
      prevPrice: '', // 전일가
      highPrice: '', // 고가
      tradeValume: '', // 거래량
      openingPrice: '', // 시작가
      lowPrice: '', // 저가
      tradePrice: '', // 거래액

      hisHighPrice: '', // 상한가
      hisLowPrice: '', // 하한가
      highPrice52: '', // 52주 최고
      lowPirce52: '', // 52주 최저
      category: '', // 업종
      otherUserPer: '', // 외국인 비율
      totalPrice: '', // 시가 총액
      epsper: '', // 수정필요
      bpspbr: '', // 수정 필요
      
      eps: '',  // 원 // (지배주주)당기순이익 / 발행주식수
      per: '', // 배 // 현재가 / 최근 연간 결산 EPS
      bps: '', // 원  (지배주주)자본 / 발행주식수
      pbr: '', // 배 현재가 / 최근 연간 결산 BPS

      wics: '', //업종에 따른 
    }
  }
}

module.exports = StockItem;