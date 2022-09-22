// exam result
// 0-32 = f
// 33-39 = d
// 40-49 = c
// 50-59 = b
// 60-69 = a-
// 70-79 = a
// 80-94 =a+
// 95-100 = golden a+

var result = 89;

if (result < 33 && result > 0) {
    console.log("tumi fail marso");
} else if (result >= 33 && result <= 39) {
    console.log("tumi D paiso");
} else if (result >= 40 && result <= 49) {
    console.log("tumi C paiso");
} else if (result >= 50 && result <= 59) {
    console.log("tumi B paiso");
} else if (result >= 60 && result <= 69) {
    console.log("tumi A- paiso");
} else if (result >= 70 && result <= 79) {
    console.log("tumi A paiso");
} else if (result >= 80 && result <= 94) {
    console.log("hurre tumi A+ paiso");
} else if (result >= 95 && result < 100) {
    console.log("golden A+ paiso dekha jai");
} 