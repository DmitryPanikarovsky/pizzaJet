import "./App.scss";

import { Container } from "./component/Container/Container";
import { Header } from "./component/publicApi";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ "./pages/Cart/Cart"));
const Description = lazy(
    () => import(/* webpackChunkName: "Description" */ "./pages/Description/Description")
);
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound/NotFound"));

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                <Container>
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/pizza/:id" element={<Description />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </Container>
            </div>
        </div>
    );
}

export default App;
