import { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import { Answers } from "./Answers";

export const Question = ({ index, questions, onSelectAnswer, onSkipAnswer }) => {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null
    });

    let timer = 40000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }
    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    const handleSelectAnswer = (selectedAnswer) => {
        setAnswer({
            selectedAnswer,
            isCorrect: null
        });
        setTimeout(() => {
            const correct = questions[index].answers[0] === selectedAnswer;
            setAnswer({
                selectedAnswer,
                isCorrect: correct
            });

            setTimeout(() => {
                onSelectAnswer(selectedAnswer);
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
            <h2>{questions[index].text}</h2>
            {questions[index].img && <img src={questions[index].img} alt="question image" />}

            <Answers
                answers={questions[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}
           