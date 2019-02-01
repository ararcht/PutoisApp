$(document).ready(function () {
    function timer() {
        var sec = 5;
        var timer = setInterval(function(){
            document.getElementById('timer').innerHTML=sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer);
                window.location.href="index.html"
            }
        }, 1000);
    }
});