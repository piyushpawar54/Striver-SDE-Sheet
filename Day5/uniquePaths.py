"""
----BruteForce Recursive solution----- 
def countPaths(i,j,n,m):
    #base cases
    if(i==(n-1) and j==(m-1)):
        return 1
    if(i >= n or j >=m):
        return 0
    else: #calculation
        return countPaths(i+1,j,n,m) + countPaths(i,j+1,n,m)

def uniquePaths(m,n):
    i = 0
    j = 0
    return countPaths(i,j,m,n)
"""

# DP Solution
""" def countPaths(i,j,n,m,dp):
    #base cases
    if(i==(n-1) and j==(m-1)):
        return 1
    if(i >= n or j >=m):
        return 0
    if dp[i][j] != -1:
        return dp[i][j]
    else: #calculation
        dp[i][j] = countPaths(i+1,j,n,m,dp) + countPaths(i,j+1,n,m,dp)
        return dp[i][j]

def uniquePaths(m,n):
    dp = [[-1 for x in range(n)] for y in range(m)] 
    i = 0
    j = 0
    return countPaths(i,j,m,n,dp)
 """

#using combination and observation of pattern in testcases
def uniquePaths(m,n):
    N = n+m-2
    r = m-1
    res = 1

    #calculating Ncr

    for i in range(1,r+1):
        res = res * (N-r+i)//i
    
    return res


m = 3
n = 2
print(uniquePaths(m,n))





