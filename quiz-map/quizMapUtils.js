//iterate through quizzes array to see if the user has answered all the questions
export function checkIfUserCompletedAllQuizzes(quiz) {
    quiz.forEach(quiz, user => {
        //if the quizzes are all completed return true (*check this syntax)
        if (user.completedQuizzes[quiz.id]) {
            return true;   
            //otherwise, return false
        } else {
            return false;
        }
    });    
}


//make an anchor tag for the li 
export function createAnchorTagIfQuizIsNotCompleted(quiz) {
    //make an li for the question
    // //create li
    const li = document.createElement('li');
    //create an anchor tag
    const aTag = document.createElement('a');
    //add the class 'quiz' to the anchor tag
    aTag.classList.add('quiz');

    //with an href to the quiz map
    aTag.href = './quiz-map/?' + quiz.id;  

    //add the title of the quiz to the anchor tag
    aTag.textContent = quiz.title;
    //append the anchor tag to the li
    const quizLink = li.appendChild.aTag;

    return quizLink;
     //add the href to the a tag with query params for the question
    // Use href like quest/id=dragon to "pass" the selected id to the quest page
}

//make an span tag for the li 
export function createSpanIfQuizIsCompleted(quiz) {
    //make an li for the question
    // //create li
    const li = document.createElement('li');
    //create a span tag
    const span = document.createElement('span');
    //add class 'quiz' to span
    span.classList.add('quiz');
    //add class 'completed' to span  
    span.classList.add('completed');
    //add the title of the quiz to the anchor tag
    span.textContent = quiz.title;
    //append the span to the li
    const quizSpan = li.appendChild.span;

    return quizSpan;
}