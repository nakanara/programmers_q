const SQL_Reader = require('../sql/SQL_Reader');
const DBConnect = require('../db/DBConnect');
const Logs = require('../util/Logs');

const sqlReader = new SQL_Reader();

class Sqls {
  constructor(){
    
  }

  select(module, id, fnCB, params = {}) {
    
    let sql = sqlReader.getSQL(module, id);
    
    Logs.info(`call select sql= ${sql}`);
    DBConnect.select(sql, fnCB, params);
  }



}

module.exports = Sqls;