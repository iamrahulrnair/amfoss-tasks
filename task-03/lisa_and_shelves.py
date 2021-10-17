# 11/28 timeout
n=int(input())
def check(n):
    counter=2
    if(n==1):
        print(1)
        return 
    if(n%5==0 and n%2!=0):
        new_n=int(n/5)
    elif(n%2==0):
        new_n=int(n/2)
    elif(n%3==0):
        new_n=int(n/3)
    else:
        print(2)
        return
    for i in range(2,new_n+1):
        if(n%i==0):
            counter=counter+1
    print(counter)
check(n)