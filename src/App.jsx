import "./App.scss";
import { Container } from "./component/Container/Container";
import { Header } from "./component/Header/Header";
import { Categories } from "./component/Categories/Categories";
import { Sorting } from "./component/Sorting/Sorting";
import { PizzaBlock } from "./component/PizzaBlock/PizzaBlock";
import React from "react";
import axios from "axios";

function App() {
    const [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
        axios.get("https://66f2d5e071c84d805876ef77.mockapi.io/pizzas").then((response) => setPizzas(response.data));
    }, []);

    return (
        <div className="App">
            <Header />
            <div className="content">
                <Container>
                    <div className="content-top">
                        <Categories />
                        <Sorting />
                    </div>
                    <h2 className="heading">Все пиццы</h2>
                    <div className="pizza-page">
                        {pizzas.map((item) => (
                            <PizzaBlock {...item} />
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default App;
