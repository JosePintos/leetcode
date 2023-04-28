/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//My solution
var isSubsequence = function(s, t) {
    if(s === t || s=== '') return true
    let start = 0
    let end = t.length-1
    let idx = 0
    let last = s.length-1
    let res = 0
    while (start <= end){
        if(s[idx] === t[start]){
            idx++
            start++          
            res++  
            if(idx === last){
                break
            }
            if(res === s.length){
                return true
            }
        }
        if(s[last] === t[end]){
            last--
            res++
            end--        
            if(res === s.length){
                return true
            }
        }
        else {
            end--
            start++ 
        }
        
    }
    
    return false
};


//Better solution using 'two pointers' properly
var isSubsequence = function(s, t) {
    if(s === t || s=== '') return true
    let [i, j] = [0,0]
    while (j < t.length){
        if (s[i] == t[j]){
            i++
        }
        j++
    }
    
    if (i != s.length){
        return false
    }
    return true
};