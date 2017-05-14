import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LawSmithAppBar from './common/AppBar';
import Home from './home/Home';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            siteData: []
        };
    }

    componentDidMount() {
        this.GetSiteData();
    }

    GetSiteData() {
        // MT: When loading json, we need to be sure to run `response.json()` first in the promise chain to populate the `this.state.siteData` object.
        return fetch('/data/data.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                siteData: data
            });
        });
    }

    render() {
        const lawSmithData = this.state.siteData;

        return (
            <MuiThemeProvider>
                <div>
                    {lawSmithData.map(data => (
                        <div key={data.key}>
                            <LawSmithAppBar data={data.appBar}/>
                            <Home data={data.home}/>
                        </div>
                    ))}
                </div>
            </MuiThemeProvider>
        );
    }
}
