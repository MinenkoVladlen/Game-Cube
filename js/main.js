const btnStart = document.querySelector('.btn_start'),
    btnNewGame = document.querySelector('.btn_new_game'),
    timerMin = document.querySelector('.timer_min'),
    timerSec = document.querySelector('.timer_sec'),
    score = document.querySelector('.score'),
    field = document.querySelector('.field'),
    fieldCube = document.querySelector('.field_cube'),
    modalClose = document.querySelector('.modal_close'),
    modalWrap = document.querySelector('.modal_wrap'),
    resultUser = document.querySelector('.result_user'),
    userName = document.querySelector('.user_name'),
    modalSaveBtn = document.querySelector('.modal_save_btn'),
    resultItemWrap = document.querySelector('.result_item_wrap'),
    invalidFeedback = document.querySelector('.invalid-feedback');

let scoreAmount = 0;

function positionCube(e) {
    const target = e.target;
    if (target.closest('.field_cube') && !field.hasAttribute('data-status')) {
        target.closest('.field_cube').remove();
        const amountFeild = Math.random() * (2 - 0);
        scoreAmount++;
        score.innerHTML = scoreAmount;
        for (i = 0; i < amountFeild; i++) {

            const top = Math.floor(Math.random() * (450 - 0));
            const left = Math.floor(Math.random() * ((field.offsetWidth - 50) - 0));

            const fieldItem = `<div class="field_cube" style="margin-top: ${top + 'px'}; margin-left: ${left + 'px'}"></div>`;
            field.insertAdjacentHTML("beforeEnd", fieldItem);
        }
    } else if (target.classList.contains('btn_start')) {
        const top = Math.floor(Math.random() * (450 - 0));
        const left = Math.random() * ((field.offsetWidth - 50) - 0);
        fieldCube.style.marginLeft = left + 'px';
        fieldCube.style.marginTop = top + 'px';
    }
}

function getResult() {
    modalWrap.style.display = 'block';
    resultUser.innerHTML = score.innerHTML;
};

function closeModal() {
    modalWrap.style.display = 'none';
    btnStart.style.display = 'none';
}

let startTimerClear;

function checkTimer(event) {
    let target = event.target;

    if(target.innerHTML == 'Start') {
        startTimer()
        btnStart.innerHTML = 'Pause';
        field.removeAttribute('data-status');
    } else {
        stopTimer()
        btnStart.innerHTML = 'Start';
        field.setAttribute('data-status', 'disabled');
    }
}

let getArrResult = JSON.parse(localStorage.getItem('name_user')) || [];

function setResult() {
    invalidFeedback.style.display = 'none';
    if (userName.value.trim().length > 2 && userName.value.trim().length < 12) {
        let ArrResultUser = {
            value: userName.value.trim(),
            score: scoreAmount
        }
        getArrResult.push(ArrResultUser);
        localStorage.setItem('name_user', JSON.stringify(getArrResult));
        renderResults();
        closeModal();
        field.setAttribute('data-status', 'disabled');
        invalidFeedback.style.display = 'none';
    } else {
        invalidFeedback.style.display = 'block';
    }
}


function renderResults() {

    resultItemWrap.innerHTML = '';

    getArrResult.sort( (a, b) => {return  b.score - a.score});

    getArrResult.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result_item');
        resultItem.innerHTML = `
            <span class="result_user_name">${item.value} : </span>
            <span class="result_user_score">${item.score}</span>
        `;
        resultItemWrap.append(resultItem);
    });
}

function startTimer() {
    startTimerClear = setInterval(timer, 1000);
}

function stopTimer() {
    clearInterval(startTimerClear)
}


function timer() {

    let min = parseInt(timerMin.innerHTML);
    let sec = parseInt(timerSec.innerHTML);

    if(sec == 0 && min == 0) {
        stopTimer();
        getResult();
    } else if (sec == 0) {
        timerSec.innerHTML = 59;
        min--;
        if(min < 10) {
            timerMin.innerHTML = '0' + min;
        }
    } else {
        sec--;
        if(sec < 10) {
            timerSec.innerHTML = '0' + sec;
        } else {
            timerSec.innerHTML = sec;
        }
        if(min < 10) {
            timerMin.innerHTML = '0' + min;
        }
    }

};

btnStart.addEventListener('click', positionCube);
btnStart.addEventListener('click', checkTimer);
field.addEventListener('click', positionCube);
modalClose.addEventListener('click', closeModal);
btnNewGame.addEventListener('click', () => {
    window.location.reload();
});
modalSaveBtn.addEventListener('click', setResult);
document.addEventListener('DOMContentLoaded', renderResults);

