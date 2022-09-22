function greetings(greetingHandler, name) {
    greetingHandler(name);
}

// const name = 'halim mama'
// const number = 45
// const numbers = [45, 98, 54]
// const laptop = { brand: 'Hp', price: 30000, model: 'elitebook 840 g3' }

function greetingHandler(name) {
    console.log('Good morning', name);
}

function geetEvining(name) {
    console.log('Good Evining', name)
}

function greetNight(name) {
    console.log('Good Night', name)
}


greetings(greetingHandler, 'simanto');
greetings(greetingHandler, 'tom hanks');
greetings(greetingHandler, 'tom cruse');
greetings(geetEvining, 'tom solaiman');
greetings(greetNight, 'salman');