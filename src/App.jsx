import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LawSmithAppBar from './common/AppBar';
import Home from './home/Home';
import Solutions from './home/solutions/Solutions';
import Partnerships from './home/partnerships/Partnerships';
import Blogsmith from './home/blogsmith/Blogsmith';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            siteData: []
        };
    }

    componentDidMount() {
        this.getSiteData();
    }

    getSiteData() {
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
                            <Router>
                                <Switch>
                                    <Route exact path="/" component={() => <Home data={data.home}/>}/>
                                    <Route path="/solutions" component={() => <Solutions />}/>
                                    <Route path="/partnerships" component={() => <Partnerships />}/>
                                    <Route path="/blog" component={() => <Blogsmith />}/>

                                    <Route path="*" component={() => <Home data={data.home}/>} />
                                </Switch>
                            </Router>
                        </div>
                    ))}
                </div>
            </MuiThemeProvider>
        );
    }
}
