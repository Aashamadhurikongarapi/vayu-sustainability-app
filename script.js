// Mock tasks and initial coin count
const tasks = [
    { name: "Cycle to work", coins: 10 },
    { name: "Plant 2 trees", coins: 20 },
    { name: "Walk for 30 minutes", coins: 15 },
    { name: "Use public transport", coins: 12 },
];
let coinCount = 100;

// Display the tasks dynamically in the task grid
function populateTasks() {
    const taskGrid = document.querySelector("#grid-cards .row");
    tasks.forEach(task => {
        const taskCard = `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">${task.name}</h3>
                        <p>Earn ${task.coins} coins</p>
                    </div>
                </div>
            </div>
        `;
        taskGrid.innerHTML += taskCard;
    });
}

// Display initial coin count
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#tasks-heading").insertAdjacentHTML(
        "afterend",
        `<p class="text-center">Total Coins: <span id="coin-count">${coinCount}</span></p>`
    );
    populateTasks();
});
