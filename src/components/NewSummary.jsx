import React from 'react';
import { Link } from 'react-router-dom';

const NewSummary = ({score}) => {
  return (
    <div id='summary'>
      <h2>{score} sualı doğru cavablandırdın.</h2>
      <button>
        <Link to="/">Yenidən başlat</Link>
      </button>
    </div>
  );
}

export default NewSummary;
