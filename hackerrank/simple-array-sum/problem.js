'use strict';


/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    return ar.reduce( (sum, v) => sum+v, 0);      
}

const ar = [1, 2, 3, 4, 5, 6]

console.log(simpleArraySum(ar));
