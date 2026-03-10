a=int(input())
count=0
while(a!=0):
    count=count+a%10
    a=a//10
print(count)