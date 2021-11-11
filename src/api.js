const id = null;

const createGame = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Orcuns Game',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json());

const getTable = () => fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`)
  .then((res) => res.json());

const postScore = (userInput, scoreInput) => fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`, {
  method: 'POST',
  body: JSON.stringify({
    user: userInput,
    score: scoreInput,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json());

export { createGame, getTable, postScore };