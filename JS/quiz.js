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

    {question: "Is this working?",

    answers: {
        a: "Yes",
        b: "No"
    }
},
];

const happyQuestions = [
    {question: "?",

    answers: {
        a: "idk",
        b: "Help pls"
    }
},
];

const loveQuestions = [
    {question: "Are you single?",

    answers: {
        a: "I'm a gamer duh",
        b: "E"
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