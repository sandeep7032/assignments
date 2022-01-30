//Assignment -> 1

var input = prompt("enter number of input numbers you want to give");
var arr = [];
for(var i = 0;i<input;i++) {
	var num = prompt("enter a num" + (i+1));
	num = parseInt(num);
	arr.push(num);
}
console.log(arr)
var max = arr[0];
for(var i=1;i<input;i++) {
	if(max<=arr[i]) {
		max=arr[i];
	}
}
alert("maximum of given numbers is " + max );
console.log(max);
