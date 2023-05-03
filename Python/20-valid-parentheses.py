#My solution
class Solution:
    def isValid(self, s: str) -> bool:
        res = [] 
        for i in range(len(s)):
            if res and ((ord(s[i]) - 1 == ord(res[-1])) or (ord(s[i]) - 2 == ord(res[-1]))):                
                res.pop()
            else:
                res.append(s[i])
        if not res:
            return True
        return False
    

#Better solution
class Solution:
    def isValid(self, s: str) -> bool:
        res = []
        closeToOpen = { ')' : '(', ']' : '[', '}' : '{'}
        for l in s:
            if l in closeToOpen:
                if res and res[-1] == closeToOpen[l]:
                    res.pop()
                else:
                    return False
            else:
                res.append(l)
        
        return True if not res else False