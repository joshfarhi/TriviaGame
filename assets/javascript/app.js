var seconds_left = 10;
var interval = setInterval(function() {
    document.getElementById('countdown').innerHTML = "Time Left: " +  --seconds_left;

    if (seconds_left <= 0)
    {
        var finalScore = $(".score")
       document.getElementById('questionsArray').innerHTML = finalScore;
       clearInterval(interval);
    }
}, 1000);