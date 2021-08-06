nums = [1, 2, 3, 4, 5, 2]
mult = []
for num in nums:
    new = num * nums[-1]
    mult.append(new)

print(mult[:-1])