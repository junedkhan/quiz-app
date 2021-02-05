import QuestionsServices from '../services/QuestionsServices';

const types = {
    REQUEST_QUESTIONS: 'REQUEST_QUESTIONS',
    GET_QUESTIONS_SUCCESS: 'GET_QUESTIONS_SUCCESS',
    GET_QUESTIONS_FAILED: 'GET_QUESTIONS_FAILED',
    REQUEST_RESULT: 'REQUEST_RESULT',
    GET_RESULT_SUCCESS: 'GET_RESULT_SUCCESS',
    GET_RESULT_FAILED: 'GET_RESULT_FAILED',
};

const initialState = {
    questions: [],
    loading: false, // this is to show the loader when fetching the data
    result: {},
    error: '',
};

const questionsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.REQUEST_QUESTIONS:
            return {
                ...state,
                loading: true
            };
        case types.GET_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.questions,
                loading: false
            };
        case types.REQUEST_RESULT:
            return {
                ...state,
                loading: true
            };
        case types.GET_RESULT_SUCCESS:
            return {
                ...state,
                result: action.result,
                loading: false
            };
        case types.GET_QUESTIONS_FAILED:
        case types.GET_RESULT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

// Actions
const questionsRequest = () => ({ type: types.REQUEST_QUESTIONS });
const questionsRequestSuccess = (questions) => ({ type: types.GET_QUESTIONS_SUCCESS, questions });
const questionsRequestFailed = (error) => ({ type: types.GET_QUESTIONS_FAILED,  error });


// Action Creator
const getQuestions = () => {
    return dispatch => {
        dispatch(questionsRequest());
        return QuestionsServices.getQuestions()
        .then(result => {
            dispatch(questionsRequestSuccess(result.data));
            return result.data;
        })
        .catch(error => {
            dispatch(questionsRequestFailed(error));
            return error;
        });
    }
}

// Actions
const resultRequest = () => ({ type: types.REQUEST_RESULT });
const resultRequestSuccess = (result) => ({ type: types.GET_RESULT_SUCCESS, result });
const resultRequestFailed = (error) => ({ type: types.GET_RESULT_FAILED,  error });

const getResult = (answers) => {
    return dispatch => {
        dispatch(resultRequest());
        return QuestionsServices.checkResult(answers)
        .then(result => {
            dispatch(resultRequestSuccess(result.data));
            return result.data;
        })
        .then(error => {
            dispatch(resultRequestFailed(error));
        });
    }
}

const QuestionsReducer = {
    questionsReducer,
    actions: { 
        getQuestions,
        getResult,
    }
};
export default QuestionsReducer;