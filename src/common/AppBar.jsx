import {StyleRoot} from 'radium';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import AppBarDrawer from './AppBarDrawer';

// MT: We'll need to refactor this into a listener because in its current state it requires a refresh.
let isMobile = window.matchMedia('(max-width: 959px)');

const AppBarStyle = {
    style: {
        position: 'fixed',
        top: '0',
        background: 'none',
        boxShadow: 'none',
        color: 'white'
    }
};

const AppBarToolBarStyle = {
    '@media (max-width: 959px)': {
        display: 'none'
    },
    style: {
        height: 'inherit',
        backgroundColor: 'inherit'
    }
};

const AppBarTitle = {
    fontSize: '1.6em'
};

const AppBarTitleText = {
    color: 'lightblue'
};

const AppBarButton = {
    height: '100%',
    padding: '0',
    color: 'white',
    fontSize: '1.3em',
    fontWeight: 'bold'
};

class LawSmithAppBar extends React.Component {
    // MT: This constructor sets the intial state of the AppBarDrawer.
    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    // MT: This function toggles the state of the drawer and allows us to pass that state to the AppBarDrawer component. The 'open' and 'onToggleDrawer' tags on <AppBarDrawer /> are bound to these states.
    toggleDrawer() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            // MT: When using Material UI components, we need to attach the primary style object to the StyleRoot tag, then create an inner object for the component (in this case, AppBar) to access (i.e. AppBarStyle.style).
            <StyleRoot style={AppBarStyle}>
                <AppBar
                    style={AppBarStyle.style}
                    title={<LawSmithTitle />}
                    showMenuIconButton={(isMobile.matches ? true : false)}
                    onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
                    children={<LawSmithAppBarItems key='0'/>}
                />
                <AppBarDrawer open={this.state.open} onToggleDrawer={this.toggleDrawer.bind(this)}/>
            </StyleRoot>
        );
    }
}

const LawSmithAppBarItems = () => (
    <StyleRoot style={AppBarToolBarStyle}>
        <Toolbar style={AppBarToolBarStyle.style}>
            <ToolbarGroup firstChild={true}>
                  <FlatButton style={AppBarButton} label="Solutions" />
                  <FlatButton style={AppBarButton} label="Partnerships" />
                  <FlatButton style={AppBarButton} label="BlogSmith" />
            </ToolbarGroup>
        </Toolbar>
    </StyleRoot>
);

const LawSmithTitle = () => (
        <StyleRoot style={AppBarTitle}>
                <span>Law</span>
                <span style={AppBarTitleText}>Smith</span>
        </StyleRoot>
);

export default LawSmithAppBar;
