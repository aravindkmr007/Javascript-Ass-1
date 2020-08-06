// Assignment 1 allmulity
var N1=18;
var N2=6;
add = (N1+N2);
document.write.getelementbyid(hi).replace(add)
mulitply = (N1*N2);
Division = (N1/N2);
Reminder = (N1%N2);
// Assignment 2  for larger
var X=20;
var Y=10;
var Z=15;
result=(X>Y?X:Y)

final=(result>Z?result:Z)
console.log(final);
//Assignment 3 for swap 
var M=50;
var N=10;
M =  M+N
N = M-N
M = M-N
console.log( "M is  " + M)
console.log("N is  " + N)
//Assignment 4 for factorial

p = 5
result =1;
while (p > 1)
{
    result *= p
    p--  
}
document.write(result);

//Assignment 5 is leap year
year = 2016 
if (year%4 == 0 || year%100 == 0)
{
 console.log("The given year is leap year")
}
else 
{
    console.log ("The given year is not a leap year")
}
//Assignment 6 
n=10
n1=0
n2=1
console.log(n1)
console.log(n2)
for(i=3;i<n;i++)
{    
 n3=n1+n2;    
 console.log (" "+n3);    
 n1=n2;    
 n2=n3;    
}    
//Assignment 7
d=10
e=10
f=0
operation = window.prompt(" Enter the Operation")

switch (operation) 
{
    case "+":
        f=d+e;
        break;
    case "-" :
        f=d-e;
        break;
    case "*" :
        f=d*e;
        break;
    case "/" :
        f=d/e;
        break;
    case "%" :
        f=d%e;
        break;
    default :

    console.log("Enter the correct opration");
    break;


}
console.log(f);
