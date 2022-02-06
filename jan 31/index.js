var p="Question 1 \n Use the object created in the class. Take a number from the user input and return a list. (Do this in console.log) of all the students who have scrored equal to or more than those marks."

console.log(p)

var obj = {
    "first_name" : "sandeep",
    "last_name" : "chittigori",
    "email" : "sandeepkumar7032@gmail.com",
     "roll_no." : "50",
     "students" : [ 
	{
	  "name" : "parshu",
	  "marks" : 20
	},
	{
	  "name" : "uday",
	  "marks" : 21
	},
	{
	  "name" : "anu",
	  "marks" : 25
	},
	{
	  "name" : "hari",
	  "marks" : 22
	},
	{
	  "name" : "lucky",
	  "marks" : 28
	},
	{
	  "name" : "deepak",
	  "marks" : 15
	},
	{
	  "name" : "santosh",
	  "marks" : 26
	},
	{
	  "name" : "sandy",
	  "marks" : 32
	},
	{
	  "name" : "suma",
	  "marks" : 31
	}
        ]
}

var ip = prompt("Enter marks.")
var ip = parseInt(ip)
var len = obj.students.length

for(var i = 0 ; i<len ; i++){
     var a = obj.students[i]
     var name = a.name
     var marks = a.marks
     if(ip<=marks){
         console.log("Name  : ",name,"\n")
         console.log("Marks : ",marks,"\n")
     }
}
