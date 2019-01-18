const startBtn = document.querySelector("#start-timer");
const resetBtn = document.querySelector("#reset-timer");
boolean running = false;

startBtn.addEventListener('click',startClick,false);
resetBtn.addEventListener('click',endClick,false);

function startClick(){
    timercounter = setInterval(() => {
        var minutes = document.querySelector("#minutestimer span");
        var seconds = document.querySelector("#secondstimer span");

        if (seconds.innerHTML == 0 && minutes.innerHTML == 0) {
            console.log("Finished");
        }
        else if(seconds.innerHTML != 0){
            seconds.innerHTML -= 1;
        }
        else{
            minutes.innerHTML -= 1;
            seconds.innerHTML = 59;
        }

    }, 1000);
    console.log(timercounter);
}

function endClick(){
        seconds.innerHTML = "00";
        minutes.innerHTML = "00";   
        clearInterval(timercounter);
}

