import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Result.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  const [bestScore, setBestScore] = useState(() => {
    const saved = localStorage.getItem('bestScore');
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    if (score > bestScore) {
      localStorage.setItem('bestScore', score);
      setBestScore(score);
    }
  }, [score, bestScore]);

  const handleRetry = () => {
    navigate('/'); // 홈으로
  };

  return (
    <div className="result-container">
      <div className="result-inner">
        <h2 className="result-title">🎉 Quiz Complete!</h2>
        <p className="result-score">
          You got <strong>{score}</strong> out of <strong>{total}</strong> correct.
        </p>
        <p className="result-percent">
          Your score: <strong>{Math.round((score / total) * 100)}%</strong>
        </p>
        <p className="result-best">
          🏆 Best score: <strong>{bestScore}</strong> / {total}
        </p>
        <button className="retry-button" onClick={handleRetry}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Result;
