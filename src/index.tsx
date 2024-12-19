import ReactDOM from "react-dom/client";
import "./index.scss";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Routing } from "react-router-dom";
import App from './App';


const rootElement = document.getElementById("root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    
    root.render(
        <Routing>
            <Provider store={store}>
                <div className="reactPizza">
                    <span>React</span>
                    <span>Pizza</span>
                    <span>(remastered)</span>
                </div>
                <App />
            </Provider>
        </Routing>
    );
}
