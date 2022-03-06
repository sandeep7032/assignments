function reverse_String(s) {
    s = s + "";
    rev_str = s.split("").reverse().join("");
    return rev_str;
}
function input(string) {
    var rev_string = reverse_String(string);

    if (rev_string == string) {
        return 1;
    } else {
        return 0;
    }
}
var str = prompt("Enter a string")
if (input(str) == 1) {
    document.write("" + str + " is a palindrome")
}
else if (input(str) == 0) {
    document.write("" + str + " is not a  palindrome")
}
