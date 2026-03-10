a=int(input())
count = 0
for i in range(1,int(a ** 0.5)+1):
    if a%i==0:
        count+=2
if int(a**0.5)**2==a:
    count-=1
print(count)     