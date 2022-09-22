// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// fibbo sadharonoto ager duita man er jogfol k bujai

// fibo[3] = fibo[2] + fibo[1]
// fibo[4] = fibo[3] + fibo[2]
// fibo[5] = fibo[4] + fibo[3]
// fibo[8] = fibo[7] + fibo[6]
// fibo[10] = fibo[9] + fibo[8]
// fibo[144] = fibo[143] + fibo[142]
// fibo[253] = fibo[252] + fibo[251]
// fibo[549] = fibo[548] + fibo[547]
// fibo[696] = fibo[695] + fibo[694]
// fibo[n] = fibo[n-1] + fibo[n-2]
// fibo[i] = fibo[i-1] + fibo[i-2] 

const fibo = [0, 1];
for (let i = 2; i <= 25; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
