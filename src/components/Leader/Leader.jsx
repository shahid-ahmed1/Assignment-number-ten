import React, { useEffect, useState } from 'react';
import { FaMedal, FaTrophy } from 'react-icons/fa';

const Leader = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const quizData = [
    {
      question: 'Which game is known as the "Battle Royale" genre pioneer?',
      options: ['Fortnite', 'PUBG', 'Apex Legends', 'Call of Duty'],
      correctAnswer: 'PUBG',
    },
    {
      question: 'What is the name of the main character in "The Legend of Zelda" series?',
      options: ['Zelda', 'Link', 'Ganon', 'Mario'],
      correctAnswer: 'Link',
    },
    {
      question: 'Which company developed the game "Cyberpunk 2077"?',
      options: ['Ubisoft', 'CD Projekt Red', 'EA', 'Blizzard'],
      correctAnswer: 'CD Projekt Red',
    },
  ];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
    return (
        <section className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Gaming Quiz</h2>
        {showScore ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">
              Your Score: {score} out of {quizData.length}
            </h3>
            <button
              onClick={restartQuiz}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {quizData[currentQuestion].question}
            </h3>
            <div className="space-y-4">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className="w-full bg-white p-4 rounded-lg shadow-sm hover:bg-gray-50 transition duration-300 text-left"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
    );
};

export default Leader;