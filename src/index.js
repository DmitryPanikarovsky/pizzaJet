import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import { BrowserRouter as Routing } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Routing>
            <App />
        </Routing>
    </React.StrictMode>
);
