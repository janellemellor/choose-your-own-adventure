//import metadata:
import quizzes from '../data/quizData.js';
import { findById, updateQuizScores } from '../quiz/quiz-utils.js';
import { getUserStatus, saveUserObject } from '../common/utils.js';

//get elements from DOM
const quizForm = document.getElementById('quiz-form');
const quizTitle = document.getElementById('quiz-title');
const quizDescription = document.getElementById('quiz-description');
const quizOptions = document.getElementById('quiz-options');
const result = document.getElementById('result');
const resultDiv = document.getElementById('results-div');

//create searchParams which will go into the URL and find the search parameters. URLSearchParams is built-in.
const searchParams = new URLSearchParams(window.location.search);

//get the quiz id from the URL search params
const quizId = searchParams.get('id');

// Use findById function to find the quiz from the quiz metadata by searching by id
const findQuizById = findById(quizzes, quizId);
debugger;
// if there is no quiz id found, redirect to the quiz map page
if (!findQuizById) {
    window.location = '../quiz-map/';
}

//fill in the title of the found quiz
quizTitle.textContent = findQuizById.title;
//fill in the quiz question of the found quiz
quizDescription.textContent = findQuizById.question;

//loop through the quiz metadata
// for (let i = 0; i < quizzes.length; i++) {
//     //get the quiz choices and for each...
//     const quizChoice = quizzes[i].choices;

findQuizById.choices.forEach(choice => {
  //create a label to wrap each radio button in
    const label = document.createElement('label');
    label.classList.add('choice');

  //create a span within the label
    const span = document.createElement('span');
    
  //add the description of the choice from the metadata to the span
    span.textContent = choice.description;
  //append the span to the newly created label
    label.appendChild(span);

  //create an input element
    const radio = document.createElement('input');
  //assign it to be a radio button
    radio.type = 'radio';
  //assign the name to choice (so all buttons have same name and user can only select one.)
    radio.name = 'choice';
    //insert the values of the choice by id
    radio.value = choice.id;
  //append the radio button to the span
    label.appendChild(radio);

  //append the quiz choices to each quiz question/choice
    quizOptions.appendChild(label);
});
// }


//for the form, add an event listener on 'submit'
quizForm.addEventListener('submit', function(event) {
  //prevent page from auto-refreshing
    event.preventDefault();

  //create a new instance of formdata from the quiz page
    const formData = new FormData(quizForm);
  
  
  //get user choice from form
    const getQuizChoiceFromData = formData.get('choice');
    // debugger;
  //find the user choice from the metadata
    const userChoice = findById(findQuizById.choices, getQuizChoiceFromData);

  //get user info from local storage
    const getUpdatedUser = getUserStatus();

  //update the user's cf and trees scores
    updateQuizScores(userChoice, getUpdatedUser, getQuizChoiceFromData);
   
  // Save the modified user object back to local storage
    saveUserObject(getUpdatedUser);

  //hide the quiz form on submit
    quizForm.classList.add('hidden');
  //show/add the result description
    resultDiv.classList.remove('hidden');
  //insert the result description for the quiz answer the user chose.

  debugger;
    
    result.textContent = userChoice.result;
});
