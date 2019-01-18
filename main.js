const startBtn = document.querySelector("#start-timer");
const resetBtn = document.querySelector("#reset-timer");
const inputminutes = document.querySelector("#minutestimer input");
const inputseconds = document.querySelector("#secondstimer input");
const secProgress = document.querySelector("#second-progress");
const minProgress = document.querySelector("#minute-progress");
var running = false;
var seconds;
var startseconds;
var timeElapsed = 0;

startBtn.addEventListener('click',startClick,false);
resetBtn.addEventListener('click',endClick,false);
inputseconds.addEventListener('keyup',function(e){
    e.preventDefault();
    if (e.keyCode === 13){
        startClick();
    }
},false);

function startClick(){
    //Insert value of seconds into variable for future math purposes and check that no other instance is running.
    seconds = Number(inputminutes.value)*60 + Number(inputseconds.value);
    startseconds = seconds;
    if (!running && seconds > 0){
        running = true;
        countDown(seconds);
        startBtn.style.backgroundColor = "#C32026";
        startBtn.style.border = "none";
        startBtn.style.color = "#FFF";
         }
    
}

function countDown(seconds){

        timeElapsed = setInterval(() => {
            seconds--;
            setHTML(seconds);

            //Flicker for less than one minute
            if (seconds < 60){
                if (seconds % 2 == 0){
                    inputseconds.style.color = "white";
                }
                else {
                    inputseconds.style.color = "black";
                }
            }

            //When finished reset and play sound
            if (seconds == 0){
                endClick();
                var a = new Audio('sound.mp3');
                a.play();
                setTimeout( function() {
                }, 5000);
            }
        }, 1000);
}

function endClick(){
        seconds = 0;  
        clearInterval(timeElapsed);
        running = false;
        inputminutes.value="";
        inputseconds.value="";
        minProgress.style.height = "0%";
        secProgress.style.height = "0%";
        startBtn.style.backgroundColor = "#FFF";
        startBtn.style.border = "5px solid #C32026";
        startBtn.style.color = "#000";
}

function setHTML(seconds){
        inputminutes.value = Math.floor(seconds/60);
        inputseconds.value = seconds - Math.floor(seconds/60)*60;

        console.log((seconds / startseconds * 100));
        console.log(inputseconds.value / 60 * 100);

        minProgress.style.height = (seconds / startseconds * 100) + "%";
        secProgress.style.height = (inputseconds.value / 60 * 100) + "%";
}

