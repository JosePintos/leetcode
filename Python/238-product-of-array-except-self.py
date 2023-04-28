class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefix = [nums[0]]
        postfix = nums[:]
        
        for i in range(1,len(nums)):
            prefix.append(nums[i]*prefix[i-1])

        for i in range(len(postfix)-2,-1,-1):
            postfix[i] = postfix[i]*postfix[i+1]

        res = [postfix[1]]
        for i in range(1,len(nums)):
            if i == len(nums)-1:
                res.append(prefix[i-1])
            else:
                res.append(prefix[i-1]*postfix[i+1])
        
        return res


#Better solution
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * len(nums)
        prefix = 1
        for i in range(len(nums)):
            res[i] = prefix
            prefix *= nums[i]

        postfix = 1
        for i in range(len(nums)-1,-1,-1):
            res[i] *= postfix
            postfix *= nums[i]

        return res