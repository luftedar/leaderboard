import './style.css';
import { createGame, getTable, postScore } from './api';

const refreshButton = document.querySelector('#refresh-button');
const submitButton = document.querySelector('#form-area button');

const renderBoard = async () => {
  let scores = await getTable();
  scores = scores.result;
  const scoreTable = document.querySelector('#score-table');
  scoreTable.innerHTML = '';
  scores.forEach((item) => {
    const newLi = `<li>${item.user}: ${item.score}</li>`;
    scoreTable.innerHTML += newLi;
  });
};

const createNewGame = async () => {
  await createGame();
  renderBoard();
};

createNewGame();

refreshButton.addEventListener('click', () => {
  renderBoard();
});

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const userInput = document.querySelector('#name');
  const scoreInput = document.querySelector('#score');
  await postScore(userInput.value, scoreInput.value);
  userInput.value = '';
  scoreInput.value = '';
  renderBoard();
});
