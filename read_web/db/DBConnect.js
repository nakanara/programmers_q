const mariadb = require('mariadb');
const properties = require('../util/ConfUtil');

const pool = mariadb.createPool({
     host: properties.getValue('db.host'), // 'mysql-nakanara.alwaysdata.net', 
     port: properties.getValue('db.port'), //3306,
     user: properties.getValue('db.user'), //'nakanara', 
     password: properties.getValue('db.password'), //'2011ghdzhd1!',
     database: properties.getValue('db.database'), //'nakanara_app_2020_01',
     connectionLimit: 5
});

class DBConnect {

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


