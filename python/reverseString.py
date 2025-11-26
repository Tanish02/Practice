# reverse a string


s = "Tanish"
reversed_s = ""

for i in range (len (s)-1 , - 1, -1):
    reversed_s += s[i]

    print ("Original Input:", s)
    print ("Reversed Output:", reversed_s)
