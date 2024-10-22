import React from "react";

import "./App.scss";

import { Container } from "./component/Container/Container";
import { Header } from "./component/Header/Header";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { EmptyCart } from "./pages/NotFound/EmptyCart";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                <Container>
                    <Home />
                    <Cart />
                    <EmptyCart />
                </Container>
            </div>
        </div>
    );
}

export default App;
