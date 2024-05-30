import { useEffect, useState } from 'react';
import Answers from './Answers';
import QuestionTimer from './QuestionTimer';
import QEUSTIONS from "../questions.js"

export default function Question({
    // index,
    onSelectAnswer,
    onSkipAnswer }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null
    });

    // const [shuffledQuestions, setShuffledQuestions] = useState();

    let timer = 50000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }
    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    // useEffect(()=>{
    //     setShuffledQuestions(QEUSTIONS.sort(() => 0.5 - Math.random()).slice(0, 3))
    // }, [])
    
    const shuffledQuestions = QEUSTIONS.sort(() => 0.5 - Math.random()).slice(0, 3);
    console.log(shuffledQuestions);

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        });
        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: shuffledQuestions[index].answers[0] === answer
                // isCorrect: QEUSTIONS[index].answers[0] === answer
            });

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    };

    let answerState = "";
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? "correct" : "wrong";
    } else if (answer.selectedAnswer) {
        answerState = "answered";
    }

    return (
        <div id='question'>
            <QuestionTimer
                key={timer}
                timeout={timer}
                onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
                mode={answerState}
            />
            <h2>{shuffledQuestions[index].text}</h2>
            {/* <h2>{QEUSTIONS[index].text}</h2> */}
            <Answers
                answers={shuffledQuestions[index].answers}
                // answers={QEUSTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}
