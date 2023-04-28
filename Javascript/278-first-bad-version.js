/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */


//My solution
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let lower = 1
        let upper = n

        while(lower <= upper){
            const medio = lower + Math.ceil((upper-lower)/2)

            if(!isBadVersion(medio)) lower = medio+1

            if(isBadVersion(medio)){
                
                if(!isBadVersion(medio-1)){
                    return medio
                }
                upper = medio-1
            }
        }
    };
};


//Más conciso
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        //En este caso el que me dice el resultado es el lower ya que cuando
        //se compara con el ultimo numero, este da false haciendo que se
        //incremente en 1 que es donde esta el primer true
        
        let lower = 1
        let upper = n
        while(lower <= upper){
            const medio = lower + Math.ceil((upper-lower)/2)

            if(!isBadVersion(medio)) lower = medio + 1

            if(isBadVersion(medio)) upper = medio - 1
        }
        return lower
    };
};