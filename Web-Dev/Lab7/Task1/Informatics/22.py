a=int(input())
count=0
max=0
min=9
while(a!=0):
    if(a%10>max):
        max=a%10
    if(a%10<min):
        min=a%10    
    a=a//10
print(str(min)+" "+str(max))