num = [1, 2, 3, 4, 5]
even_num = []
odd_num = []

for nums in num:
    if nums % 2 == 0:
        even_num.append(nums)
    if nums % 2 == 1:
        odd_num.append(nums)

print(even_num)
print(odd_num)