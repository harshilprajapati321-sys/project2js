var n = Number(prompt("enter the number:"));
var flag = 0;
if (n == 0 || n == 1) {
    console.log("consonant");
}
for (var i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
        flag = 1;
        break;
    }
}
if (flag == 0) {
    console.log("this is prime");
}
else {
    console.log("this is not prime");
}
