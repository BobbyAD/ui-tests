import React from 'react';
import './App.css';
import Main from './components/Main';
import { CssBaseline, MuiThemeProvider, createMuiTheme } from '@material-ui/core';



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
                <Main />
            </MuiThemeProvider>
        </div>
    );
}

export default App;
