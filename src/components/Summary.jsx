import React from 'react';
import { Link } from 'react-router-dom';
import quizCompleteImg from "../assets/quiz-complete.png"

const Summary = ({ userAnswers, questions }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].answers[0]);

  const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);
  const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id='summary'>
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz completed!</h2>
      <div id='summary-stats'>
        <p>
          <span className='number'>{skippedAnswersShare}%</span>
          <span className='text'>skipped</span>
        </p>
        <p>
          <span className='number'>{correctAnswersShare}%</span>
          <span className='text'>answered correctly</span>
        </p>
        <p>
          <span className='number'>{wrongAnswersShare}%</span>
          <span className='text'>answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === questions[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className='question'>{questions[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
        <button>
          <Link to="/">Yenidən başlat</Link>
        </button>
      </ol>

    </div>
  );
}

export default Summary;
