import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {Router, Route} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import CalcNavigation from "../components/calcNavigation";
import BriksCalculator from "./briksCalculator";
import Description from "./description";

const history = createBrowserHistory();

class App extends Component {
    render() {

        return (
            <Router history={history}>
                <React.Fragment>
                    <CalcNavigation />
                    <hr />
                    <Route exact path={'/'} component={BriksCalculator}/>
                    <Route exact path={'/description'} component={Description}/>
                </React.Fragment>
            </Router>
        );
    }
}

export default hot(module)(App);
