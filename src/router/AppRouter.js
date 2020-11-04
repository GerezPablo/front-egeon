import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {PrivateRoute} from './PrivateRoute';
import{PublicRoute} from './PublicRoute';

import { startChecking } from "../actions/auth";

import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";
import HomeScreen from "../components/home/HomeScreen";
import FavsScreen from "../components/home/FavsScreen";

export const AppRouter = () => {

    const dispatch = useDispatch();
    
    const { uid } = useSelector(state => state.auth);

    useEffect( () => {
        dispatch(startChecking());
    }, [dispatch])

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={!!uid} />
                    
                    <Route exact path="/register" component={RegisterScreen} isAuthenticated={!!uid} />    
                
                    <PrivateRoute exact path="/home" component={HomeScreen} isAuthenticated={!!uid} />
                    
                    <Route exact path="/favorites" component={FavsScreen} isAuthenticated={!!uid} />    
                    
                    <Redirect to= "/home" />
                </Switch>
            </div>
        </Router>    
    )
}
