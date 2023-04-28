#My solution
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        numMap = {}
        for n in nums:
            numMap[n] = 1 + numMap.get(n,0)
        valuesSorted = list(numMap.values())
        valuesSorted.sort(reverse=True)
        res = []
        print(valuesSorted, numMap)
        for i in range(k):
            res.append(list(numMap.keys())[list(numMap.values()).index(valuesSorted[i])])
            numMap.pop(res[-1])
        return res


#Better solution with bucket sort
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        numMap = {}
        freq = [[] for i in range(len(nums)+1)]

        for n in nums:
            numMap[n] = 1 + numMap.get(n,0)

        for n, c in numMap.items():
            freq[c].append(n)
            
        res = []

        for i in range(len(freq) - 1, 0, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res