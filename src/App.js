import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';


import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#00b0ff',
    }
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <div className="header">
            <p className="title">Lista de Compras</p>
          </div>
        </AppBar>
        <div>
            <h1>Teste</h1>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
