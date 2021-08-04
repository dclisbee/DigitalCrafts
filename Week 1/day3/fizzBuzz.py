input1 = int(input("Pick a number\n"))
if input1%3 == 0:
    print("Fizz")
if input1%5 == 0:
    print("Buzz")
if input1%3 & input1%5 == 0:
    print("FizzBuzz")
