$(document).ready(function () {
    var vies = 1;
    var quest = 1;
    var list = null;
    var timer = null;
    if (window.location.href.indexOf("questions.html") > -1) {
        timerquest()
    }

    function timerquest() {
        var sec = 5;
        timer = setInterval(function () {
            document.getElementById('timer').innerHTML = sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer);
                window.location.href = "index.html"
            }
        }, 1000);
    }

    $.ajax({
        url: 'data.json',
        async: false,
        success: function (data) {
            list = data;
            newquest();
        }
    });

    function newquest() {
        $('.question-block h1').empty();
        $('.a-answer').empty();
        $('.b-answer').empty();
        $('.c-answer').empty();
        $('.d-answer').empty();
        if (quest<6)
        {
            $('.question-block h1').append(list["Q" + quest][0].title);
            $('.a-answer').append(list["Q" + quest][0].choices[0]);
            $('.b-answer').append(list["Q" + quest][0].choices[1]);
            $('.c-answer').append(list["Q" + quest][0].choices[2]);
            $('.d-answer').append(list["Q" + quest][0].choices[3]);
        }
        else
        {
            $('.question-block h1').append('Bravo vous avez Gagné');
        }
    }

    $('.answers').click(function () {
        if ($(this).text() == list['Q' + quest][0].correctAnswer) {
            quest = quest + 1;
            newquest();
            clearInterval(timer);
            timerquest();
        } else {
            window.location.href = "index.html"
        }
    })
});
