"""
    Time complexity : O(N * log(N))
    Space complexity : O(N)

    Where 'N' is the total number of elements in the array/list.
"""

from sys import stdin,setrecursionlimit
setrecursionlimit(10**7)

# Function to merge the two subarrays.
def merge(arr, left, mid, right):
    i = left
    j = mid + 1
    revCount = 0

    for i in range(left,mid+1):
        while(j<=right and arr[i] > 2*arr[j]):
            j += 1
        revCount += (j - (mid+1))
        
            
    temp = [0 for x in range(right - left + 1)]
    i = left
    j = mid + 1

    k = 0

    while ((i <= mid) and (j <= right)):
        if (arr[i] <= arr[j]):
            temp[k] = arr[i]
            k += 1
            i += 1
        
        else:
            temp[k] = arr[j]
            k += 1
            j += 1
        
    while (i <= mid):
        temp[k] = arr[i]
        k += 1
        i += 1

    while (j <= right):
        temp[k] = arr[j]
        k += 1
        j += 1

    k = 0
    for i in range(left, right + 1):
        arr[i] = temp[k]
        k += 1

    return revCount

# Function to split two subarrays and then merge them and count reversePairs.
def mergeSort(arr, left, right):
    revCount = 0

    if (right > left): 
        mid = (right + left) // 2

        """
            Divide the array into two parts
            total inversion count will be the
            sum of 'REVCOUNT' of left part +
            'REVCOUNT' of right part + 'REVCOUNT' of
            their combined part.
        """
        revCount += mergeSort(arr, left, mid)
        revCount += mergeSort(arr, mid + 1, right)

        # Merge both parts and count their combined reversePairs.
        revCount += merge(arr, left, mid, right)
    
    return revCount
    
def reversePairs(arr, n):
    return mergeSort(arr, 0, n - 1)

# Main.
arr = [2,4,3,5,1]
n = len(arr)
print(reversePairs(arr, n))