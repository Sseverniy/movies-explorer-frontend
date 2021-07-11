import React from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import SavedMovies from "../SavedMovies/SavedMovies";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as MainApi from "../../utils/MainApi";
import * as MoviesApi from "../../utils/MoviesApi";
import "./App.css";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/UserContext";
import useViewport from '../../utils/useViewport';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [burgerMenu, setBurgerMenu] = React.useState(false);
  const history = useHistory();

  const [currentUser, setCurrentUser] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const {width} = useViewport();
  const [cardCounter, setCardCounter] = React.useState(0);
  const [cardCounterMore, setCardCounterMore] = React.useState(0);
  const [preloader, setPreloader] = React.useState(false);

  function checkWidth() {
    if (width > 995) {
      setCardCounter(12);
      setCardCounterMore(3);
    } else if(width > 480) {
      setCardCounter(8);
      setCardCounterMore(2);
    } else {
      setCardCounter(5);
      setCardCounterMore(2);
    }
  }

  function goBack() {
    history.goBack();
  }

  function handleSignOut(){
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("saved-movies");
    setLoggedIn(false);
    debugger;
    history.push("/signin");
  }

  function handleSignIn(values) {
    setPreloader(true);
    MainApi.login(values)
    .then((res)=>{
      if(res.statusCode !== 400){
        setLoggedIn(true);
        console.log('Вы успешно вошли в профиль!');
        history.push('/movies');
      } else {
        console.log('Что-то пошло не так! Попробуйте ещё раз.');
      }
    })
    .catch((err)=> {
      console.log(err);
    })
    .finally(()=>setPreloader(false));
  }

  function handleRegister(values) {
    setPreloader(true);
    MainApi.register(values)
      .then((res)=>{
        if(res.statusCode !== 400){
          console.log('Вы успешно зарегистрировались!');
          handleSignIn(values);
          history.push('/movies');
        } else {
          console.log('Что-то пошло не так! Попробуйте ещё раз.');
        }
      })
      .catch((err)=> {
        console.log(err);
      })
      .finally(()=>setPreloader(false));
  }

  // function changeLoggedIn(values) {
  //   if (loggedIn) {
  //     handleSignOut();
  //   } else {
  //     handleSignIn(values);
  //   }
  // }

  function toggleBurgerMenu() {
    setBurgerMenu(!burgerMenu);
  }

  function updateUserProfile(data) {
    setPreloader(true);
    MainApi.updateUserInfo(localStorage.getItem("jwt"), data)
    .then((updatedData) => {
      setCurrentUser(updatedData);
      setLoggedIn(true);
    })
    .catch((err)=> console.log(err))
    .finally(()=>setPreloader(false));
  }

  function saveMovie(token, movie) {
    return MainApi.saveMovie(token, movie)
  }

  function deleteMovie(token, id) {
    return MainApi.removeMovie(token, id)
  }

  function getAllMovies() {
    return MoviesApi.getAllMovies();
  }

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.getUserInfo(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
        })
        .catch((err) => console.log(err));
    }
  };

  function checkSavedMovies() {
    const jwt = localStorage.getItem("jwt");
    MainApi.getSavedMovies(jwt)
    .then((cards) => {
      if(localStorage.getItem("saved-movies")) {
        setSavedMovies(JSON.parse(localStorage.getItem("saved-movies")));
      }
      const filteredData = cards.filter((card)=> card.owner === currentUser._id);
      setSavedMovies(filteredData);
    })
    .catch((err)=>console.log(err));
  }

  React.useEffect(() => {
      getAllMovies()
      .then((cards) => {
        if (localStorage.getItem("movies")) {
          setMovies(JSON.parse(localStorage.getItem("movies")));
          setIsLoaded(true);
        } 
        setMovies(cards.map((card) =>({
          country: card.country,
          movieId: card.id,
          director: card.director,
          duration: card.duration,
          year: card.year,
          description: card.description,
          image: `https://api.nomoreparties.co${card.image.url}`,
          trailer: card.trailerLink,
          thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
          nameRU: card.nameRU,
          nameEN: card.nameEN,
        })))
        setIsLoaded(true);
      })
      .catch((err) => {console.log(err)});
  },[]);
  
  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getSavedMovies(localStorage.getItem("jwt"))
      .then((cards)=> {
        const filteredData = cards.filter((card)=> card.owner === currentUser._id);
        setSavedMovies(filteredData);
      })
      .catch((err)=>console.log(err));
    }
    
  },[loggedIn, history]);

  React.useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  React.useEffect(()=>{
    checkWidth();
  },);

  return (
    isLoaded && movies &&
      <CurrentUserContext.Provider value={currentUser}>
        <div className="app">
          <Header
            loggedIn={loggedIn}
            openBurgerMenu={toggleBurgerMenu}
            burgerMenu={burgerMenu}
          />
          <BurgerMenu
            burgerMenu={burgerMenu}
            closeBurgerMenu={toggleBurgerMenu}
          />
          <Switch>
            <Route path="/" exact>
              <Main loggedIn={loggedIn} />
            </Route>
            <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies} preloader={preloader} setPreloader={setPreloader} movies={movies} checkMovies={checkSavedMovies} savedMovies={savedMovies} cardCounter={cardCounter} cardCounterMore={cardCounterMore} saveMovie={saveMovie} deleteMovie={deleteMovie}/>
            <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} component={SavedMovies} preloader={preloader} setPreloader={setPreloader} checkMovies={checkSavedMovies} savedMovies={savedMovies} cardCounter={cardCounter} cardCounterMore={cardCounterMore} movies={movies} deleteMovie={deleteMovie}/>
            <ProtectedRoute path="/profile" loggedIn={loggedIn} onExit={handleSignOut} onUpdate={updateUserProfile} preloader={preloader} component={Profile} />
            <Route path="/signup">
              <Register onRegister={handleRegister} preloader={preloader}/>
            </Route>
            <Route path="/signin">
              <Login onLogin={handleSignIn} preloader={preloader} />
            </Route>
            <Route path="/not-found">
              <NotFoundPage goBack={goBack} />
            </Route>
            <Redirect from="*" to="/not-found" />

          </Switch>
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
