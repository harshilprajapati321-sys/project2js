var num = Number(prompt("Enter the number:"));
var sum = 0;
var rem;
var p = num;
while (num > 0) {
    rem = num % 10;
    sum = sum + rem * rem * rem;
    num = Math.floor(num / 10);
}
if (p === sum) {
    console.log("Armstrong number");
}
else {
    console.log("Not an Armstrong number");
}
