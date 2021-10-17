#1/8
T=int(input())
for i in range(0,T):
    input_array=input().split(" ")
    gift_day1=int(input_array[0])
    gift_day2=int(input_array[1])
    c=int(input_array[2])
    d=int(input_array[3])
    N=int(input_array[4])
    eq=c*gift_day1+d*gift_day2
    if(eq>10**18):
        print(eq%1000000007)
    else:
        print(eq)
    
