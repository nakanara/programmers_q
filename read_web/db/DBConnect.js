const mariadb = require('mariadb');
const properties = require('../util/ConfUtil');
const Logs = require('../util/Logs');


const pool = mariadb.createPool({
     host: properties.getValue('db.host'),
     port: properties.getValue('db.port'),
     user: properties.getValue('db.user'),
     password: properties.getValue('db.password'), 
     database: properties.getValue('db.database'), 
     connectionLimit: 5
});


class DBConnect {
  
  static async select(selectSql, fnCB, params = {}) {
    let conn;

    try{

      conn = await pool.getConnection();
      
      const rows = await conn.query(selectSql, params);
      
      if(fnCB) fnCB.call(null, rows);
    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }

  }
  static async update(updateSql, fnCB, params = []){
    let conn;

    try{

      conn = await pool.getConnection();
      
      Logs.info(updateSql);
      
      const rows = await conn.query(updateSql, params);
      Logs.info(rows);

      if(fnCB) fnCB.call(null, rows);
    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }
  }

  static async asyncFunction() {
    let conn;

    try {
      conn = await pool.getConnection();
      const rows = await conn.query(properties.getValue('db.testSQL'));
      console.log(rows); //[ {val: 1}, meta: ... ]
      
      //const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
      //console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }
  }
}

module.exports = DBConnect;


