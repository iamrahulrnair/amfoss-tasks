length=int(input())
string=input()
# 7/16 timeout
def check(string):
    if(length<=100000 and length>=1):
        for i in range(0,len(string)):
            for j in range(len(string)-1,i,-1):
                new_string=swap_string(i,j,string)
                if(checkPalindrome(new_string)):
                    print(len(new_string))
                    print("".join(new_string))
                    return
                # for deletion

        last_index=len(string)-1
        first_index=0
        string=list(string)
        while(first_index<last_index):
            if(string[first_index]!=string[last_index]):
                string.pop(last_index)
                if(checkPalindrome(string)):
                    print(len(string))
                    print("".join(string))
                    return
                last_index-=1


        print(len(string))                    
        print("".join(string))    

def swap_string(left,right,string):
    first_val=string[left]
    sec_val=string[right]
    string=list(string)
    string[left]=sec_val
    string[right]=first_val
    "".join(string)
    return string
    
def checkPalindrome(word):
    first=0
    last=len(word)-1
    isPal=True
    while(first<last):
        if(word[first]==word[last]):
            first+=1
            last-=1
        else:
            isPal=False
            break
    
    return isPal
    
check(string)
