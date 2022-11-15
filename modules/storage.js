export default class Data {
  static getLocalStorage() {
    let leaderboard;
    if (localStorage.getItem('leaderboard') === null) {
      leaderboard = [];
    } else {
      leaderboard = JSON.parse(localStorage.getItem('leaderboard'));
    }
    return leaderboard;
  }

  static setLocalStorage(newScore) {
    const leaderboard = Data.getLocalStorage();
    leaderboard.push(newScore);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
  }
}