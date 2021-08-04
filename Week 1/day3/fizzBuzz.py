input1 = int(input("Pick a number\n"))
if input1%3 == 0 and input1%5 == 0:
    print("FizzBuzz")
elif input1%3 == 0:
    print("Fizz")
elif input1%5 == 0:
    print("Buzz")
