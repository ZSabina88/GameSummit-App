import { useState} from 'react';
import QEUSTIONS from "../questions.js"
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
    const [result, setResult] = useState({
        status: false,
        scored: ""
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
        } else {
            setResult({ status: true, scored: score + (isCorrect ? 1 : 0) });
        }

    };

    if (result.status) {
        return <NewSummary score={score} />
    }


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
                    // <li key={index} className="answer">
                    <li key={index} className={`answer ${
                        currentQuestion.answer === option
                            ? "correct"
                            : "wrong"
                    }`}>
                        <button onClick={() => handleOptionClick(option)} >
                            {option}
                        </button>
                    </li>
                ))}
            </div>
        </div>

    )
}
export default NewQuiz;