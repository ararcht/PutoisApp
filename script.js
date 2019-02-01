$(document).ready(function () {
    var vies=1;
    if(window.location.href.indexOf("questions.html") > -1) {
        timer()
    }
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