console.log('added');
// alert('ki khobor bondhu');

const showAlert = () => {

    const num = Math.random() * 10
    console.log(num)
    if (num < 5) {
        alert('number is under the 5');
    }

}

const askSomthing = () => {
    const decission = confirm('aitasos naki');
    console.log(decission);
    if (decission === true) {
        alert('Bondhu 500 tka niya ahis')
    }
    else {
        console.log('dhurr hala lagbo na tore');
    }
}

const getuserinfo = () => {
    const name = prompt('Tell me your name')
    console.log(name);
    if (!!name) {
        console.log('welcome here', name)
    }
}