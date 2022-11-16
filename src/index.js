import './style.css';

import { newScore, deleteVals, refreshVals } from '../modules/actions.js';

document.addEventListener('DOMContentLoaded', refreshVals());

document.querySelector('#add').addEventListener('click', (e) => {
  e.preventDefault();

  newScore();
  deleteVals();
})

document.querySelector('#refresh').addEventListener('click', () => {
  refreshVals();
});