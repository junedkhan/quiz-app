import axios from 'axios';

const QuestionsServices = {
    // Service to get the questions
    getQuestions() {
        return axios.get('https://quiz-liftoff.herokuapp.com/questions');
    },
    // Service to check the result
    checkResult(answers) {
        return axios.post('https://quiz-liftoff.herokuapp.com/check', { answers });
    }
};

export default QuestionsServices;
