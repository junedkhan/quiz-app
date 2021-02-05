import React from 'react';
import './Question.css'

const Question = ({ question: { label, options, id }, onQuestionChange, answer, error }) => {
    const answerOptions = options.length > 0 ? options : [];
    return (
        <div className="question-container">
            <div className={`question-label ${error ? 'error-class' : ''}`}>{label}</div>
            {answerOptions.map(
                option =>
                    <span key={`${id}-${option}`} className={error ? 'error-class' : ''}>
                        <input
                            type="radio"
                            onChange={onQuestionChange}
                            checked={answer === option}
                            value={option} name={id} />
                        {option}
                    </span>
            )}
        </div>
    );
}

export default Question;
