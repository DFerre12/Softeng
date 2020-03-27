

const finishBtn = document.getElementById('finishQuiz');

let lovecount = 0;
let happyCount = 0;
let sadcount = 0;

finishBtn.addEventListener('click', function () {
    submitQuiz();
});

function submitQuiz() {
    checkLove();
    checkHappy();
    checkSad();
    getResults();
}

function checkLove(){
    var question1 = document.quizLove.question1.value;
    var question2 = document.quizLove.question2.value;
    var question3 = document.quizLove.question3.value;
    var question4 = document.quizLove.question4.value;
    var question5 = document.quizLove.question5.value;
    var question6 = document.quizLove.question6.value;
    var question7 = document.quizLove.question7.value;
    
    if(question1 === "yes"){
        lovecount++;
    }

    if(question2 === "yes"){
        lovecount++;
    }

    if(question3 === "yes"){
        lovecount++;
    }

    if(question4 === "yes"){
        lovecount++;
    }

    if(question5 === "good"){
        lovecount++;
    }
    
    if(question6 === "yes"){
        lovecount++;
    }

    if(question7 === "yes"){
        lovecount++;
    }

    alert(lovecount);
}

function checkHappy(){
    var question1 = document.quizHappy.question1.value;
    var question2 = document.quizHappy.question2.value;
    var question3 = document.quizHappy.question3.value;
    var question4 = document.quizHappy.question4.value;
    var question5 = document.quizHappy.question5.value;
    var question6 = document.quizHappy.question6.value;
    var question7 = document.quizHappy.question7.value;
    
    if(question1 === "yes"){
        happyCount++;
    }

    if(question2 === "yes"){
        happyCount++;
    }

    if(question3 === "yes"){
        happyCount++;
    }

    if(question4 === "yes"){
        happyCount++;
    }

    if(question5 === "good"){
        happyCount++;
    }
    
    if(question6 === "yes"){
        happyCount++;
    }

    if(question7 === "yes"){
        happyCount++;
    }

    alert(happyCount);
}

function checkSad(){
    var question1 = document.quizSad.question1.value;
    var question2 = document.quizSad.question2.value;
    var question3 = document.quizSad.question3.value;
    var question4 = document.quizSad.question4.value;
    var question5 = document.quizSad.question5.value;
    var question6 = document.quizSad.question6.value;
    var question7 = document.quizSad.question7.value;
    
    if(question1 === "yes"){
        sadcount++;
    }

    if(question2 === "yes"){
        sadcount++;
    }

    if(question3 === "yes"){
        sadcount++;
    }

    if(question4 === "yes"){
        sadcount++;
    }

    if(question5 === "good"){
        sadcount++;
    }
    
    if(question6 === "yes"){
        sadcount++;
    }

    if(question7 === "yes"){
        sadcount++;
    }

    alert(sadcount);
}



function getResults() {
    if(lovecount > happyCount && sadcount){
        alert('Love');
    } else if(happyCount > lovecount && sadcount){
        alert('Happy');
    } else if(sadcount > lovecount && happyCount){
        alert('Big sad');
    } else {
        alert('Have all of them');
    }
}