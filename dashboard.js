document.addEventListener('DOMContentLoaded', () => {
    let currentCoins = 0; // Track user's coins

    const taskList = document.getElementById('taskList');

    // Example tasks
    const tasks = [
        { name: 'Cycle to Work', coins: 10, completed: false },
        { name: 'Plant 2 Trees', coins: 20, completed: false },
        { name: 'Recycle 5 Plastic Bottles', coins: 15, completed: false },
        { name: 'Walk 10,000 Steps', coins: 12, completed: false },
        { name: 'Use Public Transport', coins: 8, completed: false }
    ];

    // Function to update coin display
    function updateCoinDisplay() {
        const coinsDisplay = document.getElementById('coinsDisplay');
        if (coinsDisplay) {
            coinsDisplay.textContent = `Coins: ${currentCoins}`;
        }
    }

    // Render tasks
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            <span>${task.name} - Earn ${task.coins} coins</span>
            <button class="btn btn-success" id="complete-${index}">Complete</button>
        `;

        // Add functionality to the 'Complete' button
        const completeBtn = li.querySelector(`#complete-${index}`);
        completeBtn.addEventListener('click', () => {
            if (!task.completed) {
                task.completed = true;
                currentCoins += task.coins;
                alert(`Congrats! You earned ${task.coins} coins.`);
                updateCoinDisplay();
                completeBtn.textContent = 'Completed';
                completeBtn.classList.replace('btn-success', 'btn-secondary');
                completeBtn.disabled = true;
            } else {
                alert('Task already completed.');
            }
        });

        taskList.appendChild(li);
    });
});
