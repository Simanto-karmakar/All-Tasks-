// object with 6 properties: string,boolean,number,array,object,function(method,access any object property and return it).........

const student = {
    name: 'ali',
    isMale: true,
    age: 21,
    study: 'Accounting',
    exam: function () {
        return this.name + ` is attend to the class room and study in ${this.study}`;
    },
    subjects: ['manegment', 'accounting', 'enterpeniurship', 'finance'],
    subMarks: { accounting: '72', finance: '65', enterpeniurship: '75', english: '60' }

}

const result = student.exam();
console.log(result);