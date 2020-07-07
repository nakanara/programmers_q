const fs = require('fs');
const Logs = require('../util/Logs');
let cheerio   = require('cheerio');

class SQL_Reader {

  constructor(){

    this.sql_module =  new Map();

    
  }

  async loadSQL() {
    fs.readFile('./sql/STOCK_ITEM.xml', {encoding: 'utf-8'}, (err, data) => {

      if(err) {
        Logs.err(err);
        return;
      }
      console.log(data);

      let $ = cheerio.load(data);
      this.sql_module['STOCK_ITEM'] = $;

      //console.log(this.sql_module);

      this.getSQL('STOCK_ITEM', 'update_stock_item');
    })
  }

  

  getSQL(module, id) {
    let $ = this.sql_module['STOCK_ITEM'] || {}
    var sql = $('sql[id=' + id + ']').text();
    
    Logs.info(sql);

  }

}


module.exports = SQL_Reader;