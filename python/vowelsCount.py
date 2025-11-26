
# Vowels Count in String

s = "Tanish Sharma"
vowels = "aeiou"
count = 0

print(s)

for ch in s.lower():
    if ch in vowels:
        count += 1

        print(f'Number of vowels "{s}" is {count}')
