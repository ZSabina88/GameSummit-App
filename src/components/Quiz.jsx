import { useState, useCallback } from 'react';
import QEUSTIONS from "../questions.js";
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);


  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === 3;
  // const quizIsComplete = activeQuestionIndex === QEUSTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (quizIsComplete) {
    return  <Summary userAnswers={userAnswers}/>
  };

  return (
    // <div id="quiz">
    <div >
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
