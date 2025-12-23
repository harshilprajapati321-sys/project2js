let num: number = Number(prompt("Enter the number:"));
let sum: number = 0;
let rem: number;
let p: number = num;

while (num > 0) {
    rem = num % 10;
    sum = sum + rem * rem * rem;
    num = Math.floor(num / 10);
}

if (p === sum) {
    console.log("Armstrong number");
} else {
    console.log("Not an Armstrong number");
}