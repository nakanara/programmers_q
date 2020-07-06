const confProperties = require('properties-reader');
const PropertiesReader = require('properties-reader');

const properties = PropertiesReader('conf.properties');

module.exports = {
  getValue(key) {


    var val = properties.get(key) || '';
    console.log(key + '=' + val);

    return val;
  }
}
