/**
 * Created by Vemund on 14.10.2015.
 */
function resetTime(){
    timePassed = 0;
    if(on){
        window.clearInterval(updateTimeId);
        on = false;
    }
    document.getElementById('display-area').innerHTML = '00:00:00.000';
}

function updateTime(){
    var time = timePassed + Date.now() - timeStarted;
    var milliseconds = ('000' + (time%1000).toString()).slice(-3);
    var seconds = ('00' + (Math.floor(time/1000)%60).toString()).slice(-2);
    var minutes = ('00' + (Math.floor(time/60000)%60).toString()).slice(-2);
    var hours = ('00' + (Math.floor(time/3600000)%24).toString()).slice(-2);
    document.getElementById('display-area').innerHTML = hours + ':' + minutes + ':' + seconds + '.' + milliseconds
}
var timeStarted = 0;
var timePassed = 0;
var on = false;
var updateTimeId = 0;
function toggleWatch(){
    if(on){
        window.clearInterval(updateTimeId);
        timePassed = timePassed + Date.now() - timeStarted;
        on = false;
    }
    else{
        timeStarted = Date.now();
        updateTimeId = window.setInterval(updateTime, 1);
        on = true;
    }
}

function setListeners(){
    document.getElementById("reset-button").addEventListener('click', resetTime);
    document.getElementById("toggle-button").addEventListener('click', toggleWatch);
}
window.addEventListener('load', setListeners);


