import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from "react-loader";
import QuestionsList from './components/QuestionsList/QuestionsList';
import ActionHeader from './components/ActionHeader/ActionHeader';
import QuestionsReducer from './reducers/QuestionsReducers';
import BarChartSection from './components/BarChartSection/BarChartSection';
import { getErrors } from './utils/ErrorUtils';
import { processChartData } from './utils/ChartUtils';
import './App.css';

function App() {
  const [answerData, setAnswerData] = useState({}); //contains answers
  const [errors, setErrors] = useState({}); //contains errors
  const questions = useSelector(state => state.questions.questions); //gives questions from the store
  const result = useSelector(state => state.questions.result); //gives result of anwers from the store
  const loading = useSelector(state => state.questions.loading); //gives loading value
  const [disabledQuestions, setDisabledQuestions] = useState(false);
  const [chartData, setChartData] = useState([]);
  const dispatch = useDispatch();

  //this trigger when we select the answer
  const onSelectAnswer = useCallback(({ target: { value, name } }) => {
    setAnswerData(prevAnswers => ({
      ...prevAnswers,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: false
    }));
  },[])

  const onSubmit = useCallback(() => {
    const { errors: updatedErrors, hasError } = getErrors(questions, answerData);
    if (hasError) {
      setErrors(updatedErrors);
      return;
    }
    dispatch(QuestionsReducer.actions.getResult(answerData));
  }, [dispatch, answerData, questions])

  //It will clear all the states
  const onClear = useCallback(() => {
    setErrors({});
    setAnswerData({});
    setChartData([])
    setDisabledQuestions(false);
  }, [setErrors, setAnswerData, setChartData, setDisabledQuestions])

  useEffect(() => {
    //It will fetch the questions api
    dispatch(QuestionsReducer.actions.getQuestions());
  }, [dispatch]);

  // when we get the result, calculate for graph and set errors if any
  useEffect(() => {
    if (result.errors) {
      setErrors(result.errors);
      setDisabledQuestions(true);
    }
    // processing the chart data, then setting it to the state
    setChartData(processChartData(result));
  }, [result]);

  return (
    <div className="App">
        <QuestionsList
          questions={questions}
          onQuestionChange={onSelectAnswer}
          answerData={answerData}
          errors={errors}
          disabledQuestions={disabledQuestions}
        />
        <BarChartSection chartData={chartData} />
        <ActionHeader onSubmit={onSubmit} onClear={onClear} />
        <Loader loaded={!loading} className="loader"/>
    </div>
  );
}

export default App;
