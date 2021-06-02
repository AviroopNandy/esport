import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.component";
import Play from "./components/Play/Play.component";
import Devs from "./components/Devs/Devs.component";
import Result from "./components/Result/Result.component";
import Stats from "./components/Stats/Stats.component";
import HowItWorks from "./components/HowItWorks/HowItWorks.component";

import "./App.css";

const App = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={ Landing } />
                <Route path="/play" component={ Play } />
                <Route path="/devs" component={ Devs } />
                <Route path="/result" component={ Result } />
                <Route path="/stats" component={ Stats } />
                <Route path="/working" component={ HowItWorks } />
            </Switch>
        </React.Fragment>
    );
}

export default App;