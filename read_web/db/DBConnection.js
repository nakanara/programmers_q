const mariadb  = require('mariadb');

const pool = mariadb.createPool({
  host: 'dev.egene.io',
  port: 3301,
  database: 'egene52',
  user: 'egene52',
  password: 'egene52',
  connectionLimit: 5,
  connectTimeout: 10000
});

class DBConnection {

  
  constructor(){

    console.log('DB connection');

  }

  
  execute(){
    console.log('execute');

    pool.getConnection()
      .then(conn => {
    
        console.log('connection success');

        conn.query("SELECT * from eso_srm limit 1")
          .then((rows) => {
            console.log(rows); //[ {val: 1}, meta: ... ]
            //Table must have been created before 
            // " CREATE TABLE myTable (id int, val varchar(255)) "
            //return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);

            return rows;
          })
          .then((res) => {
            console.log('then call');
            console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
            conn.end();
          })
          .catch(err => {
            //handle error
            console.log(err); 
            conn.end();
          })
          
      }).catch(err => {
        //not connected
        console.log('not connectd');
      });
  }

}


module.exports = DBConnection;