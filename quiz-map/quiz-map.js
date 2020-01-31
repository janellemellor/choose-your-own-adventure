//check local storage to see what questions have been completed

//if there are no questions left to answer
    //redirect to the results page

//if there are any questions left to answer...
//render a list of REMAINING questions based on the metadata
    //get the ul from the DOM
    //get the questions from the metadata
    //loop through the questions (forEach)
        //get a question from the array
        //make an li for the question
            //create li
            //make an anchor tag for the li UNLESS the quest is already completed (check local storage). If so, make a span. 
            //add textContent and other properties to the li
            //add the href to the a tag with query params for the question
            //append anchor tag to the li
        //append the question li to the ul