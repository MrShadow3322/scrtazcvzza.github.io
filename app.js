// Simulate user balance storage
let balance = localStorage.getItem('balance');
if (!balance) {
  balance = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
  localStorage.setItem('balance', balance);
}

document.getElementById('balance').textContent = `${balance} RatCoin`;

function startGame() {
  document.getElementById('game').style.display = 'block';
  document.getElementById('game-result').textContent = '';
}

function earnCoins() {
  // Simulate earning coins in the game
  const earnedCoins = Math.floor(Math.random() * 500) + 100;
  balance = parseInt(localStorage.getItem('balance')) + earnedCoins;
  localStorage.setItem('balance', balance);
  document.getElementById('balance').textContent = `${balance} RatCoin`;
  document.getElementById('game-result').textContent = `You earned ${earnedCoins} RatCoin!`;
}

async function subscribe() {
  try {
    // Simulate checking subscription
    const response = await fetch('https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates');
    const data = await response.json();
    
    // Simulate successful subscription
    const subscribed = true; // Replace with actual subscription check
    if (subscribed) {
      const reward = 1000;
      balance = parseInt(localStorage.getItem('balance')) + reward;
      localStorage.setItem('balance', balance);
      document.getElementById('balance').textContent = `${balance} RatCoin`;
      alert('You have received 1000 RatCoin for subscribing!');
    } else {
      alert('Subscription failed. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
