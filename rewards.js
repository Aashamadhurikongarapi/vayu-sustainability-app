let currentCoins = 100; // Example current coins (can be dynamically fetched or updated)

document.addEventListener('DOMContentLoaded', () => {
  const rewardsRow = document.getElementById('rewardsRow');

  const mockRewards = [
    { name: 'Swiggy Coupon', cost: 50 },
    { name: 'Amazon Gift Card', cost: 100 },
    { name: 'Tree Sapling Kit', cost: 30 }
  ];

  mockRewards.forEach(reward => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-4 mb-3';

    colDiv.innerHTML = `
      <div class="card shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${reward.name}</h5>
          <p class="card-text">Cost: ${reward.cost} coins</p>
          <button class="btn btn-primary" onclick="redeemReward(${reward.cost})">
            Redeem
          </button>
        </div>
      </div>
    `;

    rewardsRow.appendChild(colDiv);
  });
});

function redeemReward(cost) {
  if (currentCoins >= cost) {
    currentCoins -= cost;
    alert(`Reward redeemed! You spent ${cost} coins.`);
    updateCoinDisplay();
  } else {
    alert('Not enough coins to redeem this reward.');
  }
}

function updateCoinDisplay() {
  const coinsDisplay = document.getElementById('coinsDisplay');
  if (coinsDisplay) {
    coinsDisplay.textContent = `Coins: ${currentCoins}`;
  }
}
