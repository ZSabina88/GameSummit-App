import {useState, useCallback} from 'react';
import QEUSTIONS from "../questions.js"
import Answers from './Answers.jsx';
import { redirect } from 'react-router-dom';
import NewSummary from './NewSummary.jsx';

function getRandomQuestions(questionsArray, numQuestions) {
    const shuffled = questionsArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
}

const NewQuiz = () => {
    const [selectedQuestions, setSelectedQuestions] = useState(getRandomQuestions(QEUSTIONS, 3));
const [score, setScore] = useState(0);
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [userAnswers, setUserAnswers] = useState({});
const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null
});


const handleOptionClick = (option) => {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const isCorrect = option === currentQuestion.answer;

    setUserAnswers({
        ...userAnswers,
        [currentQuestionIndex]: option,
    });

    if (isCorrect) {
        setScore(score + 1);
    }

    if (currentQuestionIndex < selectedQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if(currentQuestionIndex === selectedQuestions.length - 1){
        // return( <NewSummary score={score + (isCorrect ? 1 : 0)}/>)
        alert(`Quiz complete! Your score is ${score + (isCorrect ? 1 : 0)}.`);
    }

};

const currentQuestion = selectedQuestions[currentQuestionIndex];

let shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

return (
    <div id="quiz">
            <div>
                <h2>Sual {currentQuestionIndex + 1}</h2>
                <p>{currentQuestion.text}</p>
            </div>
            <div id="answers">
                {shuffledAnswers.map((option, index) => (
                    <li key={index} className='answer'>
                    <button onClick={() => handleOptionClick(option)}>
                        {option}
                    </button>
                    </li>
                ))}
            </div>
        </div>

)
}
export default NewQuiz;