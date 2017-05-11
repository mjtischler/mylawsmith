import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import './AppBar.css';

const AppBarStyle = {
    position: 'fixed',
    top: '0',
    background: 'none',
    boxShadow: 'none',
    color: 'white'
};

const AppBarToolBarStyle = {
    height: 'inherit',
    backgroundColor: 'inherit'
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

const LawSmithAppBar = () => (
        <AppBar
            style={AppBarStyle}
            title={<LawSmithTitle />}
            showMenuIconButton={false}
            children={<LawSmithAppBarItems />}
        />
);

const LawSmithAppBarItems = () => (
    <Toolbar style={AppBarToolBarStyle}>
        <ToolbarGroup firstChild={true}>
              <FlatButton style={AppBarButton} label="Solutions" />
              <FlatButton style={AppBarButton} label="Partnerships" />
              <FlatButton style={AppBarButton} label="BlogSmith" />
        </ToolbarGroup>
    </Toolbar>
);

const LawSmithTitle = () => (
    <div style={AppBarTitle}>
        <span>Law</span>
        <span style={AppBarTitleText}>Smith</span>
    </div>
);

export default LawSmithAppBar;
