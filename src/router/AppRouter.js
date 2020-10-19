import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import LoginScreen from "../components/auth/LoginScreen";
import HomeScreen from "../components/home/HomeScreen";

export const AppRouter = () => {
    return (
        <Router>
            <div>
              <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/" component={HomeScreen}/>
                    <Redirect to= "/" />
                </Switch>
            </div>
        </Router>    
    )
}
