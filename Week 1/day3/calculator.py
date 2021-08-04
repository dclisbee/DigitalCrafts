input1 = int(input("What is the first number?\n"))
input2 = input("What operation are you trying to run?\n")
input3 = int(input("What is the second number?\n"))

if input2 == "*":
    output = input1 * input3
if input2 == "/":
    output = input1 / input3
if input2 == "+":
    output = input1 + input3
if input2 == "-":
    output = input1 - input3
else:
    print("Please type a proper operand")

print(output)
