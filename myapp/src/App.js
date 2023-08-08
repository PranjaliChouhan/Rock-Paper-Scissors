import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

const choices = ['rock', 'paper', 'scissors'];

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const playGame = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerChoice);

    if (choice === computerChoice) {
      setResult('It\'s a tie!');
    } else if (
      (choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div>
        <button onClick={() => playGame('rock')}>Rock</button>
        <button onClick={() => playGame('paper')}>Paper</button>
        <button onClick={() => playGame('scissors')}>Scissors</button>
      </div>
      {userChoice && computerChoice && result && (
        <div>
          <p>You chose {userChoice}.</p>
          <p>Computer chose {computerChoice}.</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;
