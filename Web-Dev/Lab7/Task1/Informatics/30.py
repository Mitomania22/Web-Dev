numbers=list(map(int, input().split()))
counter=0
for i in range(len(numbers)-2):
    if numbers[i+1]>numbers[i]and numbers[i+1]>numbers[i+2]:
        counter=counter+1
print(counter)        