import {StyleRoot} from 'radium';
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import BackgroundImage from '../images/DeLandCourthouse.jpg';

const HomeStyle = {
    display: 'flex',
    height: '731px',
    justifyContent: 'center',
    backgroundImage: 'url(' + BackgroundImage + ')',
    '@media (max-width: 959px)': {
        height: '100vh'
    }
};

const HomeBannerStyle = {
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white'
};

const HomeBannerTextHeaderStyle = {
    fontSize: '5em',
    '@media (max-width: 959px)': {
        fontSize: '3em'
    }
};

const HomeBannerTextSubheadStyle = {
    color: 'lightblue',
    fontSize: '4em',
    '@media (max-width: 959px)': {
        fontSize: '2.4em'
    }
};

const HomeBannerButtonStyle = {
    height: '4em',
    border: '1px solid rgba(255, 255, 255, .6)',
    margin: '20px 0px',
    color: 'white',
    ':hover': {
        border: '5px solid rgba(255, 255, 255, .6)'
    }
};

class Home extends React.Component {
    render() {
        return (
            <StyleRoot style={HomeStyle}>
                <HomeBannerText />
            </StyleRoot>
        );
    }
}

class HomeBannerText extends React.Component {
    render() {
        return (
            <StyleRoot style={HomeBannerStyle}>
                <span style={HomeBannerTextHeaderStyle}>WE&apos;RE BUILDING PARTNERSHIPS.</span>
                <br />
                <span style={HomeBannerTextSubheadStyle}>Join our journey.</span>
                <br />
                <FlatButton style={HomeBannerButtonStyle} label="See what we've created"/>
            </StyleRoot>
        );
    }
}

export default Home;
