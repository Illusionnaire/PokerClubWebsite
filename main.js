const startBtn = document.querySelector("#start-timer");
const resetBtn = document.querySelector("#reset-timer");
const inputminutes = document.querySelector("#minutestimer span");
const inputseconds = document.querySelector("#secondstimer span");
var running = false;
var seconds;
var timeElapsed = 0;

startBtn.addEventListener('click',startClick,false);
resetBtn.addEventListener('click',endClick,false);

function startClick(){
    seconds = Number(inputminutes.innerHTML)*60 + Number(inputseconds.innerHTML);
    if (!running && seconds > 0){
        countDown(seconds);
        startBtn.style.backgroundColor = "#C32026";
        startBtn.style.border = "none";
        startBtn.style.color = "#FFF";
         }
    running = true;
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
        setHTML(seconds);
        startBtn.style.backgroundColor = "#FFF";
        startBtn.style.border = "5px solid #C32026";
        startBtn.style.color = "#000";
}

function setHTML(seconds){
        inputminutes.innerHTML = Math.floor(seconds/60);
        inputseconds.innerHTML = seconds - Math.floor(seconds/60)*60;
}

