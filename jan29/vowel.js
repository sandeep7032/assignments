var s =prompt("enter word");
var c, i,count=0;
for (i=0; i<=s.length-1; i++){
  c = s[i]
  if (c=="a"|| c=="e" || c=="i" || c=="o" || c=="u" ||
  c=="A"|| c=="E"|| c=="I" || c=="O" || c=="U"){
count++;
}
}
alert(count);
