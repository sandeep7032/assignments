//Assignment -> 1

var a = prompt("enter num1");
var b = prompt("enter num2");
var c = prompt("enter num3");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
if (a<b && a<c) {
	alert(a + " smaller number");
}
else if (b<a && b<c) {
	alert(b + " smaller number");
}
else {
	alert(c + " smaller number");
}


//Assignment -> 2

var char = prompt("enter an alphabet");
if (char == 'a'||char=='A'||char=='e'||char=='E'||char=='I'||char=='i'||char=='o'||char=='O'||char=='u'||char=='U'){
	alert("given letter is a vowel");
}
else {
	alert("given letter is a consonent");
}
