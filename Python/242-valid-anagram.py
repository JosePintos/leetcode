#My solution
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        hashmaps = {}
        hashmapt = {}

        if len(t) != len(s):
            return False

        for i in range(len(s)):
            if s[i] in hashmaps:
                hashmaps[s[i]]+=1
            else:
                hashmaps[s[i]]=1
            if t[i] in hashmapt:
                hashmapt[t[i]]+=1
            else:
                hashmapt[t[i]]=1
        
        for i in t:
            if i not in hashmaps or hashmaps[i] != hashmapt[i]:
                return False
        
        return True


#Better solution
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if len(t) != len(s):
            return False

        hashmapS, hashmapT = {}, {}

        for i in range(len(s)):
            hashmapS[s[i]] = 1 + hashmapS.get(s[i],0)
            hashmapT[t[i]] = 1 + hashmapT.get(t[i],0)
        
        for i in t:
            if i not in hashmapS or hashmapS[i] != hashmapT[i]:
                return False
        
        return True


#Another way
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)