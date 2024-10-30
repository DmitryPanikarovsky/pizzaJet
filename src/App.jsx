import "./App.scss";

import { Container } from "./component/Container/Container";
import { Header } from "./component/Header/Header";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { NotFound } from "./pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";

export const SearchContext = createContext();

function App() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <div className="App">
                <Header />
                <div className="content">
                    <Container>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Container>
                </div>
            </div>
        </SearchContext.Provider>
    );
}

export default App;
