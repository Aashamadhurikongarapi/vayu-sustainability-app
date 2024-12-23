// Function to redeem an item
function redeemItem(cost) {
    if (currentCoins >= cost) {
        currentCoins -= cost;
        document.querySelector('.coin-count').textContent = currentCoins;
        alert(`Item redeemed! You spent ${cost} coins.`);
    } else {
        alert(`Not enough coins! You need ${cost - currentCoins} more coins.`);
    }
}
