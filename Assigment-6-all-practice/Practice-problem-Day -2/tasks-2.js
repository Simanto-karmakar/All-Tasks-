// template string:access the value from the object above
/* 
**--->array 3 element
---->property of the object
*/

const student = {
    name: 'Ali',
    isMale: true,
    age: 21,
    study: 'accounting',
    // exam: function () {
    //     return
    // },
    subject: ['manegment', 'accounting', 'finance', 'marketing'],
    subMarks: { manegment: '56', accounting: '70', finance: '64', marketing: '65' }
}

// array third element 
const result = student.subject[2];
console.log(result);

// property of the object
const output = student.subMarks.accounting
const output2 = student.subMarks.finance
console.log(output, output2);