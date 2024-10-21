import "./App.scss";
import { Container } from "./component/Container/Container";
import { Header } from "./component/Header/Header";
import { Categories } from "./component/Categories/Categories";
import { Sorting } from "./component/Sorting/Sorting";
import { PizzaBlock } from "./component/PizzaBlock/PizzaBlock";
import React from "react";
import axios from "axios";
import { Skeleton } from "./component/PizzaBlock/Skeleton";

function App() {
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            axios.get("https://66f2d5e071c84d805876ef77.mockapi.io/pizzas").then((response) => {
                setPizzas(response.data);
                setIsLoading(false);
            });
        }, 5000);
    }, []);

    // React.useEffect(() => {
    //     fetch("https://66f2d5e071c84d805876ef77.mockapi.io/pizzas")
    //         .then((res) => res.json())
    //         .then((arr) => setPizzas(arr));
    // }, []);

    return (
        <div className="App">
            <Header />
            <div className="content">
                <Container>
                    <div className="content-top">
                        <Sorting />
                        <Categories />
                    </div>
                    <h2 className="heading">Все пиццы</h2>
                    <div className="content-page">
                        {isLoading
                            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                            : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)}
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default App;
