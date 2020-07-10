const confProperties = require('properties-reader');
const PropertiesReader = require('properties-reader');


const run_mode = process.env.RUN_MODE;
const properties = PropertiesReader(`${run_mode}.conf.properties`);

module.exports = {
  getValue(key) {


    var val = properties.get(key) || '';
    console.log(key + '=' + val);

    return val;
  }
}
