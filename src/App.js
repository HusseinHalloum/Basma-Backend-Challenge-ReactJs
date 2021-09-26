import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Login from "./components/Login/Login";


import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  // const updateIsAuth = (token) => { setIsAuth(token);};
  console.log(isAuth);
  return (
    <Router>
      <Switch className="body-container">
        <Route exact path="/admin/login" render={(props) => <Login {...props} /> }/>
        <ProtectedRoute
          path="/admin/dashboard"
          component={Dashboard}
          isAuth={isAuth}
        />
        {(!isAuth || isAuth == '') ? <Redirect to="/admin/login" /> : <Redirect to="/admin/dashboard" /> }
      </Switch>
    </Router>
  );
};

export default App;
