import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { useAuth } from "./hooks";

import { PrivateRoute } from "./components/private-route";

import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashboard";

export function Routes () {
    const { userToken } = useAuth();

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={() => <Login />} />
                <Route exact path="/register" component={() => <Register />} />
                <PrivateRoute 
                    isAuthenticated={userToken} 
                    path="/dashboard" 
                    component={() => <Dashboard />}
                />
            </Switch>
        </Router>
    );
}