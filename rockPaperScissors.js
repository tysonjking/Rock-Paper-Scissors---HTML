const getUserChoice = userInput => {
    userInput = userInput.toLowerCase ();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      return 'Error!';
    }
  }
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random () * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'scissors';
      case 2:
        return 'paper';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'It is a tie game!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
      return 'Computer Wins!';
      } else {
        return 'User Wins!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer Wins!';
      } else {
        return 'User Wins!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer Wins!';
      } else {
        return 'User Wins!';
      }
    }  
  }
  
  const playGame = () => {
    userChoice = getUserChoice ('scissors');
    computerChoice = getComputerChoice();
    console.log('User threw: '+ userChoice);
    console.log('Computer threw: '+ computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    
  }
  
  playGame();
