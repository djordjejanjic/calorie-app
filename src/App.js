import React, {useState, useEffect, Suspense, Fragment} from "react";
import "./App.css";
import Food from "./components/Food/Food";
import NewFood from "./components/NewFood/NewFood";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

const Contact = React.lazy(() => import('./components/Contact/Contact'));

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

    const [food, setFood] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const [user, setUsername] = useState(null);
    const [render, setRender] = useState(false);

    useEffect(() => {
        get().then(res => {
            console.log(res);

            setRender(true);

        });
        return () => {
            setRender(true);
        }
    }, [deleted, user, render]);

    const get = async () => {
        axios.get('http://localhost:5000/food').then(res => {
                //console.log("user"+username);
                //console.log(res.data);
                const username = sessionStorage.getItem("username");
                setUsername(username);
                setFood(res.data.filter(food => food.username === user));
                return true;
            }
        ).catch(err => console.log(err));

    }

    const addFoodHandler = (food) => {
        setFood((prevFood) => {
            return [food, ...prevFood];
        });
    };

    const deletedF = (data) => {
        setDeleted(data);
    }

    const setUsernameHandler = (loggedIn) => {
        setUsername(loggedIn);
    }

    return (
        <Fragment>
            <Suspense fallback={<p>Loading...</p>}>
                <Router>
                    <Switch>
                        <Route path='/' exact>
                            <Login user={setUsernameHandler}/>
                        </Route>
                        <Route path='/home' exact>
                            <NewFood onAddFood={addFoodHandler}></NewFood>
                            <Food foodDiary={food} deleted={deletedF}></Food>
                        </Route>
                        <Route path='/registracija'>
                            <Register/>
                        </Route>
                        <Route path='/kontakt'>
                            <Contact/>
                        </Route>
                    </Switch>
                </Router>
            </Suspense>
        </Fragment>
    );
}

export default App;
