numbers=list(map(int, input().split()))
counter=0
for i in range(len(numbers)-1):
    if numbers[i+1]>0 and numbers[i]>0 or numbers[i+1]<0 and numbers[i]<0:
        print(str(numbers[i])+" "+str(numbers[i+1]))
        break