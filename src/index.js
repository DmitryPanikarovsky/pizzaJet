import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Routing } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Routing>
                <div className='reactPizza'>
                    <span>React</span>
                    <span>Pizza</span>
                    <span>(remastered)</span>
                </div>
                <App />
            </Routing>
        </Provider>
    </React.StrictMode>
);
