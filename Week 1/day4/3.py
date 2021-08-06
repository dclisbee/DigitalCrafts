nums = [1, 2, 3, 4, 5, -1]
smallest_num = nums[1]
for num in nums:
    if num < smallest_num:
        smallest_num = num
print(smallest_num)