export function findById(quizData, id) {
    for (let i = 0; i < quizData.length; i++){
        const quizItem = quizData[i];
        if (id === quizItem.id) {
            return quizItem;
        }
    }
    return null;
}


// write a function that takes the choice and the user object, which modifies the user object correctly

//create a function that takes in the choice and the user and updates the state based on the selection they make
export function updateQuizScores(userChoice, user, quizId) {
    //add carbon footprint points depending on the question asked
    user.cf += userChoice.cf;
    //add number of trees earned to user depending on the question asked
    user.trees += userChoice.trees;
    //mark that user completed quiz
    user.completedQuizzes[quizId] = true;

}