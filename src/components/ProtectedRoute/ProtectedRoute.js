import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => {
  const loggedIn = props.loggedIn || localStorage.getItem("jwt");
  return (
    <Route>
      {
        () => loggedIn ? (<Component {...props} />) : (<Redirect to="/" />)
      }
    </Route>
)}

export default ProtectedRoute; 