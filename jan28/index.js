// Assignment -> 1


var num = prompt("enter a num");
for (var i = num;i>=0;i--){
	console.log(i);
}


// Assigment -> 2

var num1 = 0;
var num2 = 1;
var num3 = prompt("enter a num");
num3 = parseInt(num3);
var num4;
for (var i=1;i<=num3;i++){

	if (i==1)
		console.log(num1);
	else if(i==2)
		console.log(num2);
	else{
		num4 = num1+num2;
		console.log(num4)
		num1=num2;
		num2=num4;
	}
}
