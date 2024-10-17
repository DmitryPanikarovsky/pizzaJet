import "./App.scss";
import { Container } from "./component/Container/Container";
import { Header } from "./component/Header/Header";
import { Categories } from "./component/Categories/Categories";
import { Sorting } from "./component/Sorting/Sorting";
import { PizzaBlock } from "./component/PizzaBlock/PizzaBlock";

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
                    <div className="pizza-pages">
                        <PizzaBlock title="Чизбургер-пицца" imageUrl="./img/products/image 2.png" price="499" />
                        <PizzaBlock title="Сырная" imageUrl="./img/products/image 5.png" price="1099" />
                        <PizzaBlock title="Мексиканская" imageUrl="./img/products/image 6.png" price="779" />
                        <PizzaBlock title="Дольче-густо" imageUrl="./img/products/image 7.png" price="899" />
                        <PizzaBlock title="Шляпа полная" imageUrl="./img/products/image 5.png" price="199" />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default App; 
