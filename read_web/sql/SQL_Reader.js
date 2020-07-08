const fs = require('fs');
const logs = require('../util/Logs');
const cheerio   = require('cheerio');

const sqlPath = './sql/resource/';
const lastLen = '.xml'.length;


class SQL_Reader {

  constructor(){

    this.sql_module =  new Map();
    this.loadSQL();
  
  }

  async loadSQL() {
    
    
    let files =  fs.readdirSync(sqlPath, {encoding: 'utf-8'});

    
    for(let f of files) {

      logs.info(`file = ${f}`);

      if( !/(.xml)$/i.test(f)) {        
        continue;
      }

      let fname = f.substr(0, f.length - lastLen).toUpperCase() ;

      logs.info(`fname = ${fname}`)
  

      var data = fs.readFileSync(`${sqlPath}${f}`, {encoding: 'utf-8'})          
      let $ = cheerio.load(data);
      this.sql_module[fname] = $;
      
    }
  }

  getSQL(module, id) {
    let $ = this.sql_module[module] || {}
    var sql = $('sql[id=' + id + ']').text();
    
    return sql;
  }

}


module.exports = SQL_Reader;