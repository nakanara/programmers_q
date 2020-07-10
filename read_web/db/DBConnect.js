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


