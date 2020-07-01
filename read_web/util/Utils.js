

class Utils {

   static GET_UUID(perfix='') {
     return perfix + (new Date()).getTime();
   }

}

module.exports = Utils;


