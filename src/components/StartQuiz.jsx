import React from 'react';
import { Link } from 'react-router-dom';

const StartQuiz = () => {
    return (
        <div id='home'>
            <h2>Game Summit sorğusunda iştirak et</h2>
            <button>
                <Link to="/quiz">
                    Sorğunu başlat
                </Link>
            </button>
        </div>
    );
}

export default StartQuiz;
