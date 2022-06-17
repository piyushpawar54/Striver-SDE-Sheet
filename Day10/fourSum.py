
def fourSum(nums, target):
        res = []
        if len(nums) == 0 or nums == None:
            return res
        
        n = len(nums)
        nums.sort()
        for i in range(n):
            for j in range(i+1,n):
                target_2 = target - nums[i] - nums[j]
                
                front = j+1
                back = n-1
                
                while(front < back):
                    two_sum = nums[front] + nums[back]
                    if two_sum < target_2:
                        front+=1
                    elif two_sum > target_2:
                        back-=1
                    else:
                        quad = []
                        quad.append(nums[i])
                        quad.append(nums[j])
                        quad.append(nums[front])
                        quad.append(nums[back])
                        if quad not in res:
                            res.append(quad)
                        
                        #processing duplicates of num 3
                        while(front < back and (nums[front] == quad[2])):
                              front += 1
                        
                        #processing the duplicate of number 4
                        while(front < back and (nums[back] == quad[3])):
                              back -= 1
                        
                #processing the dupliaction of number 2
                while(j+1 < n and nums[j+1] == nums[j]):
                    j += 1
                    
            #processsing the dupliactes of num 1
            while(i+1 < n and nums[i+1] == nums[i]):
                i+=1
        
        return res   