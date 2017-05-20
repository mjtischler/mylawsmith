import {StyleRoot} from 'radium';
import React from 'react';
import PropTypes from 'prop-types';
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
                {this.props.data.map(data => (
                    <div key={data.key}>
                        <AppBar
                            style={AppBarStyle.style}
                            title={<LawSmithTitle titleFirst={data.titleFirst} titleSecond={data.titleSecond}/>}
                            showMenuIconButton={(isMobile.matches ? true : false)}
                            onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}>

                            <LawSmithAppBarItems menuItems={data.menuItems}/>
                        </AppBar>

                        <AppBarDrawer open={this.state.open} onToggleDrawer={this.toggleDrawer.bind(this)}/>
                    </div>
                ))}
            </StyleRoot>
        );
    }
}

function LawSmithTitle(props) {
    return (
        <StyleRoot style={AppBarTitle}>
                <span>{props.titleFirst}</span>
                <span style={AppBarTitleText}>{props.titleSecond}</span>
        </StyleRoot>
    );
}

function LawSmithAppBarItems(props) {
    return (
        <StyleRoot style={AppBarToolBarStyle}>
            <Toolbar style={AppBarToolBarStyle.style}>
                    <ToolbarGroup>
                        {props.menuItems.map(data => (
                            <div key={data.key}>
                                <FlatButton style={AppBarButton} label={data.title} />
                            </div>
                        ))}
                    </ToolbarGroup>
            </Toolbar>
        </StyleRoot>
    );
}

LawSmithAppBar.propTypes = {
    data: PropTypes.array.isRequired
};

LawSmithTitle.propTypes = {
    titleFirst: PropTypes.string.isRequired,
    titleSecond: PropTypes.string.isRequired
};

LawSmithAppBarItems.propTypes = {
    menuItems: PropTypes.array.isRequired
};

export default LawSmithAppBar;
