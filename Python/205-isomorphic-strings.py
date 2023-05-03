#Solution
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        mapS = {}
        mapT = {}

        for i in range(len(s)):
            if (s[i] in mapS and mapS[s[i]] != t[i]) or (t[i] in mapT and mapT[t[i]] != s[i]):
                return False
            mapS[s[i]] = t[i]
            mapT[t[i]] = s[i]
        
        return True