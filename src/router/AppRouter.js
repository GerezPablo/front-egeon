import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {PrivateRoute} from './PrivateRoute';
import{PublicRoute} from './PublicRoute';

import { startChecking } from "../actions/auth";

import LoginScreen from "../components/auth/LoginScreen";
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
                    <PublicRoute 
                    exact 
                    path="/login" 
                    component={LoginScreen}
                     isAuthenticated={!!uid} 
                />
                    <PrivateRoute exact path="/home" component={HomeScreen} isAuthenticated={!!uid} />
                    <Redirect to= "/home" />    
                </Switch>
            </div>
        </Router>    
    )
}
