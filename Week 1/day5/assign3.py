array1 = [0,1,0,3,12]
array2 = [1,7,0,0,8,0,10,12,0,4]

for i in array1:
    if i == 0:
        array1.remove(i)
        array1.append(i)
    else:
        continue

for i in array2:
    if i == 0:
        array2.remove(i)
        array2.append(i)
    else:
        continue
print(array1)
print(array2)