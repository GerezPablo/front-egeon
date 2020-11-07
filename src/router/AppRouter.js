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
                    {/* Public routes where you can acces without an account */}
                    <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={!!uid} />
                    <PublicRoute exact path="/register" component={RegisterScreen} isAuthenticated={!!uid} />
                
                    {/* Private routes you need an acount */}
                    <PrivateRoute exact path="/home" component={HomeScreen} isAuthenticated={!!uid} />
                    
                    <Redirect to= "/home" />
                </Switch>
            </div>
        </Router>    
    )
}
