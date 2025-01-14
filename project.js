const prompt = require('prompt-sync')();

const ROWS = 3
const COLS = 3

const SYMBOLS_COUNT = {
  "A": 2,
  "B": 4,
  "C": 6,
  "D": 8
} 

const SYMBOLS_VALUE = {
  "A": 5,
  "B": 4,
  "C": 3,
  "D": 2
}

const deposit = () => {
  while (true) {
    const depositAmount = prompt('Enter the amount you want to deposit: ');
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log('Please enter a valid number');
    } else {
      return numberDepositAmount;
    }
  }
}

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt('Enter the number of lines you want to bet on (1-3): ');
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
        console.log('Invalid number of lines. Please enter a number between 1 and 3');
    } else {
      return numberOfLines;
    }
  }
}

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt('Enter the amount bet per line you want: ');
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
        console.log('Invalid bet amount. Please enter a valid number');
    } else {
      return numberBet;
    }
  }
}

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
      reels.push([]);
    const reelSymbols = [...symbols]
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels
}

const transpose = (reels) => {
  const rows = []

  for (let i = 0; i < ROWS; i++) {
    rows.push([])
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i])
    }
  }

  return rows
}

const printRows = (rows) => {
  for (const row of rows) {
    let rowString = '';
    for (const [i, symbol] of row.entries()){
      rowString += symbol
      if (i < row.length - 1) {
        rowString += ' | '
      }
    }
    console.log(rowString)
  }
}

const getWinnings = (rows, bet, lines) => {
  let winnings = 0;
  for (let row = 0; row < lines; row++) {
    const symbols = rows[row]
    let allSame = true

    for( const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false
        break
      }
    }

    if (allSame) {
      winnings += SYMBOLS_VALUE[symbols[0]] * bet
    }
  }
  return winnings
}

const game = () => {
  let balance = deposit();

  while (true) {
    console.log(`Your current balance is $${balance}`);
    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);
    balance -= bet * numberOfLines;
    const reels = spin();
    const rows = transpose(reels);
    console.log(reels);
    console.log(rows);
    printRows(rows)
    const winnings = getWinnings(rows, bet, numberOfLines);
    balance += winnings;
    console.log(`You have won $${winnings}`);

    if (balance <= 0) {
      console.log('You have run out of money.');
      const newDeposit = prompt('Do you want to make a new deposit and continue playing? (y/n): ');
      if (newDeposit === 'y') {
        balance = deposit();
        continue;
      } else {
        console.log('Thank you for playing! Goodbye!');
        break; 
      }
    }

    const continuePlaying = prompt('Do you want to play again? (y/n): ');
    

    if (continuePlaying != 'y') break
  }
}

game()








