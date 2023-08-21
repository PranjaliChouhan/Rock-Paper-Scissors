import "./App.css";
import React, { useState } from 'react';
import { Button, Grid, Typography, Container, Paper, Box } from '@mui/material';
import paper from "./assets/paper.png";
import rock from "./assets/rock.png";
import scissor from "./assets/scissor.png";

const choices = [
  { id: 'rock', image: rock },
  { id: 'paper', image: paper },
  { id: 'scissor', image: scissor },
];

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(choices[0]); // Set an initial choice
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const handleMoveSelection = (move) => {
    const computerMove = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(move);
    setComputerChoice(computerMove);

    // Determine the winner
    if (move.id === computerMove.id) {
      setWinner('tie');
    } else if (
      (move.id === 'rock' && computerMove.id === 'scissor') ||
      (move.id === 'paper' && computerMove.id === 'rock') ||
      (move.id === 'scissor' && computerMove.id === 'paper')
    ) {
      setWinner('player');
      setPlayerScore((prevScore) => prevScore + 1);
    } else {
      setWinner('computer');
      setComputerScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Rock, Paper, Scissors
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {choices.map((choice) => (
          <Grid item key={choice.id}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleMoveSelection(choice)}
            >
              <img
                className='image'
                src={choice.image}
                alt={choice.id}
                style={{ cursor: 'pointer' }}
              />
            </Button>
          </Grid>
        ))}
      </Grid>
     
      {playerChoice && computerChoice && ( // Check if choices are not null
        <Typography variant="h6" align="center" gutterBottom>
          {`You chose ${playerChoice.id}. Computer chose ${computerChoice.id}.`}
        </Typography>
      )}
      {winner && (
        <Typography variant="h5" align="center">
          {winner === 'tie'
            ? "It's a tie!"
            : winner === 'player'
            ? 'You win!'
            : 'Computer wins!'}
        </Typography>
      )}
       <Box mt={2} >
        <Paper elevation={3}  className="score">
          <Typography variant="h6" align="center" gutterBottom>
            Score Card
          </Typography>
          <Typography variant="body1"className="score-text">
            Player: {playerScore} &nbsp;&nbsp;&nbsp;&nbsp; Computer: {computerScore}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
