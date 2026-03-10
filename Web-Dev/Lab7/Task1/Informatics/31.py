numbers=list(map(int, input().split()))
max=numbers[0]
index=0
for i in range(1, len(numbers)):
    if numbers[i] > max:
        max=numbers[i]
        index=i
print(str(max)+" "+str(index))
