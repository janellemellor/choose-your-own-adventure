

//get the data for the correct question using the query parameter and findById
    //put the question description in #question(div id) hard code div is ok
    //for each option/choice, render a radio button
        //make a label
        //make a span
        //add the choice.description
        //make an input of:
            // type: radio
            //name: question
    //for the form, add an event listener on 'submit'
        //in the event listener get the formData
        //use the user selection in the form fdata to update the dom and change state
        //call the question completed in state, and redirect to list/map page

      
     

        // Read the query parameter using UrlSearchParams built-in browser class
        // Use your findById function to find the metadata item with that id
        // redirect back to list page if id not found
        // Update the dom:
        // Static one-time things like title, image, etc.
        // Loop through choices and create form input controls (like radio buttons) for each choice

//import metadata:
import quizzes from '../data/quizData.js';    

//get form from DOM
const quizForm = document.getElementById('quiz-form');


  //create a label for each choice with span and input inside --
