function vraisOuFaux(i) {

    if (response == responses[i]) {
        const rightAnswer = document.getElementById('right');
        const rQuestion = document.createElement('p');
        rQuestion.textContent = questions[i];
        rightAnswer.appendChild(rQuestion);
        console.log('CORRECT');

        correct++
    } else {
        const wrongAnswer = document.getElementById('wrong');
        const wQuestion = document.createElement('p');
        wQuestion.textContent = questions[i];
        wrongAnswer.appendChild(wQuestion);
        console.log('faux');

        wrong++
    }
}

var correct = 0
var wrong = 0

for (let i = 0; i < questions.length; i++) {

    console.log(questions[i]);
    var response = prompt(questions[i]);
    console.log("La réponse de l'utilisateur est : " + response);

    vraisOuFaux(i);
}

var divElement = document.getElementById("wrong");
var h2Element = divElement.querySelector("h2");
h2Element.textContent += '= ' + wrong;

var divElement = document.getElementById("right");
var h2Element = divElement.querySelector("h2");
h2Element.textContent += '= ' + correct;

console.log(correct + ' bonne reponse')
console.log(wrong + ' mauvaise reponse')