import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.component";
import Play from "./components/Play/Play.component";

import "./App.css";

const App = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={ Landing } />
                <Route path="/play" component={ Play } />
            </Switch>
        </React.Fragment>
    );
}

export default App;