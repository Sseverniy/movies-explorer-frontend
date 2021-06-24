import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
// import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import './App.css';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  function changeLoggedIn() {
    console.log("Выходим из профиля!");
    setLoggedIn(!loggedIn);
  }


  return (
    <div className='app'>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/">
          <Main 
          loggedIn={loggedIn}/>
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <p>Saved Movies</p>
        </Route>
        <Route path="/profile">
          <Profile onExit={changeLoggedIn}/>
        </Route>
        <Route path="/signup">
          <Register/>
        </Route>
        <Route path="/signin">
          <Login/>
        </Route>
        <Route path="/not-found">
          <NotFoundPage goBack={goBack}/>
        </Route>
        <Redirect from="*" to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
