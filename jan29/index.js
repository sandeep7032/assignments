assignment 1

var n = prompt("enter your number");
n=parseInt(n);

if(isNaN(n))
{
  alert("enter valid number");
 
  else
  {
    for(i=2;i<=n-1;i++)
    if(n%i==0){
    flag=false;
    break;
  }
  if(flag==true)
  alert("it is prime");
  else
  alert("it is composite");
}
