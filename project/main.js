"use strict";


// ---------------- Variables -------------------

const sec = document.getElementById('sec');
const min = document.getElementById('min');
const date = document.getElementById('date');
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const stopBtn = document.getElementById('stop-btn');

let btn_select_1 = document.querySelectorAll('.btn-select-1');
const TIMES = [25, 5, 15];
let m = 25;
let s = 0;
let timer;
let temp = "25";




// ---------------- Event Functions -------------------

startBtn.addEventListener('click', () => {
    startBtn.classList.add('hide');
    pauseBtn.classList.remove('hide');
    start();
});

pauseBtn.addEventListener('click', () => {
    clearInterval(timer);
    startBtn.classList.remove('hide');
    pauseBtn.classList.add('hide');
})

stopBtn.addEventListener('click', () => {
    startBtn.classList.remove('hide');
    pauseBtn.classList.add('hide');
    clearInterval(timer);
    min.innerText = temp;
    m = temp;
    sec.innerText = "00";
    sec = 0;
})



// ---------------- Logic Functions -------------------

function timeToString(n) {
    return n < 10 ? "0" + n : n;
}

btn_select_1.forEach((item, idx) => {
    item.addEventListener('click', () => {

        if (!item.classList.contains('active')) {
            btn_select_1.forEach((item2) => {
                item2.classList.remove('active');
            })
            item.classList.add('active')
            clearInterval(timer)
            s = 0;
            m = TIMES[idx];
            min.innerHTML = TIMES[idx];
            temp = TIMES[idx];
            sec.innerHTML = timeToString(s);
            startBtn.classList.remove('hide');
            pauseBtn.classList.add('hide');
        }
    })
});

function start() {
    timer = setInterval(() => {

        if (s == 0) {
            m--;
            s = 60;
        }
        s--;
        min.innerHTML = m;
        sec.innerHTML = timeToString(s);
        if (m == 0 && s == 0) {
            clearInterval(timer);
        }
    }, 10);
}


