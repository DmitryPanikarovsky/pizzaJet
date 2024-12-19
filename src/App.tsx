import "./App.scss";

import { Container } from "./component/Container/Container";
import { Header } from "./component/Header/Header";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { NotFound } from "./pages/NotFound/NotFound";
import { Description } from "./pages/Description/Description";
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/pizza/:id" element={<Description />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Container>
            </div>
        </div>
    );
}

export default App;
