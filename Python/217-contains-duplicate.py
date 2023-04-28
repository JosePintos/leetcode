#My solution
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        nums.sort()
        i = 0
        while nums and i<len(nums)-1:
            if nums[i] == nums[i+1]:
                return True
            i+=1
        return False


#Better solution with hashset
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashset = set()

        for n in nums:
            if n in hashset:
                return True
            hashset.add(n)
        return False