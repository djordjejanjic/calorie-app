import {useState} from "react";
import "./App.css";
import Food from "./components/Food/Food";
import NewFood from "./components/NewFood/NewFood";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contact from "./components/Contact/Contact";

const FOOD_DIARY = [
    {
        id: "f1",
        name: "Pizza",
        calories: 820,
        date: new Date(2021, 11, 2),
    },
    {
        id: "f2",
        name: "Burger",
        calories: 930,
        date: new Date(2021, 11, 2),
    },
    {
        id: "f3",
        name: "Coca-cola",
        calories: 120,
        date: new Date(2021, 11, 3),
    },
];

const App = () => {

    const [food, setFood] = useState(FOOD_DIARY);

    const addFoodHandler = (food) => {
        setFood((prevFood) => {
            return [food, ...prevFood];
        });
    };

    return (
            <Router>
                <Switch>
                <Route path='/' exact>
                    <NewFood onAddFood={addFoodHandler}></NewFood>
                    <Food foodDiary={food}></Food>
                </Route>
                <Route path='/kontakt'>
                    <Contact />
                </Route>
                </Switch>
            </Router>
    );
}

export default App;
