import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

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
        <div>
            <h1>Teste</h1>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
