import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import './Home.css';
import BackgroundImage from '../images/DeLandCourthouse.jpg';

const HomeStyle = {
    display: 'flex',
    height: '731px',
    justifyContent: 'center',
    backgroundImage: 'url(' + BackgroundImage + ')'
};

const HomeBannerStyle = {
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white'
};

const HomeBannerTextHeaderStyle = {
    fontSize: '5em'
};

const HomeBannerTextSubheadStyle = {
    color: 'lightblue',
    fontSize: '4em'
};

const HomeBannerButtonStyle = {
    height: '4em',
    border: '1px solid rgba(255, 255, 255, .6)',
    margin: '20px 0px',
    color: 'white'
};

const Home = () => (
    <div>
        <div style={HomeStyle}>
            <HomeBannerText />
        </div>
    </div>
);

const HomeBannerText = () => (
    <div style={HomeBannerStyle}>
        <span style={HomeBannerTextHeaderStyle}>WE'RE BUILDING PARTNERSHIPS.</span>
        <br />
        <span style={HomeBannerTextSubheadStyle}>Join our journey.</span>
        <br />
        <FlatButton style={HomeBannerButtonStyle} label="See what we've created"/>
    </div>
);

export default Home;
