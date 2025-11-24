# Problem: Given n, calculate the sum 1 + 2 + ... + n and print it.

n = 10
sum_ = 0

for i in range (1, n+1):
    sum_ += i

    print("Sum form 1 to",n,"is",sum_)
