const SQL_Reader = require('../sql/SQL_Reader');
const DBConnect = require('../db/DBConnect');
const Logs = require('../util/Logs');

const sqlReader = new SQL_Reader();

class Sqls {
  constructor(){
    
  }

  async select(module, id, params = {}, fnCB) {
    
    let sqlInfo = sqlReader.getSQL(module, id, params);
        
    Logs.info(`call select sql= ${sqlInfo.sql} // ${sqlInfo.arr}`);
    await DBConnect.select(sqlInfo.sql, sqlInfo.arr, fnCB);
  }
  
  async insert(module, id, params = {}, fnCB) {

    let sqlInfo = sqlReader.getSQL(module, id, params);
        
    Logs.info(`call insert sql= ${sqlInfo.sql} // ${sqlInfo.arr}`);
    await DBConnect.insert(sqlInfo.sql, sqlInfo.arr, fnCB);


  }


  


}

module.exports = Sqls;