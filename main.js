let elForm = document.querySelector('.js-form');
let elInput = document.querySelector('.js-input');
let elAnswer = document.querySelector('.answer');

// random num generator
function getRandomNum(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

let randomNum = getRandomNum(1, 1024);

//user number
let counter = 0;

function getNumber(e) {
    e.preventDefault();

    counter += 1;

    let userNum = Number(elInput.value);
    elInput.value = null;

    if (userNum === randomNum) {
        elAnswer.innerHTML = `Answer: You are winner🎉, You found the answer in ${counter} attempts.`;
        elAnswer.style.color = 'green';
    }
    if (userNum < randomNum) {
        elAnswer.innerHTML = `Answer: ${userNum} is less than my number`;
        elAnswer.style.color = 'red';
    }
    if (userNum > randomNum) {
        elAnswer.innerHTML = `Answer: ${userNum} is greater than my number`;
        elAnswer.style.color = 'red';
    }
    if (counter > 10) {
        alert(`You couldn't find the answer in 10 attempts. Do you want to play again?`);
        elAnswer.innerHTML = null;
        counter = 0;
    }
}


elForm.addEventListener('submit', getNumber);
// elForm.addEventListener('submit', count);
////////////
