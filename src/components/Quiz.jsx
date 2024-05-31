import { useState, useCallback } from "react";
import { Question } from "./Question";
import Summary from "./Summary";
import QEUSTIONS from "../questions.js"


const getRandomQuestions = (questions, numQuestions) => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
};


export const Quiz = () => {
    const randomQuestions = getRandomQuestions(QEUSTIONS, 3);
    const [userAnswers, setUserAnswers] = useState([]);
    const [questions, setQuestions] = useState(randomQuestions);
    

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === questions.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} questions={questions}/>;
    }

    
    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                questions={questions}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}