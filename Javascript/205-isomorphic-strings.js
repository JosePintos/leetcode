/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    for(let i = 0; i < s.length; i++){
        const a = s.indexOf(s[i])
        const b = t.indexOf(t[i])
        
        if(s[i] !== s[b] || t[i] !== t[a]) return false
    }
    return true

};