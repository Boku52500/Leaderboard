class Data {
  static getLocalStorage() {
    let leaderboard;
    if (localStorage.getItem('leaderboard') === null) {
      leaderboard = [];
    } else {
      leaderboard = JSON.parse(localStorage.getItem('leaderboard'));
    }
    return leaderboard;
  }
}

export default class Actions {
  static display() {
    const scores = Data.getLocalStorage();

    scores.forEach((newScore) => Actions.addScore(newScore));
  }

  static addScore(newScore) {
    if (newScore.name !== '') {
      const list = document.querySelector('#board-list');
      const newRow = document.createElement('tr');

      newRow.innerHTML = `
        <li>${newScore.name}:</li>
        <li>${newScore.score}</li>
        `;
      list.appendChild(newRow);
    }
  }

  static clearValues() {
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }

  static refreshAll() {
    const scores = Data.getLocalStorage();
    const list = document.querySelector('#board-list');
    list.parentElement.remove();
    scores.splice(0, scores.length);
    localStorage.setItem('leaderboard', JSON.stringify(scores));
    window.location.reload();
  }
}