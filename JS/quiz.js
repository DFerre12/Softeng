'use strict';

const happyBtn = document.getElementById('happyQuiz');
const sadBtn = document.getElementById('sadQuiz');
const loveBtn = document.getElementById('loveQuiz');

//Event listeners for buttons
happyBtn.addEventListener('click', function () {
    createQuiz(happyQuestions);
});
sadBtn.addEventListener('click', function () {
    createQuiz(sadQuestions);
});
loveBtn.addEventListener('click', function () {
    createQuiz(loveQuestions);
});

//Arrays for questions
const sadQuestions = [

    {question: "Select the genres you prefer to listen to",

    answers: {
        a: "Pop",
        b: "Hip Hop",
        c: "RnB",
        d: "Jazz",
        e: "Electronic",
        f:  "Rock"
    }
},
    {question :"Would you like to listen to multicultural music?",
    
    answers: {
        a: "Indian",
        b: "Arab",
        c: "Caribbean",
        d: "Oriental",
        e: "Not really my sort of thing"
    }
},

    {question: "Do you prefer listening to music with bass?",

    answers: {
        a: "Yes",
        b: "No"
    }
},

    {question: "Select from the list what artists you like",

    answers: {
        a: "Bruno Mars",
        b: "Pharell Williams",
        c: "XXXTentacion"
    }
},

    {question: "Do certain instruments change the emotion you are feeling?",

    answers: {
        a: "Yes",
        b: "Not really"
    }
},

    {question: "Do you think sad songs help you grow as a person?",
    
    answers: {
        a: "Yes",
        b: "No"
    }
},

    {question: "Do you listen to the lyrics of the song and relate with artists? If so who?",

    answers: {
        a: "Yes",
        b: "No"
    }
},

    {question: "When you are sad do you listen to songs that relate to memory?",

    answers: {
        a: "Yes",
        b: "no"
    }
},

    {question: "When sad, do you ever find yourself listening to a track that you hate and makes you even more upset?",

    answers: {
        a: "Yes",
        b: "No"
    }
},

];

const happyQuestions = [
    
    {question: "Select the genres you prefer to listen to",

    answers: {
        a: "Pop",
        b: "Hip Hop",
        c: "RnB",
        d: "Jazz",
        e: "Electronic",
        f:  "Rock"
    }
},
    {question :"Would you like to listen to multicultural music?",
    
    answers: {
        a: "Indian",
        b: "Arab",
        c: "Caribbean",
        d: "Oriental",
        e: "Not really my sort of thing"
    }
},

    {question: "Do you prefer listening to music with bass?",

    answers: {
        a: "Yes",
        b: "No"
    }
},

    {question: "Select from the list what artists you like",

    answers: {
        a: "Bruno Mars",
        b: "Pharell Williams"
    }
},

    {question: "When do you listen to music the most?",

    answers: {
        a: "When I'm commuting",
        b: "When I'm studying",
        c: "When I'm gaming",
        d: "Other"
    }
},

    {question: "What kind of music do you listen to, to cheer you up?",
    
    answers: {
        a: "?",
        b: "??"
    }
},

    {question: "Do you think music can promote world peace?",

    answers: {
        a: "Yes",
        b: "No"
    }
},

    {question: "Does the volume of a song ever influence your enjoyment?",

    answers: {
        a: "Yes",
        b: "no"
    }
},

    {question: "Name one song that makes you incredibly happy",

    answers: {
        a: "??"
    }
},

];

const loveQuestions = [

    {question: "Select the genres you prefer to listen to",

    answers: {
        a: "Pop",
        b: "Hip Hop",
        c: "RnB",
        d: "Jazz",
        e: "Electronic",
        f:  "Rock"
    }
},
    {question :"Would you like to listen to multicultural music?",
    
    answers: {
        a: "Indian",
        b: "Arab",
        c: "Caribbean",
        d: "Oriental",
        e: "Not really my sort of thing"
    }
},

    {question: "Do you prefer listening to music with bass?",

    answers: {
        a: "?",
        b: "??"
    }
},

    {question: "Select from the list what artists you like",

    answers: {
        a: "Bruno Mars",
        b: "Pharell Williams",
        c: "XXXTentacion"
    }
},

    {question: "What song would you dance to on your wedding day?",

    answers: {
        a: "Yes",
        b: "Not really"
    }
},

    {question: "Do you ever watch a music video and imagine that is you and your partner?",
    
    answers: {
        a: "Yes",
        b: "No"
    }
},

    {question: "Would you say you cry over love songs when there is a happy ending?",

    answers: {
        a: "Yes",
        b: "No"
    }
},

    {question: "What is a song that would make you fall in love?",

    answers: {
        a: "Yes",
        b: "no"
    }
},

    {question: "9)	Do you still listen to love songs if or were to go through a heart break?",

    answers: {
        a: "Yes",
        b: "No"
    }
},

];

//Generates the quiz based on the user's mood
function createQuiz(quiz) {
    var quiz = document.getElementById('quiz');
    //Array for storing the user's answers
    const result = [];

    quiz.appendChild(document.createElement('form'));

}