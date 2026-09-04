""" def name(a,b):#parameter
    print(a+b)
name (6,8)#argument


def func(a,b):#parameter
    print(a+b)
var = func
var(5,6)#function ko variabele ke andar store kr skte hain  aur o ek object ki trh kakam krega

 """
""" def func(a,b):#parameter
    return a+b,a*b, a%b,  # ham cahhe jitna vbalue return karaye ek function mkrega but tuples ke form me 
print (func(5,4))
k=func(4,5)
c=func(4,5)
d=func(4,5)

l,j,i=func(8,9)
print(k,c,d)
print(l,j,i)
 """

""" ef func(a,b,c):
    return a+b,a-b,a*c
print(func(2,3,4)) """

# ef func(val,str=[]):
#     str.append(val)
#     return str
# print(func)


a ="swiss"
for i in a:
    if(a.count==1):
        print(a.count)
    else:
        print(a)
