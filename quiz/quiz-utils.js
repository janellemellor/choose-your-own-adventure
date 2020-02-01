export function findById(quizData, id) {
    for (let i = 0; i < quizData.length; i++){
        const quizItem = quizData[i];
        if (id === quizItem.id) {
            return quizItem;
        }
    }
    return null;
}