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

// create array with questions
    // questions: 0, 1, 2, 3
    // answers: 0, 1, 2, 3
    // correct  1, 2, 1, 3

    //grab right/wrong/incorrect answers
    
        // display correct answers 
        // display wrong answers
        // display unanswered 