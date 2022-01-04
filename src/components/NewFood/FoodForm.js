import {useState} from "react";
import "./FoodForm.css";
import Navbar from "../Navbar/Navbar";
import React from 'react';

const FoodForm = (props) => {

    const [enteredName, setName] = useState('');
    const [enteredCalories, setCalories] = useState('');
    const [enteredDate, setDate] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const caloriesChangeHandler = (event) => {
        setCalories(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const foodData = {
            name: enteredName,
            calories: enteredCalories,
            date: new Date(enteredDate)
        }

        props.onSaveFoodData(foodData);
        setName('');
        setCalories('');
        setDate('');
    }

    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <div className="new-food__controls">
                    <div className="new-food__control">
                        <label>Namirnica</label>
                        <input type="text" onChange={nameChangeHandler} value={enteredName}></input>
                    </div>
                    <div className="new-food__control">
                        <label>Kalorije</label>
                        <input type="number" onChange={caloriesChangeHandler} value={enteredCalories}></input>
                    </div>
                    <div className="new-food__control">
                        <label>Datum</label>
                        <input type="date" selected={new Date()} onChange={dateChangeHandler}
                               value={enteredDate}></input>
                    </div>
                </div>
                <div className="new-food__actions">
                    <button type="submit">Dodaj namirnicu</button>
                </div>
            </form>

        </React.Fragment>
    );
};

export default FoodForm;
