let choice = document.querySelector('input');

choice = choice.toLowerCase();

let choiceInt;
if(choice == 'rock')
    choiceInt=1;
else if(choice == 'paper')
    choiceInt=2;
else if(choice == 'scissors')
    choiceInt=3;

function compInput(){
    return Math.floor(Math.random() * (4-1)+1);
}

