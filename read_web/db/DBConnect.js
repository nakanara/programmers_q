const mariadb = require('mariadb');
const properties = require('../util/ConfUtil');
const Logs = require('../util/Logs');


const pool = mariadb.createPool({
     host: properties.getValue('db.host'),
     port: properties.getValue('db.port'),
     user: properties.getValue('db.user'),
     password: properties.getValue('db.password'), 
     database: properties.getValue('db.database'), 
     connectionLimit: properties.getValue('db.connectionLimit')
});


class DBConnect {
   

  static async select(sql, arrParams = [], fnCB) {
    let conn;

    try{

      conn = await pool.getConnection();
      
      Logs.info(`sql=${sql} \n\tparams=${arrParams}`);

      const rows = await conn.query(sql, arrParams);
      
      if(fnCB) fnCB.call(null, rows);
    } catch (err) {
      Logs.err(err);
      throw err;
    } finally {
      if (conn) return conn.end();
    }

  }

  static async insert(sql, arrParams = [], fnCB){
    let conn;

    try{

      conn = await pool.getConnection();
      
      Logs.info(`sql=${sql} \n\tparams=${arrParams}`);
      
      const rows = await conn.query(sql, arrParams);
      
      if(fnCB) fnCB.call(null, rows);
    } catch (err) {
      Logs.err(err);
      throw err;
    } finally {
      if (conn) return conn.end();
    }
  }
 

  static async update(sql, arrParams = [], fnCB){
    let conn;

    try{

      conn = await pool.getConnection();
      
      Logs.info(`sql=${sql} \n\tparams=${arrParams}`);
      
      const rows = await conn.query(sql, arrParams);

      if(fnCB) fnCB.call(null, rows);
    } catch (err) {
      Logs.err(err);
      throw err;
    } finally {
      if (conn) return conn.end();
    }
  }

  

  static async select(selectSql, params = [], fnCB) {

    let conn;

    try {
      conn = await pool.getConnection();

      console.log('sql =' + selectSql);
      const rows = await conn.query(selectSql, params);
      console.log('in');
      console.log(rows);

      if(fnCB) fnCB.call(null, rows);

      // return rows;

    } catch(err) {
      conn.release();

      throw err;
    } finally {
      if( conn) conn.release();
    }

  }

  static async update(updateSql, params = []){
    let conn;

    try {
      conn = await pool.getConnection();
      const rows = await conn.query(updateSql, params);
      return rows;

    } catch(err) {
      conn.release();

      throw err;
    } finally {
      if( conn) conn.release();
    }
  }

  static async delete(deleteSql, params = []){
    let conn;

    try {
      conn = await pool.getConnection();
      const rows = await conn.query(deleteSql, params);
      return rows;

    } catch(err) {
      conn.release();
      throw err;
    } finally {
      if( conn) return conn.release();
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


