import Main from '../Main/Main';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <p>Movies</p>
        </Route>
        <Route path="/saved-movies">
          <p>Saved Movies</p>
        </Route>
        <Route path="/profile">
          <p>Profile</p>
        </Route>
        <Route path="/signup">
          <p>Signup</p>
        </Route>
        <Route path="/signin">
          <p>Signin</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
