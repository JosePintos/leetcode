/**
 * @param {number[]} salary
 * @return {number}
 */

//My solution
var average = function(salary) {
    const min = Math.min(...salary)
    const max = Math.max(...salary)
    
    const resultado = salary.reduce((acc,current) => {
        return (current !== min && current!== max) ? acc+=current : acc+=0
    },0)
    return resultado/(salary.length-2)
};