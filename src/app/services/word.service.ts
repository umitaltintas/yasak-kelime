export function getWords() {
  return fetch('http://localhost:3001/words').then((data) => data.json());
}
