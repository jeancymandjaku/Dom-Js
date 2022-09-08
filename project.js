// Variables
/*****  Porjetc 1: Generator  **********

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: '"Your time is limited, so dont waste it living someone else s life"',
        person: ' Steve Jobs'
    },
    {
        quote: '"Tell ;e qnd I forgetm Teqch ;e qnd I re;e;ber Involve ;e qnd I learn',
        person: ' Benjamin Franklin'
    },
    {
        quote: '"It does not matter how slowly you go as long as you do not stop"',
        person: ' confucius'
    },
    {
        quote: '"Our lives begin ton end the day we become silent about things that matter"',
        person: ' Martin Luther King, Jr'
    },
    {
        quote: '"Remember that not getting what you want is sometimes a wonderful stroke of luck"',
        person: ' Dalai Lama'
    }    
];

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

/****  Project Modal *******

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// event listeners

openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e) {

    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});
********/

/*******Project 3: Accordion ******
const accordion = document.getElementsByClassName('content-container');

for( i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click',function () {
        this.classList.toggle('active');
    })
};
**************************/
/*Project 4 **********

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for loading zero

let leadingSeconds =0;
let leadingMinutes =0;
let leadingHours =0;

// Variables for set interval & timerstatus

let timerInterval = null;
let timerStatus = "stopped";

// Stop Watch Function

function stopWatch() {
    seconds ++

    if(seconds / 60 === 1) {
        seconds = 0;
        minutes ++;

        if(minutes / 60 === 1) {
            minutes = 0;
            hours++
        }
    }

    if(seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }
    if(minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }
    if(hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

//
startStopBtn.addEventListener('click', function() {
    if(timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch,1000);
        document.getElementById('startStopBtn').innerHTML =`<span class="fa-solid fa-pause id="pause">pause</span>`;
        timerStatus = "started"; 
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<span class="fa-solid fa-play" id="play">play</span>`;
        timerStatus = 'stopped';
    }
})

resetBtn.addEventListener('click',function() {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
});
**********************************************/
/* Project 5 */

const addtask = document.getElementById('add-task');
const tastContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Event Listener for Add Button

addtask.addEventListener('click', function() {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<span class="fa-solid fa-check">check</span>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<span class="fa-solid fa-check">delete</span>`;
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === "") {
        alert('Please Enter a task');
    } else {
        tastContainer.appendChild(task);
    }

    inputTask.value = "";

    checkButton.addEventListener('click', function() {
        checkButton.parentElement.style.textDecoration = "line-through";

    });

    deleteButton.addEventListener('click', function(e) {
        let target = e.target;

        target.parentElement.parentElement.remove();
    })

})