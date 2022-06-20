let choice;
let choiceInt; 

function setInput() {
    choice = document.getElementById('choice').value;

    choice = choice.toLowerCase();
    if (choice == 'rock')
        choiceInt = 1;
    else if (choice == 'paper')
        choiceInt = 2;
    else if (choice == 'scissors')
        choiceInt = 3;
}

function compInput() {
    let compInt = Math.floor(Math.random() * (4 - 1) + 1);
    console.log("cmputer choice- " + compInt);
    console.log(choiceInt);
    return compInt;
}

function result(userChoice, compChoice) {
    if (userChoice == compChoice) { return "draw"; }
    else if (userChoice == 1) {
        if (compChoice == 2)
            return "User loses! paper beats rock";
        else
            return "User wins! rock beats scissors";
    }
    else if (userChoice == 2) {
        if (compChoice == 3)
            return "User loses! scissors beats paper";
        else
            return "User wins! paper beats rock";
    }
    else if (userChoice == 3) {
        if (compChoice == 1)
            return "User loses! rock beats scissors";
        else
            return "User wins! scissors beats paper";
    }
}

let submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', () => {
    setInput();
    console.log(result(choiceInt, compInput()));
})