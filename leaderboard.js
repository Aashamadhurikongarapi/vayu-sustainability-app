document.addEventListener('DOMContentLoaded', () => {
    const leaderboardTableBody = document.querySelector('#leaderboardTable tbody');
  
    // Sample leaderboard data
    const mockLeaders = [
      { user: 'Alice', coins: 120 },
      { user: 'Bob', coins: 95 },
      { user: 'Charlie', coins: 80 },
      { user: 'Dave', coins: 75 },
      { user: 'Eve', coins: 70 }
    ];
  
    // Populate the leaderboard table
    mockLeaders.forEach((leader, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${leader.user}</td>
        <td>${leader.coins}</td>
      `;
      leaderboardTableBody.appendChild(row);
    });
  });
  