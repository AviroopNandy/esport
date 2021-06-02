import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { QProvider } from "./context";
import App from "./App";

import "./index.css";

ReactDOM.render(
    <QProvider>
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    </QProvider>,
    document.getElementById("root")
);