let id;

const tryFetch = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Orcuns Game'
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
})
  .then((res) => res.json())
  .then((data) => id = data.result.split(" ")[3]);
  console.log(id);
}



 
export { tryFetch };