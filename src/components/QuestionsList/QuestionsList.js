import React from 'react';
import Question from '../Question/Question';
import './QuestionsList.css';

const QuestionsList = ({ questions, onQuestionChange, answerData, errors, disabledQuestions }) => {
    return (
        <div className={`questions-list-container ${disabledQuestions ? 'disabled-questions' : ''}`}>
            <h1>Questions</h1>
            {questions.length ?
                questions.map(
                    ques => <Question
                        key={ques.id}
                        question={ques}
                        answer={answerData[ques.id]}
                        onQuestionChange={onQuestionChange}
                        error={errors[ques.id]}
                    />)
                : null}
        </div>
    )
}

export default QuestionsList;
