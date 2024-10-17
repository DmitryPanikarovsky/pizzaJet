import "./App.scss";
import { Container } from "./component/Container/Container";
import { Header } from "./component/Header/Header";
import { Categories } from "./component/Categories/Categories";
import { Sorting } from "./component/Sorting/Sorting";
import { PizzaBlock } from "./component/PizzaBlock/PizzaBlock";
import pizzas from "./assets/db.json";

function App() {
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
                            <PizzaBlock title={item.title} price={item.price} imageUrl={item.imageUrl} />
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default App;
