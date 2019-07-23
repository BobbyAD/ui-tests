import React from 'react';
import './App.css';
import { CssBaseline, MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';

import {Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import LandingPage from './components/LandingPage/LandingPage';
import ClipPath from './components/clip-path-test/ClipPath';



function App() {

    const theme = createMuiTheme({
        palette: {
            background: {
                default: "rgb(29,29,29)",
            },
        }
    })

    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <div>
                    <Navigation />
                </div>
                <div>
                    <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/clip-path-test" exact component={ClipPath} />
                    </Switch>
                </div>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
