var n = Number(prompt("Enter the digit:"));
var fact = 1;
while (n > 0) {
    fact = fact * n;
    n--;
}
console.log("factorial is=" + fact);
