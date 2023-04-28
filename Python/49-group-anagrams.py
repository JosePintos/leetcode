import collections

# My solution
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = []
        hashmap = {}
        for str in strs:
            sortedStr = ''.join(sorted(str))
            if sortedStr in hashmap:
                hashmap[sortedStr].append(str)
            else:
                hashmap[sortedStr] = [str]

        for key in hashmap:
            result.append(hashmap[key])

        return result #tambien se puede retornar hashmap.values()


# Better solution
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = collections.defaultdict(list)

        for s in strs:
            count = [0] * 26

            for c in s:
                count[ord(c) - ord("a")] += 1

            res[tuple(count)].append(s)

        return res.values()


