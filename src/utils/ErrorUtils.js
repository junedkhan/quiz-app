//This method process the questions and answers and return the error object
export const getErrors = (questions, answers) => {
    const errors = {};
    let hasError = false;
    questions.forEach(quest => {
        if (answers[quest.id]) {
            errors[quest.id] = false;
        } else {
            errors[quest.id] = true;
            hasError = true;
        }
    });
    return {
        errors,
        hasError
    };
}
