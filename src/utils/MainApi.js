const BASE_URL = 'https://api.sseverniy-movies.nomoredomains.monster';
// const BASE_URL = 'http://localhost:3005';

export const register = ({name, email, password}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    } else {
      return Promise.reject(`При регистрации пользователя произошла ошибка со статусом ${res.status}`);
    }
  })
}

export const login = ({email, password}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    } else {
      return Promise.reject(`При авторизации пользователя произошла ошибка со статусом ${res.status}`);
    }
  })
  .then((data) => {
    if (data.token){
      console.log('Токен записывается');
      localStorage.setItem('jwt', data.token);
      return data;
    }
  })
}

export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
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

export const updateUserInfo = (token, data) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      name: data.name, 
      email: data.email
    })
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    } else {
      return Promise.reject(`При обновлении профиля произошла ошибка со статусом ${res.status}`);
    }
  })
}

export const saveMovie = (token, data) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: data.image,
      trailer: data.trailer,
      thumbnail: data.thumbnail,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      movieId: data.movieId,
    })
  })
  .then((res) => {
    if(res.ok) {
      return res.json();
    } else {
      return Promise.reject(`При сохранении фильма произошла ошибка со статусом ${res.status}`);
    }
  })
}

export const removeMovie = (token, movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`,{
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  .then((res) => {
    if(res.status === 200){
      return res.json();
    } else {
      return Promise.reject(`При удалении фильма произошла ошибка со статусом ${res.status}`);
    }
  })
}

export const getSavedMovies = (token) => {
  return fetch(`${BASE_URL}/movies`,{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  .then((res) => {
    if(res.status === 200){
      return res.json();
    } else {
      return Promise.reject(`При удалении фильма произошла ошибка со статусом ${res.status}`);
    }
  })
}
