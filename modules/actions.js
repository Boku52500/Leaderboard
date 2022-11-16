const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:5UJ3uAfYRXbJ57tyDjFq/scores';

const newScore = () => {
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

const deleteVals = () => {
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
};

const refreshVals = () => {
  async function allScore() {
    const boardList = document.querySelector('#board-list');
    boardList.innerHTML = '';
    const response = await fetch(api);
    const data = await response.json();
    data.result.forEach((newScore) => {
      boardList.innerHTML += `
      <li>${newScore.user}: ${newScore.score}</li>
      `;
    });
  }
  allScore();
};

export { newScore, deleteVals, refreshVals };