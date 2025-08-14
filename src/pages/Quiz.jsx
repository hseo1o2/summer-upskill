import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quiz.css';
import quizData from '../data/quizData';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const { question, options, answer } = quizData[currentQuestion];

  const handleOptionClick = (selected) => {
    if (selectedOption !== null) return;

    setSelectedOption(selected);

    const isCorrect = selected === answer;
    const updatedScore = isCorrect ? score + 1 : score;

    setTimeout(() => {
      const next = currentQuestion + 1;

      if (next < quizData.length) {
        setCurrentQuestion(next);
        setScore(updatedScore);
        setSelectedOption(null);
      } else {
        navigate('/result', {
          state: {
            score: updatedScore,
            total: quizData.length,
          },
        });
      }
    }, 600);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-inner" key={currentQuestion}>
        <div className="quiz-header">
          <h2 className="quiz-progress">
            Question {currentQuestion + 1} / {quizData.length}
          </h2>
          <p className="quiz-question">{question}</p>
        </div>

        <div className="quiz-options">
          {options.map((opt, index) => {
            let optionClass = 'quiz-option';

            if (selectedOption !== null) {
              const isSelected = opt === selectedOption;
              const isCorrect = opt === answer;

              if (isSelected && isCorrect) {
                optionClass += ' correct';
              } else if (isSelected && !isCorrect) {
                optionClass += ' wrong';
              } else if (isCorrect) {
                optionClass += ' correct disabled';
              } else {
                optionClass += ' disabled';
              }
            }

            return (
              <button
                key={index}
                className={optionClass}
                onClick={() => handleOptionClick(opt)}
                disabled={selectedOption !== null}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
