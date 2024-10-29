import React, { useState } from "react";

import "./App.scss";

import { Container } from "./component/Container/Container";
import { Header } from "./component/Header/Header";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { NotFound } from "./pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="App">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="content">
                <Container>
                    <Routes>
                        <Route path="/" element={<Home searchValue={searchValue} />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Container>
            </div>
        </div>
    );
}

export default App;
