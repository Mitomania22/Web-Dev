a=int(input())
b=int(input())
for i in range(a,b+1):
    sqrt_i=int(i**0.5)
    if sqrt_i*sqrt_i==i:
        print(str(i)+" ")