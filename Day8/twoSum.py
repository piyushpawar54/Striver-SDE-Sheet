def twoSum(nums,target):
    ans = [0,0]
    hashTable = {}
    #logic
    for i in range(len(nums)):
        x = target - nums[i]
        if x in hashTable:
            ans[1] = i;
            ans[0] = hashTable[target - nums[i]]
            return ans
        hashTable[nums[i]] = i
    return ans