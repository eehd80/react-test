import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

import Main from "./container/main";
import WebtoonHome from "./container/webtoon";
import Viewer from "./container/view";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Main} />
                    <Route path="/webtoon/:webtoonId" component={WebtoonHome} />
                    <Route path="/viewer/:episodeId" component={Viewer} />
                </div>
            </Router>
        );
    }
}

export default App;