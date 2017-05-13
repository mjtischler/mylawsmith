import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class AppBarDrawer extends React.Component {
    // MT: 'this.props.open' and 'this.props.onToggleDrawer' are passed from the parent component. See AppBar.jsx for more information. Creating this component without 'this.state.xxx' allows us to produce a stateless component, ideal in React.
    render() {
        return (
            <Drawer
                docked={false}
                width={'70%'}
                open={this.props.open}
                onRequestChange={(this.props.onToggleDrawer)}>

                <MenuItem onTouchTap={(this.props.onToggleDrawer)}>Solutions</MenuItem>
                <MenuItem onTouchTap={(this.props.onToggleDrawer)}>Partnerships</MenuItem>
                <MenuItem onTouchTap={(this.props.onToggleDrawer)}>BlogSmith</MenuItem>
            </Drawer>
        );
    }
}

// MT: Check for appropriate property types as a failsafe against incorrect type returns.
AppBarDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    onToggleDrawer: PropTypes.func.isRequired
};

export default AppBarDrawer;
