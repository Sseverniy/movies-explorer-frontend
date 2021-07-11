const MOVIES_URL = "https://api.nomoreparties.co/beatfilm-movies";

export const getAllMovies = () => {
  return fetch(MOVIES_URL, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Произошла ошибка со статусом ${res.status}`);
    }
  })
}