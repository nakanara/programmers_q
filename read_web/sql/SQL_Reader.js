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

      let data = fs.readFileSync(`${sqlPath}${f}`, {encoding: 'utf-8'})          
      let $ = cheerio.load(data);
      this.sql_module[fname] = $;
      
    }
  }

  getSQL(module, id, params) {
    let $ = this.sql_module[module] || {}
    var sql = $('sql[id=' + id + ']').text();
    

    return this.parseParams(sql, params);
    
    
  }

  /**
   * 
   * @param {} sql SQL 문장
   * @param {*} data  매핑 value
   */
  parseParams(sql, data = {}) {   
     
    let regexp = new RegExp(/#{([a-zA-Z0-9_])+}/g);
    let arrParams = [];

    sql = sql.replace(regexp, function(v) {
        let c = v.substr(2, v.length-3);
        let d = data[c];
        
        arrParams.push((d === undefined)? '': d);
        return '?';
    });
    return {
      sql : sql, 
      arr: arrParams
    } ;

}

}


module.exports = SQL_Reader;