import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LawSmithAppBar from './common/AppBar';
import Home from './home/Home';

const App = () => (
    <MuiThemeProvider>
        <div>
            <LawSmithAppBar />
            <Home />
        </div>
    </MuiThemeProvider>
);

export default App;
