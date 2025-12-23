var num = Number(prompt("enter the digit:"));
var last;
var first;
if (num < 0) {
    num = -num;
}
last = num % 10;
while (num >= 10) {
    num = Math.floor(num / 10);
}
first = num;
console.log("first digit" + first);
console.log("last digit" + last);
if (first == last) {
    console.log("digit is palindrome");
}
else {
    console.log("digit is not palindrome");
}
